import BaseApplication from "./BaseApplication";
import IApplicationContext from "./IApplicationContext";
import Home from "src/control/page/Home";

export default class GlobalApplication extends BaseApplication {
    constructor(context: IApplicationContext) {
        super(context);
    }

    public initialize(): Promise<void> {
        return Promise.resolve();
    }

    public handleLocally(term: string, terms: string[], processedTerms: string[]): Promise<void> {
        let home = new Home(this.context.RootElement, this.context.SpiritDatabase);
        return home.Render();
    }
}