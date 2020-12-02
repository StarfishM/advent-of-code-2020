const fs = require("fs");
const input = require("./inputUnformatted");

// build regex for double digit, one digit, dash and character+colon
const matchPatterns = /(\d\d)|(\d)|(\-)|(\w\:)/;
//split string on regex
const formatted = input.split(matchPatterns);
//filter out undefined
const filterFalsyValues = formatted.filter(Boolean);
//compose subarrays to build objects
const arrOfSubArrays = splitIntoSubArray(filterFalsyValues, 6);

function splitIntoSubArray(arr, count) {
    var newArray = [];
    while (arr.length > 0) {
        newArray.push(arr.splice(0, count));
    }
    return newArray;
}

let jsonArray = [];
// compose object
arrOfSubArrays.map((each) => {
    let obj = {};
    obj.min = parseInt(each[0]);
    obj.max = parseInt(each[2]);
    obj.char = each[4].replace(":", "");
    obj.pw = each[5].trim();
    jsonArray.push(obj);
});

// write data into json file
fs.writeFileSync(`${__dirname}/input.json`, JSON.stringify(jsonArray, null, 4));
