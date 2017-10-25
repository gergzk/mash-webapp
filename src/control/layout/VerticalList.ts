import BaseContainer from "./BaseContainer";

export default class VerticalList extends BaseContainer<HTMLDivElement> {
    constructor(root: HTMLDivElement) {
        super(root);
    }

    public MyTeardown(): Promise<void> {
        let promise = Promise.resolve();
        this.container.innerHTML = "";
        return promise;
    }

    public MyRender(): Promise<void> {
        let promise = Promise.resolve();
        // for each control, make a div and put the control in it
        for (let key in this.controls) {
            let control = this.controls[key];
            let div = document.createElement("div");
            control.setRoot(div);
            control.render();
            this.container.appendChild(div);
        }
        return Promise.resolve();
    }

}