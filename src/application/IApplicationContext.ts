import IUser from "./IUser";
import ISpiritDatabase from "src/dataSource/global/ISpiritDatabase";
import IDistilleryDatabase from "src/dataSource/global/IDistilleryDatabase";

interface IApplicationContext {
    SpiritDatabase: ISpiritDatabase;
    DistilleryDatabase: IDistilleryDatabase;
    RootElement: HTMLDivElement;
    User: IUser;
}
export default IApplicationContext;