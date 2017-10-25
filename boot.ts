import BootBase from "./BootBase";
import DistilleryDatabase from "src/dataSource/global/DistilleryDatabase";
import SpiritDatabase from "src/dataSource/global/SpiritDatabase";

export default class Boot extends BootBase {
    protected fillContext(): Promise<void> {
        this.context.distilleryDatabase = new DistilleryDatabase();
        this.context.spiritDatabase = new SpiritDatabase();
        return Promise.resolve();
    }
}