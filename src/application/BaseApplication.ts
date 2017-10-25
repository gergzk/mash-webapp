import IApplicationContext from "./IApplicationContext";

export default abstract class BaseApplication {
    protected context: IApplicationContext;
    protected handlers: { [term: string]: BaseApplication };

    constructor(context: IApplicationContext) {
        // what should i take?? 
        this.handlers = {};
        this.context = context;
    }

    // an application is a layer that can handle a nav. For example, suppose I nav to:
    // rootUrl/#global/spirits/33
    // this means I want to go the page for spirit with id = 33
    // I need to chop everything up to the #:
    // topApplication.handle(global/spirits/33)
    // globalApplication.handle(spirits/33)
    // globalSpiritsApplication.handle(33)
    // there is no handler registered for "33", so globalSpiritsHand
    abstract initialize(): Promise<void>;
    abstract handleLocally(term: string, terms: string[], processedTerms: string[]): Promise<void>;

    public addHandler(term: string, app: BaseApplication): void {
        this.handlers[term.toLowerCase()] = app;
    }
    public removeHandler(term: string): void {
        delete this.handlers[term];
    }
    public handlePath(terms: string[], processedTerms: string[]): Promise<void> {
        let term = terms.shift();
        processedTerms.push(term);
        let handler = this.handlers[term];
        if (handler) {
            return handler.handlePath(terms, processedTerms);
        }
        return this.handleLocally(term, terms, processedTerms);
    }
}