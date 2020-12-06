const inputData = require("./formatInput");

//part 1

//remove doubles
// for (let i = 0; i < inputData.length; i++) {
//     inputData[i] = [...new Set(inputData[i])];
// }

// const solvePart1 = (arr) => {
//     console.log("inputData", inputData);
//     let answerCount = 0;
//     arr.map((each) => (answerCount += each.length));
//     console.log("answerCount:", answerCount);
// };

// solvePart1(inputData);

//part 2

// This list represents answers from five groups:

// In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
// In the second group, there is no question to which everyone answered "yes".
// In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
// In the fourth group, everyone answered yes to only 1 question, a.
// In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.
// In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.
let answerCount = 0;

const countAnswers = (arr) => {
    console.log("arr:", arr);
    // group of on person count unique characters
    if (arr.length === 1) {
        arr[0] = String.prototype.concat(...new Set(arr[0]));
        answerCount += arr[0].length;
        console.log("arr[0].length", arr[0].length);
    } else {
        console.log("in else");
        let strContainingChar = "";
        for (let i = 0; i < arr.length; i++) {
            const checkForChar = arr.map((str) => str.includes(arr[i]));
            console.log("checkForChar", checkForChar);
            if (checkForChar.every((el) => el == true)) {
                strContainingChar += arr[i];
            }
        }
        strContainingChar = String.prototype.concat(
            ...new Set(strContainingChar)
        );
        console.log("trContainingChar.length:", strContainingChar.length);
        answerCount += strContainingChar.length;
    }
    console.log("answerCount:", answerCount);
};
inputData.forEach((ar) => countAnswers(ar));
