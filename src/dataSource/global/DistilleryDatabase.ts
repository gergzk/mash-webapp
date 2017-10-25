import IDistilleryDatabase from "./IDistilleryDatabase";
import IDistillery from "../datatype/IDistillery";

export default class DistilleryDatabase implements IDistilleryDatabase {
    find(id: string): Promise<IDistillery> {
        return Promise.reject("Not Implemented");
    }
    match(name: string): Promise<IDistillery[]> {
        return Promise.reject("Not Implemented");
    }
    top(max: number): Promise<IDistillery[]> {
        return Promise.reject("Not Implemented");
    }
}