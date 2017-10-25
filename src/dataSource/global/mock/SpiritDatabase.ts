import ISpiritDatabase from "../ISpiritDatabase";
import ISpirit from "../../datatype/ISpirit";


var mockSpirits: ISpirit[] = [{
        age: 10,
        distilleryId: "Talisker", // really this would be some guid
        id: "1",
        imageLink: null,
        name: "Talisker 10yr",
        proof: 91.6,
        type: "Whiskey/Scotch/Speyside" // no idea what this shuold actually look like ...
    }, {
        age: 18,
        distilleryId: "Talisker",
        id: "2",
        imageLink: null,
        name: "Talisker 18yr",
        proof: 91.6,
        type: "Whiskey/Scotch/Speyside"
    }, {
        age: 12,
        distilleryId: "Laphroaig",
        id: "3",
        imageLink: null,
        name: "Laphroaig 12yr",
        proof: 86,
        type: "Whiskey/Scotch/Islay"
    }, {
        age: 12,
        distilleryId: "Laphroaig",
        id: "4",
        imageLink: null,
        name: "Laphroaig 12yr Quarter Cask",
        proof: 86,
        type: "Whiskey/Scotch/Islay"
    }, {
        age: 14,
        distilleryId: "Oban",
        id: "5",
        imageLink: null,
        name: "Oban",
        proof: 90,
        type: "Whiskey/Scotch/Highland"
    }, {
        age: 16,
        distilleryId: "Lagavulin",
        id: "6",
        imageLink: null,
        name: "Lagavulin 16yr",
        proof: 86,
        type: "Whiskey/Scotch/Islay"
    },
];



export default class SpiritDatabase implements ISpiritDatabase {
    public find(id: string): Promise<ISpirit> {
        let found = mockSpirits.find((value: ISpirit) => { return value.id === id; });
        return Promise.resolve(found);
    }
    public match(name: string): Promise<ISpirit[]> {
        name = name.toLowerCase();
        let matches = mockSpirits.filter((value: ISpirit) => {
            let vName = value.name.toLowerCase();
            return vName.includes(name);
        })
        return Promise.resolve(matches);
    }
    public products(distilleryId: string): Promise<ISpirit[]> {
        let matches = mockSpirits.filter((value: ISpirit) => {
            return value.distilleryId === distilleryId;
        })
        return Promise.resolve(matches);
    }
    public top(max: number): Promise<ISpirit[]> {
        let matches = mockSpirits.filter((value: ISpirit, index: number) => {
            return index < max;
        });
        return Promise.resolve(matches);
    }
}
