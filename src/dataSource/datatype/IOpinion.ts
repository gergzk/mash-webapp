import IDBEntry from "./IDBEntry";

interface IOpinion<TInput, TThing> extends IDBEntry {
    value: TInput;
    thing: TThing;
}
export default IOpinion;