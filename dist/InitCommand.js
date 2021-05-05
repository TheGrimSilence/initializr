"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
class InitCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.name = clipanion_1.Option.String();
        this.initPath = clipanion_1.Option.String();
    }
    async execute() {
        this.context.stdout.write(`Initializing ${this.name} in ${this.initPath}\n`);
    }
}
exports.default = InitCommand;
InitCommand.paths = [clipanion_1.Command.Default];
InitCommand.usage = {
    description: `A tool for creating new project directories.`,
    details: `
      Simply \`init\` the damned thing!
    `,
    examples: [[`A basic example`, `$0 my-command`]],
};
