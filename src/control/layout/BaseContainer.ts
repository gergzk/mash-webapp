import BaseControl from "../BaseControl";

export default abstract class BaseContainer<Telement extends HTMLElement> extends BaseControl<Telement> {
    protected controls: { [key: string]: BaseControl<Telement> } = {};

    constructor(root: Telement) {
        super(root);
    }

    protected abstract MyRender(): Promise<void>;
    protected abstract MyTeardown(): Promise<void>;

    public Teardown(): Promise<void> {
        let promise = Promise.resolve();
        for (let key in this.controls) {
            let control = this.controls[key];
            promise = promise.then(control.Teardown);
        }
        return promise.then(() => this.MyTeardown());
    }
    public Render(): Promise<void> {
        return this.Teardown().then(() => {
            return this.MyRender();
        });
    }
    public AddControl(control: BaseControl<Telement>): void {
        this.controls[control.key] = control;
    }
    public RemoveControl(key: string): void {
        delete this.controls[key];
    }
    public RemoveAll(): void {
        this.controls = {};
    }
}