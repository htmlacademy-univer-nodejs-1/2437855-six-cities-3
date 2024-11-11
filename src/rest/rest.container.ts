import { Container } from 'inversify';
import { RestApplication } from './rest.application.js';
import { DatabaseClient } from '../database-client/database-client.interface.js';
import { MongoDatabaseClient } from '../database-client/mongo.database-client.js';
import { Component } from '../types/component.enum.js';
import { Logger, PinoLogger } from '../logger/index.js';
import { Config, RestConfig, RestSchema } from '../config/index.js';

export const createRestApplication = (): Container => {
  const restContainer = new Container();
  restContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();
  return restContainer;
};