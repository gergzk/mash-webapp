import BaseApplication from "./BaseApplication";
import IApplicationContext from "./IApplicationContext";
import Spirits from "src/control/page/Spirits";
import SpiritDetail from "src/control/item/SpiritDetail";
import ISpirit from "src/dataSource/datatype/ISpirit";

export default class SpiritsApplication extends BaseApplication {
    constructor(context: IApplicationContext) {
        super(context);
    }

    public initialize(): Promise<void> {
        return Promise.resolve();
    }

    public handleLocally(term: string, terms: string[], processedTerms: string[]): Promise<void> {
        // this guy needs to look at the id and look up the spirit in question
        return this.context.SpiritDatabase.find(term).then((spirit: ISpirit) => {
            let page = new SpiritDetail(this.context.RootElement, spirit);
            return page.Render();
        });
    }
}