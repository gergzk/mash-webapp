import IOpinion from "../datatype/IOpinion";
import ISpirit from "../datatype/ISpirit";
import IDatabase from "./IDatabase";


// what is the T of the opinion?

interface ISpiritOpinionDatabase extends IDatabase<IOpinion<any, ISpirit>> {
}

export default ISpiritOpinionDatabase;