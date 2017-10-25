import ISpiritDatabase from "src/dataSource/global/ISpiritDatabase";
import IDistilleryDatabase from "src/dataSource/global/IDistilleryDatabase";

interface IApplicationContext {
    SpiritDatabase: ISpiritDatabase;
    DistilleryDatabase: IDistilleryDatabase;
    RootElement: HTMLDivElement;
}

export default IApplicationContext;