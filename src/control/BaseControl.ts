export default abstract class BaseControl<Telement extends HTMLElement> {
    public get key(): string {
        return this.prKey
    }
    protected container: Telement;

    private static index: number = 0;
    private prKey: string;

    constructor(root: Telement) {
        this.prKey = (++BaseControl.index).toString();
        this.setRoot(root);
    }

    public setRoot(root: Telement): void {
        this.container = root;
    }

    abstract render(): Promise<void>;
    abstract teardown(): Promise<void>;
    // what else does a BaseControl need to do?
}