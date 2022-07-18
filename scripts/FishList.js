// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
const allFish = getFish()


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = invokeTheRightFunctionHere()

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        //^ Backtick allows both the HTML tags like <section> and the
        //^ interpolated objects like "${fish.name" to print out for each
        //^ object in the fishes array
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
console.log(htmlString);