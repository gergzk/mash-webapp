import IDBEntry from "./IDBEntry";

interface IUser extends IDBEntry {
    UserId: string; // this is the FB id
    Profile: string;
}