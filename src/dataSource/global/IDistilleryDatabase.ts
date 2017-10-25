import IDatabase from "./IDatabase";
import IDistillery from "../datatype/IDistillery";
import ISpirit from "../datatype/ISpirit";

interface IDistilleryDatabase extends IDatabase<IDistillery> {
    // maybe some API for the region and stuff?
}

export default IDistilleryDatabase;