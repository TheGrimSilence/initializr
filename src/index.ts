import { Builtins, Cli } from 'clipanion';
import InitCommand from './InitCommand';

const [...args] = process.argv;

const cli = new Cli({
	binaryLabel: 'Initializr',
	binaryName: `initializr`,
	binaryVersion: '1.0.0',
});

cli.register(InitCommand);
cli.register(Builtins.VersionCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args, Cli.defaultContext);
