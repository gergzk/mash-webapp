import ISpirit from "../datatype/ISpirit";
import IDatabase from "./IDatabase";

interface ISpiritDatabase extends IDatabase<ISpirit> {
    products(distilleryId: string): Promise<ISpirit[]>;
    // what other API?
}

export default ISpiritDatabase;