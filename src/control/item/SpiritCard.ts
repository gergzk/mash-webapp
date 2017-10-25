import Assert from "src/utilities/Assert";
import ISpirit from "src/dataSource/datatype/ISpirit";
import BaseControl from "../BaseControl";

export default class SpiritCard extends BaseControl<HTMLDivElement> {
    private spirit: ISpirit;

    constructor(root: HTMLDivElement, spirit: ISpirit) {
        super(root);
        Assert.Exists(spirit);
        this.spirit = spirit;
    }

    public render(): Promise<void> {
        let div = document.createElement("div");
        div.className = "spiritCard bubble";
        let h = document.createElement("h3");
        h.innerText = this.spirit.name;
        div.appendChild(h);
        this.container.appendChild(div);
        div.onclick = () => {
            window.location.href = "#global/spirits/" + this.spirit.id;
        }
        return Promise.resolve();
    }

    public teardown(): Promise<void> {
        return Promise.resolve();
    }
}