// PART 1

const rulesMap = require("./formatInput");
const bagRules = require("./formatInput");

function checkBagForGold(color) {
    if (color === "shiny gold") {
        return true;
    }
    if (!bagRules.has(color)) {
        return false;
    }

    const bagsContained = bagRules.get(color);
    for (const bag of bagsContained) {
        if (checkBagForGold(bag.color)) {
            return true;
        }
    }
    return false;
}

const outerBagColors = bagRules.keys();

let total = 0;
for (const color of outerBagColors) {
    if (checkBagForGold(color) && color != "shiny gold") {
        total++;
    }
}

console.log("total number of potentiall carriers of shiny gold bags", total);

// PART 2 How many individual bags are required inside your single shiny gold bag?

function sumOfBagsInShinyGold(bagToCheck) {
    let bagsTotalInShinyGold = 1;
    const bagsInside = rulesMap.get(bagToCheck.color);
    console.log("*****");
    console.log("bagsInside:", bagsInside);
    for (const containedBag of bagsInside) {
        bagsTotalInShinyGold +=
            containedBag.amount * sumOfBagsInShinyGold(containedBag);
    }
    return bagsTotalInShinyGold;
}

console.log(sumOfBagsInShinyGold({ amount: 1, color: "shiny gold" }) - 1);
