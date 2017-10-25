import ISpiritDatabase from "../ISpiritDatabase";
import ISpirit from "../../datatype/ISpirit";


var mockSpirits: ISpirit[] = [{
        Age: 10,
        DistilleryId: "Talisker", // really this would be some guid
        Id: "1",
        ImageLink: null,
        Name: "Talisker 10yr",
        Proof: 91.6,
        Type: "Whiskey/Scotch/Speyside" // no idea what this shuold actually look like ...
    }, {
        Age: 18,
        DistilleryId: "Talisker",
        Id: "2",
        ImageLink: null,
        Name: "Talisker 18yr",
        Proof: 91.6,
        Type: "Whiskey/Scotch/Speyside"
    }, {
        Age: 12,
        DistilleryId: "Laphroaig",
        Id: "3",
        ImageLink: null,
        Name: "Laphroaig 12yr",
        Proof: 86,
        Type: "Whiskey/Scotch/Islay"
    }, {
        Age: 12,
        DistilleryId: "Laphroaig",
        Id: "4",
        ImageLink: null,
        Name: "Laphroaig 12yr Quarter Cask",
        Proof: 86,
        Type: "Whiskey/Scotch/Islay"
    }, {
        Age: 14,
        DistilleryId: "Oban",
        Id: "5",
        ImageLink: null,
        Name: "Oban",
        Proof: 90,
        Type: "Whiskey/Scotch/Highland"
    }, {
        Age: 16,
        DistilleryId: "Lagavulin",
        Id: "6",
        ImageLink: null,
        Name: "Lagavulin 16yr",
        Proof: 86,
        Type: "Whiskey/Scotch/Islay"
    },
];



export default class SpiritDatabase implements ISpiritDatabase {
    public find(id: string): Promise<ISpirit> {
        let found = mockSpirits.find((value: ISpirit) => { return value.Id === id; });
        return Promise.resolve(found);
    }
    public match(name: string): Promise<ISpirit[]> {
        name = name.toLowerCase();
        let matches = mockSpirits.filter((value: ISpirit) => {
            let vName = value.Name.toLowerCase();
            return vName.includes(name);
        })
        return Promise.resolve(matches);
    }
    public products(distilleryId: string): Promise<ISpirit[]> {
        let matches = mockSpirits.filter((value: ISpirit) => {
            return value.DistilleryId === distilleryId;
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
