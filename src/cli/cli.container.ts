import { DatabaseClient } from '../database-client/database-client.interface.js';
import { MongoDatabaseClient } from '../database-client/mongo.database-client.js';
import { Component } from '../types/component.enum.js';
import { Logger, ConsoleLogger } from '../logger/index.js';
import { Config, RestConfig, RestSchema } from '../config/index.js';
import { Container } from 'inversify';
import { CLIApplication } from './cli-application.js';
import { GenerateCommand, HelpCommand, ImportCommand, VersionCommand } from './index.js';

export const createSLIApplication = (): Container => {
  const sliContainer = new Container();
  sliContainer.bind<CLIApplication>(Component.CLIApplication).to(CLIApplication).inSingletonScope();
  sliContainer.bind<Logger>(Component.Logger).to(ConsoleLogger).inSingletonScope();
  sliContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  sliContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();
  sliContainer.bind<VersionCommand>(Component.VersionCommand).to(VersionCommand).inSingletonScope();
  sliContainer.bind<HelpCommand>(Component.HelpCommand).to(HelpCommand).inSingletonScope();
  sliContainer.bind<ImportCommand>(Component.ImportCommand).to(ImportCommand).inSingletonScope();
  sliContainer.bind<GenerateCommand>(Component.GenerateCommand).to(GenerateCommand).inSingletonScope();
  return sliContainer;
};