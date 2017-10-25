import IDBEntry from "./IDBEntry";

interface ISpirit extends IDBEntry {
    type: string; // or an enum?
    proof: number;
    name: string;
    distilleryId: string;
    age: number;
    imageLink: string;
}
export default ISpirit;