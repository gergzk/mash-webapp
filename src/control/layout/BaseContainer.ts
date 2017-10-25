import BaseControl from "../BaseControl";

export default abstract class BaseContainer<Telement extends HTMLElement> extends BaseControl<Telement> {
    protected controls: { [key: string]: BaseControl<Telement> } = {};

    constructor(root: Telement) {
        super(root);
    }

    protected abstract MyRender(): Promise<void>;
    protected abstract MyTeardown(): Promise<void>;

    public teardown(): Promise<void> {
        let promise = Promise.resolve();
        for (let key in this.controls) {
            let control = this.controls[key];
            promise = promise.then(control.teardown);
        }
        return promise.then(() => this.MyTeardown());
    }
    public render(): Promise<void> {
        return this.teardown().then(() => {
            return this.MyRender();
        });
    }
    public addControl(control: BaseControl<Telement>): void {
        this.controls[control.key] = control;
    }
    public removeControl(key: string): void {
        delete this.controls[key];
    }
    public removeAll(): void {
        this.controls = {};
    }
}