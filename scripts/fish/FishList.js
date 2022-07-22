// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
const fishHTML = getFish()
let htmlString = ""

export const mostHolyFish = () => {
    //^ 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const swimmer of fishHTML) {
        if (swimmer % 3 === 0)
            holyFish.push(swimmer)
    }
    return holyFish
}

export const soldierFish = () => {
    //^ 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const soldier of fishHTML) {
        if (soldier % 5 === 0) {
            soldiers.push(soldier)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const reject of fishHTML) {
        if (reject % 3 !== 0 && reject % 5 !== 0)
            regularFish.push(reject)
    }
    return regularFish
}


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish() 
    // Start building a string filled with HTML syntax
    htmlString += '<article class="fishList">'
    // Create HTML representations of each fish here
    for (const fish of fishes) {
        // Why is there a backtick used for this string?
        //^ Backtick allows both the HTML tags like <section> and the
        //^ interpolated objects like "${fish.name" to print out for each
        //^ object in the fishes array
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Named: ${fish.name}</div>
            <div class="fish__species">Type: ${fish.species}</div>
            <div class="fish__length">Size: ${fish.length}</div>
            <div class="fish__location">Harvested from: ${fish.location}</div>
            <div class="fish__diet">Eats: ${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`
    return htmlString
}




 console.log(htmlString);