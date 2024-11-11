#!/usr/bin/env node
import {CLIApplication, HelpCommand, ImportCommand, VersionCommand} from './cli/index.js';

const bootstrap = () => {
  const claApplication = new CLIApplication();
  claApplication.register([
    new VersionCommand(),
    new HelpCommand(),
    new ImportCommand(),
  ]);
  claApplication.processCommand(process.argv);
};

bootstrap();