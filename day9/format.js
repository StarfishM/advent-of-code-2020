const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

const input = require("./unformatted");

const matchPatternLineBreak = /[\n\r]/;

const formattedData = input.split(matchPatternLineBreak).map((each) => +each);

module.exports = formattedData;
