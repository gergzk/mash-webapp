import IDBEntry from "./IDBEntry";

interface IDistillery extends IDBEntry {
    name: string;
    address: string; // should be something more formal?
    link: string;
    description: string;
    // ... what else?
}
export default IDistillery;