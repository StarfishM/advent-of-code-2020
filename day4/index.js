/* check passports for
byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID) ->optional
OR */

const arrOfAllPassports = require("./input");
// console.log("arrOfAllPassports in index:", arrOfAllPassports);

const targetArray = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

function checkPassport(arrOfProps, arrOfObjs) {
    let validPassports = 0;
    arrOfObjs.map((each, i) => {
        const arrEachProps = Object.keys(each);
        let checker = (arr, target) => target.every((v) => arr.includes(v));
        const isValid = checker(arrEachProps, arrOfProps);
        if (isValid) {
            validPassports++;
        }
    });
    console.log("validPassports:", validPassports);
    return validPassports;
}

checkPassport(targetArray, arrOfAllPassports);

// Part 2
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const checkBYR = (passport) => {
    if (
        +passport["byr"] >= 1920 &&
        +passport["byr"] <= 2002 &&
        passport["byr"].length === 4
    ) {
        return true;
    }
};

const checkIYR = (passport) => {
    if (
        passport["iyr"].length === 4 &&
        +passport["iyr"] >= 2010 &&
        +passport["iyr"] <= 2020
    ) {
        return true;
    }
};

const checkEYR = (passport) => {
    if (
        passport["eyr"].length === 4 &&
        +passport["eyr"] >= 2020 &&
        +passport["eyr"] <= 2030
    ) {
        return true;
    }
};

const checkHGT = (passport) => {
    if (passport["hgt"].includes("cm")) {
        let height = parseInt(passport["hgt"].replace("cm", ""));
        if (height >= 150 && height <= 193) {
            return true;
        }
    }
    if (passport["hgt"].includes("in")) {
        let height = parseInt(passport["hgt"].replace("in", ""));
        if (height >= 59 && height <= 76) {
            return true;
        }
    }
};

const checkHCL = (passport) => {
    return (
        passport["hcl"].length == 7 &&
        passport["hcl"].replace("#", "").match(/[0-9A-Fa-f]{6}/g)
    );
};

const checkPID = (passport) => {
    return passport["pid"].length == 9 && !isNaN(+passport["pid"]);
};

const checkECL = (passport) => {
    var cols = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return cols.includes(passport["ecl"]);
};

function checkPassportStrictly(arrOfProps, arrOfObjs) {
    let validPassports = 0;
    arrOfObjs.map((each, i) => {
        const arrEachProps = Object.keys(each);
        let checker = (arr, target) => target.every((v) => arr.includes(v));
        const isValid = checker(arrEachProps, arrOfProps);
        if (isValid) {
            if (
                checkBYR(each) &&
                checkECL(each) &&
                checkEYR(each) &&
                checkHCL(each) &&
                checkHGT(each) &&
                checkIYR(each) &&
                checkPID(each)
            ) {
                validPassports++;
            }
        }
    });
    console.log("validPassports:", validPassports);
    return validPassports;
}

checkPassportStrictly(targetArray, arrOfAllPassports);
