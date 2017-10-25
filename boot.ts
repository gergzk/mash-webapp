import BootBase from "./BootBase";

export default class Boot extends BootBase {
    protected fillContext(): Promise<void> {
        return Promise.reject("Don't have real data connections yet!!");
    }
}