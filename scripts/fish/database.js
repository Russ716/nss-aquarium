/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Blinky",
            image: "https://i.pinimg.com/originals/37/1d/2f/371d2fc019bb8ff7c99747852a5029fa.png",
            diet: "radioactive waste",
            length: 7,
            location: "Springfield Resivoir",
            species: "Simpsonia",
        },
        {
            name: "Crumb",
            image: "https://www.jedinews.com/wp-content/uploads/2021/07/Regal-Robot-Salacious-Crumb-Prop-Replica-Statue-071921.jpg",
            diet: "anything on the floor",
            length: 15,
            location: "Tattooine",
            species: "Salacious",
        }, {
            name: "Livingston",
            image: "https://livingoceansfoundation.org/wp-content/uploads/2011/08/DSC_0380.jpg",
            diet: "shrimp",
            length: 5,
            location: "Captain Picard's Ready Room",
            species: "Lionfish",
        }, {
            name: "Flounder",
            image: "https://i.pinimg.com/236x/ec/a4/34/eca43455375225b0e9d28c7219812ed2--flounder-costume-ariel-eric.jpg",
            diet: "mermaids",
            length: 3,
            location: "Under the Sea",
            species: "Flounder",
        },
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}