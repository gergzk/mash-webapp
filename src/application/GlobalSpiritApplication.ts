import BaseApplication from "./BaseApplication";
import IApplicationContext from "./IApplicationContext";
import SpiritsApplication from "./SpiritsApplication";
import Spirits from "src/control/page/Spirits";

export default class GlobalSpiritApplication extends BaseApplication {
    private spiritsApp: SpiritsApplication;
    constructor(context: IApplicationContext) {
        super(context);
    }
    public set spiritsApplication(app: SpiritsApplication) {
        this.spiritsApp = app;
    }
    public initialize(): Promise<void> {
        return Promise.resolve();
    }

    public handleLocally(term: string, terms: string[], processedTerms: string[]): Promise<void> {
        if (!term) {
            let home = new Spirits(this.context.rootElement, this.context.spiritDatabase, processedTerms.join("/"));
            return home.render();
        }
        // otherwise, hand off the value to the SpiritsApplication
        return this.spiritsApp.handleLocally(term, terms, processedTerms);
    }
}