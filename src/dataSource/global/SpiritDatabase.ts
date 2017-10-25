import ISpiritDatabase from "./ISpiritDatabase";
import ISpirit from "../datatype/ISpirit";

export default class SpiritDatabase implements ISpiritDatabase {
    public find(id: string): Promise<ISpirit> {
        return Promise.reject("Not Implemented");
    }
    public match(name: string): Promise<ISpirit[]> {
        return Promise.reject("Not Implemented");
    }
    public top(max: number): Promise<ISpirit[]> {
        return Promise.reject("Not Implemented");
    }
    public products(distilleryId: string): Promise<ISpirit[]> {
        return Promise.reject("Not Implemented");
    }
}