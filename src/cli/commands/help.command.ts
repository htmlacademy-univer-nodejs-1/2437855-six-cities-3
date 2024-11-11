import { inject, injectable } from 'inversify';
import { Command } from './command.interface.js';
import chalk from 'chalk';
import { Component } from '../../types/index.js';
import { Logger } from '../../logger/index.js';

@injectable()
export class HelpCommand implements Command {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
  ) {}
  public getName(): string {
    return '--help';
  }

  public async execute(): Promise<void> {
    this.logger.info(`
    ${chalk.bgYellow('Программа для подготовки данных для REST API сервера.')}
    Пример:
      cli.js ${chalk.cyan('--<command>')} [--arguments]
    Команды:
      ${chalk.cyan('--version')}:                   ${chalk.magenta('# выводит номер версии')}
      ${chalk.cyan('--help')}:                      ${chalk.magenta('# печатает этот текст')}
      ${chalk.cyan('--import')} <path>:             ${chalk.magenta('# импортирует данные из файла с расширением TSV')}
  `);
  }
}