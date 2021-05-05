"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
const InitCommand_1 = __importDefault(require("./InitCommand"));
const [node, app, ...args] = process.argv;
const cli = new clipanion_1.Cli({
    binaryLabel: 'Initializr',
    binaryName: `initializr`,
    binaryVersion: '1.0.0',
});
cli.register(InitCommand_1.default);
cli.register(clipanion_1.Builtins.VersionCommand);
cli.register(clipanion_1.Builtins.HelpCommand);
cli.runExit(args, clipanion_1.Cli.defaultContext);
