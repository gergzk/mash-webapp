import TopApplication from "src/application/TopApplication";
import GlobalApplication from "src/application/GlobalApplication";
import GlobalSpiritApplication from "src/application/GlobalSpiritApplication";
import SpiritsApplication from "src/application/SpiritsApplication";

// This app.ts will need to use the real dataSource, maybe based on global data injected
// by the host. App.ts is loaded via the real host, app_local.ts is loaded when we F5. 
// They should be almost identical; really just the context object is different.
import SpiritDatabase from "src/dataSource/global/mock/SpiritDatabase";
import DistilleryDatabase from "src/dataSource/global/mock/DistilleryDatabase";
import IApplicationContext from "src/application/IApplicationContext";

export default class Boot {
    private context: IApplicationContext;
    constructor(context: IApplicationContext) {
        this.context = context;
    }

    public Start(): void {
        var el = document.getElementById('content');
        if (el) {
            this.Unroll(el as HTMLDivElement);
        } else {
            window.onload = () => {
                el = document.getElementById('content');
                this.Unroll(el as HTMLDivElement);
            };
        }
    }

    private Unroll(root: HTMLDivElement): void {
        this.context.RootElement = root;
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
        top.initialize().then(() => {
            let url = window.location.href;
            top.handleUrl(url);
        })
    }
}


