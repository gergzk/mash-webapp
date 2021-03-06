﻿import BaseControl from "../BaseControl";
import SpiritCard from "../item/SpiritCard";
import VerticalList from "../layout/VerticalList";
import ISpirit from "src/dataSource/datatype/ISpirit";
import ISpiritDatabase from "src/dataSource/global/ISpiritDatabase";


export default class Spirits extends BaseControl<HTMLDivElement> {
    private db: ISpiritDatabase;
    private contextPath: string;
    private list: VerticalList;
    private get header(): HTMLElement {
        let div = document.createElement("div");
        let h = document.createElement("h1");
        h.innerText = "Discover a whiskey";
        div.appendChild(h);

        let input = document.createElement("input");
        input.className = "bubble inputFull";
        input.oninput = () => {
            this.getWhiskeys(input.value).then(this.renderList.bind(this));
        };
        div.appendChild(input);

        return div;
    }

    constructor(root: HTMLDivElement, db: ISpiritDatabase, contextPath: string) {
        super(root);
        this.db = db;
        this.contextPath = contextPath;
    }
    public render(): Promise<void> {
        this.container.innerHTML = "";
        this.container.appendChild(this.header);
        let listDiv = document.createElement("div");
        this.container.appendChild(listDiv);
        this.list = new VerticalList(listDiv);
        return this.getWhiskeys(null).then((spirits: ISpirit[]) => {
            this.renderList(spirits);
        });
    }
    public teardown(): Promise<void> {
        return Promise.resolve();
    }
    private renderList(spirits: ISpirit[]): Promise<void> {
        this.list.removeAll();
        spirits.map((spirit: ISpirit) => {
            this.list.addControl(new SpiritCard(null, spirit));
        })
        return this.list.render();

    }
    private getWhiskeys(text: string): Promise<ISpirit[]> {
        if (!text) {
            return this.db.top(20);
        }
        return this.db.match(text);
    }
}