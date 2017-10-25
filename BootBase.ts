import IBootContext from "./IBootContext";
import TopApplication from "src/application/TopApplication";
import GlobalApplication from "src/application/GlobalApplication";
import GlobalSpiritApplication from "src/application/GlobalSpiritApplication";
import SpiritsApplication from "src/application/SpiritsApplication";

// This app.ts will need to use the real dataSource, maybe based on global data injected
// by the host. App.ts is loaded via the real host, app_local.ts is loaded when we F5. 
// They should be almost identical; really just the context object is different.
// This base class does most of the identical work.
import IApplicationContext from "src/application/IApplicationContext";
import IUser from "src/application/IUser";

declare var mash: IBootContext;

export default abstract class BootBase {
    protected context: IApplicationContext;
    constructor() {
        // or we could explicitly set things to null, but what's the point?
        this.context = {} as any;
    }

    public start(): Promise<void> {
        return this.getRoot().then((root: HTMLDivElement) => {
            this.context.rootElement = root;
        }).then(() => {
            this.populateInjectedState();
            this.fillContext();
        }).then(() => {
            this.unroll();
        });
    }

    protected abstract fillContext(): Promise<void>;

   // Reformulating our boot logic into Promises. 
    // This method either finds and resolves the content element, 
    // or waits til the window is loaded and resolves at that later time.
    private getRoot(): Promise<HTMLDivElement> {
        let el = document.getElementById('content');
        if (el) {
            return Promise.resolve(el);
        } else {
            let promise = new Promise((acceptFn: (value?: any) => void) => {
                window.onload = () => {
                    el = document.getElementById('content');
                    acceptFn(el as HTMLDivElement);
                }
            });
            return promise;
        }
    }
    // This is guaranteed to be synchronous
    private populateInjectedState(): void {
        let injectedUser = mash.user;
        let user: IUser = {
            id: injectedUser.id,
            name: injectedUser.name
        };
        this.context.user = user;
    }
    private unroll(): Promise<void> {
        // What's going on here? 
        // I'm adhering to a principle that every layer of the app should be relatively 'dumb'. 
        // By forcing the highest-level orchestrator to assemble, in effect, the routing for the app, 
        // I'm able to achieve a very loosely coupled system. The counterpoint here is that if I do things
        // like have TopApplication "unroll itself" and just create the next layers, and recurse, then
        // my pieces become not very extensible. The counter-counterpoint is that since each "frame" of the 
        // routing is handled by a context-free BaseApplication, I'll have very little reuse anyways: they'll
        // have to know about the overall path simply by virtue of their existence: they'll be programmed to match.
        // I don't (yet?) anticipate a lot of combinatorics: where more than 1 layer of the route is relevant to
        // the handling BaseApplication.
        let top = new TopApplication(this.context);
        let global = new GlobalApplication(this.context);
        top.addHandler("global", global);
        let globalSpirits = new GlobalSpiritApplication(this.context);
        global.addHandler("spirits", globalSpirits);
        globalSpirits.spiritsApplication = new SpiritsApplication(this.context);

        // And finally go initialize the TopApplication so it can set its handlers up and then navigate to our url.
        return top.initialize().then(() => {
            let url = window.location.href;
            top.handleUrl(url);
        });
    }
}


