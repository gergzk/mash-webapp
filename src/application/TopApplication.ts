import BaseApplication from "./BaseApplication";
import IApplicationContext from "./IApplicationContext";

export default class TopApplication extends BaseApplication {

    public constructor(context: IApplicationContext) {
        super(context);
    }
    public initialize(): Promise<void> {
        window.onhashchange = (event: HashChangeEvent) => {
            this.handleHash(event.oldURL, event.newURL);
        };
        return Promise.resolve();
    }
    public handleLocally(term: string, terms: string[]): Promise<void> {
        // top application handling anything locally means we just go to the global page
        // this means that bad urls will just fall through to here, and that seems ok
        window.location.href = "#global";
        return Promise.resolve();
    }
    public handleUrl(url: string) {
        this.handleHash(null, url);
    }
    // Consider if this should be in TopApplication or as a separate orchestrator
    private handleHash(oldUrl: string, newUrl: string): Promise<void> {
        let then = Date.now();
        let parts = newUrl.split("#");
        let promise: Promise<void>;
        if (parts.length === 1) {
            promise = this.handleLocally(null, null);
        } else {
            let terms = parts[1].split("/");
            promise = this.handlePath(terms, []);
        }
        return promise.then(() => {
            // This is why we have everything return Promises.
            // We can actually accurately track how long operations take!
            let elapsedMs = Date.now() - then;
            console.log({
                Operation: "Navigation",
                TimeMs: Date.now() - then,
                Url: newUrl
            });
        });
    }
}