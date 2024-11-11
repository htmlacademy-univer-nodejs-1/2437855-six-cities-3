import { inject, injectable } from 'inversify';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {Command} from './command.interface.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../logger/index.js';


@injectable()
export class VersionCommand implements Command {
    constructor(
        @inject(Component.Logger) private readonly logger: Logger,
        private readonly filePath: string = './package.json'
    ) {}

    public getName(): string {
        return '--version';
      }

    private readVersion(): string {
        const jsonContent = readFileSync(resolve('./package.json'), 'utf-8');
        const importedContent = JSON.parse(jsonContent);

        return importedContent.version;
    }

    public async execute(..._parameters: string[]): Promise<void> {
        try {
          const version = this.readVersion();
          this.logger.info(version);
        } catch (error: unknown) {
          this.logger.error(`Failed to read version from ${this.filePath}`, error as Error);
        }
    }
}