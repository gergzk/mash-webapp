import IDBEntry from "./IDBEntry";

interface IUser extends IDBEntry {
    userId: string; // this is the FB id
    profile: string;
    // consider if this should be the same as or superset of src/application/IUser
}
export default IUser;