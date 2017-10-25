import BaseControl from "../BaseControl";
import SpiritCard from "../item/SpiritCard";
import VerticalList from "../layout/VerticalList";
import ISpirit from "src/dataSource/datatype/ISpirit";
import IApplicationContext from "src/application/IApplicationContext";

export default class Home extends BaseControl<HTMLDivElement> {
    private context: IApplicationContext;
    private list: VerticalList;
    private get header(): HTMLElement {
        let h = document.createElement("h1");
        h.innerText = "Welcome " + this.context.user.name;
        return h;
    }

    constructor(root: HTMLDivElement, context: IApplicationContext) {
        super(root);
        this.context = context;
    }

    public render(): Promise<void> {
        this.container.innerHTML = "";
        this.container.appendChild(this.header);
        let listDiv = document.createElement("div");
        this.container.appendChild(listDiv);
        this.list = new VerticalList(listDiv);

        let promises: Promise<void>[] = [];
        return this.context.spiritDatabase.top(5).then((spirits: ISpirit[]) => {
            spirits.map((spirit: ISpirit) => {
                this.list.addControl(new SpiritCard(null, spirit));
            })
            return this.list.render();
        });
    }
    public teardown(): Promise<void> {
        return Promise.resolve();
    }
}