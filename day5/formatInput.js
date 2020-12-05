const input = require("./unformattedInput");
// console.log("input:", input);

const testInput = `BBFFFFBRLL
BFBBBBFLLL
FBBBFBFLLR
BFBBBFBLRR
FBBFFBFLRR
FFBFFBFRRR
FBFBBBBLLL
BFFBFFFRLR
BFFBFFFRLL
BFBBFBFRRL
FBFFFFBLRR`;

const testInput2 = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL
FBFBBFFRLR`;
const matchPattern = /[\n\r]/;
const formatInput = input.split(matchPattern);

module.exports = formatInput;
