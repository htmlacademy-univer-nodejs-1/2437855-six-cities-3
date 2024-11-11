import { getErrorMessage } from '../../helpers/index.js';
import { createOffer } from '../../helpers/offer.js';
import {Command} from './command.interface.js';
import {TSVFileReader} from '../../file-reader/tsv-file-reader.js';

export class ImportCommand implements Command {
    public getName(): string {
        return '--import';
      }

      private onImportedLine(line: string) {
        const offer = createOffer(line);
        console.info(offer);
      }
    
      private onCompleteImport(count: number) {
        console.info(`${count} rows imported.`);
      }

    public execute(filename: string): void {
        const fileReader = new TSVFileReader(filename.trim());

        fileReader.on('line', this.onImportedLine);
        fileReader.on('end', this.onCompleteImport);

        try {
            fileReader.read();
        } catch (err) {
            console.error(`Can't import data from file: ${filename}`);
            console.error(getErrorMessage(err));
        }
    }
}