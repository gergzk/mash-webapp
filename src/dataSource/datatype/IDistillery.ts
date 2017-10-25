import IDBEntry from "./IDBEntry";

interface IDistillery extends IDBEntry {
    Name: string;
    Address: string; // should be something more formal?
    Link: string;
    Description: string;
    // ... what else?
}

export default IDistillery;