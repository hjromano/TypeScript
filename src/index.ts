type Args = string | number | boolean;
function bootstrap(dirname: string, args?: Args[]): boolean {
    return true;
}

type Mainfunction = (args: string[]) => void;

const main: Mainfunction = (args) => {}