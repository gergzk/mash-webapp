import IDistilleryDatabase from "../IDistilleryDatabase";
import IDistillery from "../../datatype/IDistillery";


var mockDistilleries: IDistillery[] = [{
    Description: "Talisker has been operating for over 200 years in the same barn.",
    Address: "123 Talisker Drive, Scotland",
    Link: null,
    Id: "Talisker",
    Name: "Talisker Distillery"
}, {
    Description: "Laphroaig takes inspiration from the peat found by their sheep.",
    Address: "Circle-o-peat, Great Plains, Scotland",
    Link: null,
    Id: "Laphroaig",
    Name: "Laphroaig Family Stills"
}, {
    Description: "Oban has been warring with neighbor MacCallan for generations.",
    Address: "Sir Oban's Castle, Loch Rock, Scotland",
    Link: null,
    Id: "Oban",
    Name: "Oban"
}, {
    Description: "Lagavulin embraces the peat and smoke of the ocean. If you can burn it, they can bottle it.",
    Address: "North Islay, Lagavulin Bay, Scotland",
    Link: null,
    Id: "Lagavulin",
    Name: "Lagavulin, LLC"
}, {
    Description: "MacCallan is a non-traditionalist, finishing whiskeys in port barrels.",
    Address: "Fort Mac, Upper Plains, Scotland",
    Link: null,
    Id: "MacCallan",
    Name: "MacCallan Royal Distilling"
}
];



export default class DistilleryDatabase implements IDistilleryDatabase {
    public find(id: string): Promise<IDistillery> {
        let found = mockDistilleries.find((value: IDistillery) => { return value.Id === id; });
        return Promise.resolve(found);
    }
    public match(name: string): Promise<IDistillery[]> {
        name = name.toLowerCase();
        let matches = mockDistilleries.filter((value: IDistillery) => {
            let vName = value.Name.toLowerCase();
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
