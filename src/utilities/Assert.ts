export default class Assert {
    public static Exists(arg: any): void {
        if (arg === null || arg === undefined) {
            throw new Error("Unexpected " + arg + " argument");
        }
    }
}