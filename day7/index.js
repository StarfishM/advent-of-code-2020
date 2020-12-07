// PART 1

const bagRules = require("./formatInput");

function checkBagForGold(bag, targetColor) {
    const bagContaining = bag.color;
    bag.innerBags.forEach((elem) => {
        if (elem[targetColor]) {
            couldContainTarget.push(bagContaining);
            return true;
        } else {
            return false;
        }
    });

    countBags = couldContainTarget.length;
}

function findOptionsInInnerBags(arrOfInnerBags, color) {
    let optionsOneLevelDeep = arrOfInnerBags.filter((each) => each[color]);
    console.log("optionsOneLevelDeep:", optionsOneLevelDeep);
}

bagData.forEach((each) => {
    checkBagObj(each, "shiny gold");
});

bagData.forEach((each) => {
    console.log("each.color", each.color);
    console.log("each.innerBags", each.innerBags);
    // countOptions++;
    each.innerBags.forEach((elem) => {
        for (let i = 0; i < couldContainTarget.length; i++) {
            if (elem[couldContainTarget[i]]) {
                couldContainTarget.push(each.color);
                return;
            }
        }
    });
});

couldContainTargetNested = [...new Set(couldContainTargetNested)];
console.log("couldContainTarget:", couldContainTarget);
console.log("couldContainTargetNested:", couldContainTargetNested);
console.log(
    "could Contains target",
    couldContainTarget.length + couldContainTargetNested.length
);
