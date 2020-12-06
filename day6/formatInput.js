const input = require("./unformatted");
const testData = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const matchPattern = /[\n\r]/;
const formatInput = input.split(matchPattern);

//Format for part 1
// const arrayOfAnswers = [];
// let subArray = [];
// for (let i = 0; i < formatInput.length; i++) {
//     console.log("formatInput[i]", formatInput[i]);
//     if (formatInput[i].length > 1) {
//         // console.log("split");
//         formatInput[i].split("").forEach((elem) => subArray.push(elem));
//         if (formatInput[i + 1] == "" || formatInput[i + 1] == undefined) {
//             arrayOfAnswers.push(subArray);
//         }
//     } else if (formatInput[i].length) {
//         subArray.push(formatInput[i]);
//         if (formatInput[i + 1] == "" || formatInput[i + 1] == undefined) {
//             // console.log("pushing intoArray");
//             arrayOfAnswers.push(subArray);
//         }
//     } else {
//         subArray = [];
//     }
// }

//Format for Part 2
const arrayOfAnswers = [];
let subArray = [];
for (let i = 0; i < formatInput.length; i++) {
    if (formatInput[i] != "") {
        subArray.push(formatInput[i]);
        if (formatInput[i + 1] == "" || formatInput[i + 1] == undefined) {
            arrayOfAnswers.push(subArray);
            subArray = [];
        }
    } else {
        subArray = [];
    }
}

// console.log("formArratInput:", arrayOfAnswers);
module.exports = arrayOfAnswers;
