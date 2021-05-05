import { Command, Usage } from 'clipanion';
export default class InitCommand extends Command {
    name: string;
    initPath: string;
    static paths: never[][];
    static usage: Usage;
    execute(): Promise<void>;
}
