//Part 1

const inputData = require("./format");

const range = 25;
// const

function findInvalidNum(arr) {
    for (let i = range; i < arr.length; i++) {
        const num = arr[i];
        const preambleToCheck = arr.slice(i - range, i);
        // determine whether this is a valid number
        const validNum = preambleToCheck.some((firstNum) => {
            return preambleToCheck.some((secondNum) => {
                if (firstNum === secondNum) {
                    return false;
                }
                if (firstNum + secondNum === num) {
                    // firstNum.sumPartners.push(secondNum.number);
                    // secondNum.sumPartners.push(firstNum.number);
                    return true;
                }
            });
        });

        if (!validNum) {
            return num;
        }
    }
}

const invalidNum = findInvalidNum(inputData);
console.log("invalid Number:", invalidNum);
// console.log("inputData:", inputData);

// Part 2

// find preamble whose sum adds up to findInvalidNum
// must be more than two values
// sort array
// add together smallest and largest number in that array

function findWeakSpotInEncryption(arr, invalid) {
    for (let rangeOfNum = 2; rangeOfNum < arr.length; rangeOfNum++) {
        for (let start = 0; start <= arr.length - rangeOfNum; start++) {
            const end = start + rangeOfNum;
            const sumToCheck = arr.slice(start, end);
            if (sumToCheck.reduce((a, b) => a + b) === invalid) {
                sumToCheck.sort((a, b) => a - b);
                return sumToCheck[0] + sumToCheck[sumToCheck.length - 1];
            }
        }
    }
}

const weakSpot = findWeakSpotInEncryption(inputData, invalidNum);
console.log("weakSpot:", weakSpot);
