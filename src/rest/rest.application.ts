import { Config, RestSchema } from '../config/index.js';
import { Logger } from '../logger/index.js';
import { Component } from '../types/index.js';
import {injectable,inject} from 'inversify';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
  ) {}

  init() {
    this.logger.info(`Application initialization on ${this.config.get('PORT')}`);
  }
}