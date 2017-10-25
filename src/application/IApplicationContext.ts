import IUser from "./IUser";
import ISpiritDatabase from "src/dataSource/global/ISpiritDatabase";
import IDistilleryDatabase from "src/dataSource/global/IDistilleryDatabase";

interface IApplicationContext {
    spiritDatabase: ISpiritDatabase;
    distilleryDatabase: IDistilleryDatabase;
    rootElement: HTMLDivElement;
    user: IUser;
}
export default IApplicationContext;