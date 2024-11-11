type ParsedCommand = Record<string, string[]>

export class CommandParser {
  static parse(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let currentCommand = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        currentCommand = item;
      } else if (currentCommand && item) {
        acc[currentCommand].push(item);
      }

      return acc;
    }, parsedCommand);
  }
}