import { injectable, inject } from 'inversify';
import { getMongoURI } from '../../helpers/index.js';
import { createMockOffer } from '../../helpers/offer.js';
import {Command} from './command.interface.js';
import {TSVFileReader} from '../../file-reader/tsv-file-reader.js';
import { Component } from '../../types/component.enum.js';
import { DefaultOfferService } from '../../modules/offer/default-offer.service.js';
import { DefaultUserService } from '../../modules/user/default-user.service.js';
import { Config, RestSchema } from '../../config/index.js';
import { DatabaseClient } from '../../database-client/index.js';
import { DEFAULT_USER_PASSWORD } from '../const.js';
import { MockOffer } from '../../types/index.js';
import chalk from 'chalk';
import { Logger } from '../../logger/index.js';

@injectable()
export class ImportCommand implements Command {
    constructor(
        @inject(Component.OfferService) private readonly offerService: DefaultOfferService,
        @inject(Component.UserService) private readonly userService: DefaultUserService,
        @inject(Component.Config) private readonly config: Config<RestSchema>,
        @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
        @inject(Component.Logger) private readonly logger: Logger,
      ) {
        this.onImportedLine = this.onImportedLine.bind(this);
        this.onCompleteImport = this.onCompleteImport.bind(this);
    }

    public getName(): string {
        return '--import';
      }

      private async onImportedLine(line: string, resolve: () => void) {
        const mockOffer = createMockOffer(line);
        await this.createOffer(mockOffer);
        resolve();
      }
    
      private async onCompleteImport(count: number) {
        this.logger.info(`${chalk.green(`Successfully imported  ${chalk.bgYellowBright(` ${count} `)} rows`)}`);
        await this.databaseClient.disconect();
      }
    
      private async createOffer(mockOffer: MockOffer): Promise<void> {
        const {user, ...rawOffer} = mockOffer;
        const userWithPassword = {
          ...user,
          password: DEFAULT_USER_PASSWORD
        };
        const userId = (await this.userService.findOrCreate(userWithPassword, this.config.get('SALT')))._id.toString();
        const offer = {...rawOffer , userId};
        await this.offerService.create(offer);
    }

    private async _initDb() {
    const mongoUri = getMongoURI(
        this.config.get('DB_USER'),
        this.config.get('DB_PASSWORD'),
        this.config.get('DB_HOST'),
        this.config.get('DB_PORT'),
        this.config.get('DB_NAME'),
    );

        return this.databaseClient.connect(mongoUri);
    }

    public async execute(...parameters: string[]): Promise<void> {
        const [filename] = parameters;
        const fileReader = new TSVFileReader(filename.trim());
        await this._initDb();

        fileReader.on('line', this.onImportedLine);
        fileReader.on('end', this.onCompleteImport);

        try {
            await fileReader.read();
          } catch (error) {
            this.logger.error(`Can't import data from file: ${filename}`, error as Error);
        }
    }
}