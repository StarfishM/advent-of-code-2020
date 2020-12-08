const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
const input = require("./unformattedInput");

const matchPatternLineBreak = /[\n\r]/;
const matchPatternOperator = /[+|-]/;
const splitOnLineBreak = testInput.split(matchPatternLineBreak);
console.log("testInput:", splitOnLineBreak);

const gameSteps = [];

const turnIntoObjects = (str) => {
    const gameStep = {};
    gameStep.visited = 0;
    const splitActionFromVals = str.split(" ");
    gameStep.action = splitActionFromVals[0];
    const splitOperator = splitActionFromVals[1].match(matchPatternOperator);
    gameStep.operator = splitOperator[0];
    gameStep.value = +splitActionFromVals[1].substring(1);
    gameSteps.push(gameStep);
};

splitOnLineBreak.forEach((str) => {
    turnIntoObjects(str);
});

module.exports = gameSteps;
