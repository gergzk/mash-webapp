import IDBEntry from "./IDBEntry";

interface IOpinion<TInput, TThing> extends IDBEntry {
    Value: TInput;
    Thing: TThing;
}

export default IOpinion;