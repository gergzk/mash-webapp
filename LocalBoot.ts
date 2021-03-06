﻿import BootBase from "./BootBase";
import SpiritDatabase from "src/dataSource/global/mock/SpiritDatabase";
import DistilleryDatabase from "src/dataSource/global/mock/DistilleryDatabase";

export default class LocalBoot extends BootBase {
    protected fillContext(): Promise<void> {
        let spiritDB = new SpiritDatabase();
        let distDB = new DistilleryDatabase();
        this.context.distilleryDatabase = new DistilleryDatabase();
        this.context.spiritDatabase = new SpiritDatabase();
        return Promise.resolve();
    }
}