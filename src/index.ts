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

const functions: Functions = {
    execute() {
        return true;
    },
    handle(req,res) {
    },
    run(context) {
    },
}

function customLog(text:string, color:string = "red", time?: Date, author?: string){
    console.log(color,text);
    if (time) console.log("At:", time.toString());
    if (author) console.log("By:", author);
}

customLog("Hello world", "blue", new Date(), "John Doe");