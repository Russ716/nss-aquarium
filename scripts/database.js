/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            color: "yellow",
            species: "Simpson Salmon",

        },
        {
            name: "Abraham",
            food: "leeches",
            size: 5,
            color: "black",
            species: "Lincoln",
        },
        {
            name: "Crumb",
            food: "anything on the floor",
            size: 7,
            color: "grey-blue",
            species: "Salacious",
        }, {
            name: "Debbie",
            food: "tacos",
            size: 9,
            color: "brown",
            species: "Straws",
        }, {
            name: "Enterprise",
            food: "shrimp",
            size: 4,
            color: "tiger stiped",
            species: "Lionfish",
        }, {
            name: "Flounder",
            food: "mermaids",
            size: 2,
            color: "blue",
            species: "Flounder",
        },
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}