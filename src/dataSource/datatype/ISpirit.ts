import IDBEntry from "./IDBEntry";

interface ISpirit extends IDBEntry {
    Type: string; // or an enum?
    Proof: number;
    Name: string;
    DistilleryId: string;
    Age: number;
    ImageLink: string;
}

export default ISpirit;