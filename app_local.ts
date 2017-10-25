import SpiritDatabase from "src/dataSource/global/mock/SpiritDatabase";
import DistilleryDatabase from "src/dataSource/global/mock/DistilleryDatabase";
import IApplicationContext from "src/application/IApplicationContext";
import Boot from "./boot";

var bootstrapFn = () => {
    let spiritDB = new SpiritDatabase();
    let distDB = new DistilleryDatabase();
    let ctx: IApplicationContext = {
        RootElement: null,
        SpiritDatabase: spiritDB,
        DistilleryDatabase: distDB
    };
    let boot = new Boot(ctx);
    boot.Start();
}
bootstrapFn();