import IDistilleryDatabase from "../IDistilleryDatabase";
import IDistillery from "../../datatype/IDistillery";


var mockDistilleries: IDistillery[] = [{
    description: "Talisker has been operating for over 200 years in the same barn.",
    address: "123 Talisker Drive, Scotland",
    link: null,
    id: "Talisker",
    name: "Talisker Distillery"
}, {
    description: "Laphroaig takes inspiration from the peat found by their sheep.",
    address: "Circle-o-peat, Great Plains, Scotland",
    link: null,
    id: "Laphroaig",
    name: "Laphroaig Family Stills"
}, {
    description: "Oban has been warring with neighbor MacCallan for generations.",
    address: "Sir Oban's Castle, Loch Rock, Scotland",
    link: null,
    id: "Oban",
    name: "Oban"
}, {
    description: "Lagavulin embraces the peat and smoke of the ocean. If you can burn it, they can bottle it.",
    address: "North Islay, Lagavulin Bay, Scotland",
    link: null,
    id: "Lagavulin",
    name: "Lagavulin, LLC"
}, {
    description: "MacCallan is a non-traditionalist, finishing whiskeys in port barrels.",
    address: "Fort Mac, Upper Plains, Scotland",
    link: null,
    id: "MacCallan",
    name: "MacCallan Royal Distilling"
}
];



export default class DistilleryDatabase implements IDistilleryDatabase {
    public find(id: string): Promise<IDistillery> {
        let found = mockDistilleries.find((value: IDistillery) => { return value.id === id; });
        return Promise.resolve(found);
    }
    public match(name: string): Promise<IDistillery[]> {
        name = name.toLowerCase();
        let matches = mockDistilleries.filter((value: IDistillery) => {
            let vName = value.name.toLowerCase();
            return vName.includes(name);
        })
        return Promise.resolve(matches);
    }
    public top(max: number): Promise<IDistillery[]> {
        let matches = mockDistilleries.filter((value: IDistillery, index: number) => {
            return index < max;
        });
        return Promise.resolve(matches);
    }
}
