const { match } = require("../day6/unformatted");
const input = require("./unformattedInput");

const testInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const matchPatternLineBreak = /[\n\r]/;
const matchPatternNumber = /\b([0-9]|10)\b /;
const matchPatternBag = /\bbags|bag\b/g;

const splitOnLineBreak = input.split(matchPatternLineBreak);

let rulesMap = new Map();

const turnIntoObjects = (str) => {
    console.log("running turnIntoObject");
    const innerBags = [];
    const splitOuterFromInner = str.split("bags contain");
    const outerBag = splitOuterFromInner[0].trim();
    const splitInnerBags = splitOuterFromInner[1].split(",");
    splitInnerBags
        .map((bag) => {
            let bagInBagObj = {};
            bag.replace(" ", ""); // remove empty spaces
            const bagsContained = bag.split(matchPatternNumber);
            if (bagsContained[2] == " no other bags") {
                bagInBagObj = null;
            }
            if (bagsContained[2]) {
                bagInBagObj.color = bagsContained[2]
                    .replace(matchPatternBag, "")
                    .trim()
                    .replace(".", "")
                    .trim();
                bagInBagObj.amount = parseInt(bagsContained[1]);
                innerBags.push(bagInBagObj);
            }
        })
        .filter((bag) => bag);
    rulesMap.set(outerBag, innerBags);
};

splitOnLineBreak.forEach((str) => turnIntoObjects(str));
console.log("allBags:", rulesMap);
module.exports = allBags;
