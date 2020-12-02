const arrOfNumbers = require("./expenseReport");
//write a function that returns the numbers whose SUM returns 2020
// multiply those numbers

const twoSum2020 = (arr, target) => {
    let complmentaryNums = [];
    arr.map((num, i) => {
        let complementaryNum = target - num;
        if (arr.indexOf(complementaryNum) != -1) {
            complmentaryNums.push(arr[arr.indexOf(complementaryNum)]);
        }
    });
    return complmentaryNums;
};

const result = twoSum2020(arrOfNumbers, 2020);
console.log(
    `The two complementary numbers that build a sum of 2020 are: ${
        result[0]
    } and ${result[1]} their product is: ${result.reduce((a, b) => a * b)}`
);
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

    return complmentaryThree;
};

const resultTwo = threeSum2020(arrOfNumbers, 2020);

console.log(
    `The three complementary that build a sum of 2020 numbers are: ${
        resultTwo[0]
    }, ${resultTwo[1]}, and ${
        resultTwo[2]
    } their product is: ${resultTwo.reduce((a, b) => a * b)}`
);
