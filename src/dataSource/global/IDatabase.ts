import IDBEntry from "../datatype/IDBEntry";

interface IDatabase<T extends IDBEntry> {
    find(id: string): Promise<T>;
    match(name: string): Promise<T[]>;
    top(max: number): Promise<T[]>;
}

export default IDatabase;