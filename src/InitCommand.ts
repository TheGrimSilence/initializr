import { Command, Option, Usage } from 'clipanion';

export default class InitCommand extends Command {
	name = Option.String();
	initPath = Option.String();

	static paths = [Command.Default];

	static usage: Usage = {
		description: `A tool for creating new project directories.`,
		details: `
      Simply \`init\` the damned thing!
    `,
		examples: [[`A basic example`, `$0 my-command`]],
	};

	async execute() {
		this.context.stdout.write(
			`Initializing ${this.name} in ${this.initPath}\n`
		);
	}
}
