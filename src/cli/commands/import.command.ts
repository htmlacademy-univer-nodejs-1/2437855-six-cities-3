import chalk from 'chalk';
import {Command} from './command.interface.js';
import {TSVFileReader} from '../../file-reader/tsv-file-reader.js';

export class ImportCommand implements Command {
    public getName(): string {
        return '--import';
      }

  public execute(filename: string): void {
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.showFormatData());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }
      console.log(`Can't import data from file: '${chalk.red(err.message)}'`);
    }
  }
}