type Args = string | number | boolean;
function bootstrap(dirname: string, args?: Args[]): boolean {
    return true;
}

type Mainfunction = (args: string[]) => void;

const main: Mainfunction = (args) => {}

interface Functions {
    run(context: any): void;
    execute():boolean;
    handle(req: Request, res: Response): void;
}
