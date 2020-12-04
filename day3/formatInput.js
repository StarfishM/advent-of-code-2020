const { format } = require("path");
const input = require("./unformattedInput");

const matchPattern = /[\n\r]/;
const formatInput = input.split(matchPattern);
const treeCount = [];

function doSlope(col, row) {
    let treesInSlope = 0;
    for (let i = 0; i < formatInput.length; i += row) {
        const stringIndexToCheck = (i * col) % formatInput[i].length;
        console.log("rowValue:", i);
        console.log("colvalue:", stringIndexToCheck);
        if (formatInput[i][stringIndexToCheck] === "#") {
            console.log("found tree");
            treesInSlope++;
        }
    }
    treeCount.push(treesInSlope);
}

function doOtherSlope(over, down) {
    let treesInSlope = 0;
    let overCounter = 0;
    for (let i = 0; i < formatInput.length; i += down) {
        if (formatInput[i][overCounter] === "#") {
            console.log("found tree");
            treesInSlope++;
        }
        overCounter += over;
        if (overCounter >= formatInput[i].length) {
            overCounter = 0;
        }
    }
    treeCount.push(treesInSlope);
}

const firstSlope = doOtherSlope(1, 2);
// console.log("firstSlope:", treeCount);

// Part 2
const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
];

slopes.forEach((each) => {
    doSlope(each[0], each[1]);
});
console.log("treecounts:", treeCount);
console.log(
    "treecounts multiplied",
    treeCount.reduce((a, b) => a * b)
);
