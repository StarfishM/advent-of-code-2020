const arrOfNumbers = require("./numberValues.js");
//write a function that returns the numbers whose SUM returns 2020
// multiply those numbers

const sum2020 = (arr, target) => {
    let complmentaryNums = [];
    arr.map((num, i) => {
        let complementaryNum = target - num;
        if (arr.indexOf(complementaryNum) != -1) {
            complmentaryNums.push(arr[arr.indexOf(complementaryNum)]);
        }
    });
    return complmentaryNums.reduce((a, b) => a * b);
};

const setOfTwoSum2020Product = sum2020(arrOfNumbers, 2020);
console.log("setOfTwoSum2020Product:", setOfTwoSum2020Product);
//write a funciton that finds three numbers whose sum returns 2020
// function should return the product of the three
const threeSum2020 = (arr, target) => {
    arr.sort((a, b) => a - b);
    let complmentaryThree = [];
    arr.map((num, i) => {
        let secondVal = i + 1;
        let thirdVal = arr.length - 1;
        while (secondVal < thirdVal) {
            if (num + arr[secondVal] + arr[thirdVal] === target) {
                complmentaryThree.push(num, arr[secondVal], arr[thirdVal]);
                break;
            } else if (num + arr[secondVal] + arr[thirdVal] >= target) {
                thirdVal--;
                continue;
            } else if (num + arr[secondVal] + arr[thirdVal] <= target) {
                secondVal++;
                continue;
            }
        }
        return;
    });

    return complmentaryThree.reduce((a, b) => a * b);
};

const setOfThreeSum2020Product = threeSum2020(arrOfNumbers, 2020);
console.log("setOfThreeSum2020Product: ", setOfThreeSum2020Product);
