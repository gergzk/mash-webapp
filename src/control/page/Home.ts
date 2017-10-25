import BaseControl from "../BaseControl";
import SpiritCard from "../item/SpiritCard";
import VerticalList from "../layout/VerticalList";
import ISpirit from "src/dataSource/datatype/ISpirit";
import ISpiritDatabase from "src/dataSource/global/ISpiritDatabase";


export default class Home extends BaseControl<HTMLDivElement> {
    private db: ISpiritDatabase;
    private list: VerticalList;
    private get header(): HTMLElement {
        let h = document.createElement("h1");
        h.innerText = "Mash: whiskeys";
        return h;
    }

    constructor(root: HTMLDivElement, db: ISpiritDatabase) {
        super(root);
        this.db = db;
    }

    public Render(): Promise<void> {
        this.container.innerHTML = "";
        this.container.appendChild(this.header);
        let listDiv = document.createElement("div");
        this.container.appendChild(listDiv);
        this.list = new VerticalList(listDiv);

        let promises: Promise<void>[] = [];
        return this.db.top(5).then((spirits: ISpirit[]) => {
            spirits.map((spirit: ISpirit) => {
                this.list.AddControl(new SpiritCard(null, spirit));
            })
            return this.list.Render();
        });
    }
    public Teardown(): Promise<void> {
        return Promise.resolve();
    }
}