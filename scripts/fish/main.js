import { getFish } from './database.js'
import { mostHolyFish } from './FishList.js'
import { soldierFish } from './FishList.js'
import { nonHolyFish } from './FishList.js'
const allFish = getFish()
/*
for (const fish of allFish) {
    console.log(fish)
}
*/
// Import the FishList function from the correct module
import { FishList } from './FishList.js'
const showFishList = FishList()
/*
let clergy = FishList(mostHolyFish)
let military = FishList(soldierFish)
let civilians = FishList(nonHolyFish)
console.log(clergy);
console.log(military);
console.log(civilians);
*/
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".fish")


parentHTMLElement.innerHTML = FishList(mostHolyFish)
parentHTMLElement.innerHTML = FishList(soldierFish)
parentHTMLElement.innerHTML = FishList(nonHolyFish)


