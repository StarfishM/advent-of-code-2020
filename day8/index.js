const gameData = require("./formatInput");
// PART 1 find infinite loop and know the stepcount right before the pattern runs infinitely
let stepCount = 0;
function checkStep(step, index) {
    let { visited, action } = step;
    if (visited > 0) {
        console.log("step to exit on:", step);
        console.log("index:", index);
        return "stop";
    } else if (action === "acc") {
        step.operator === "+"
            ? (stepCount += step.value)
            : (stepCount -= step.value);

        step.visited += 1;
        return index + 1;
    } else if (action === "jmp") {
        step.operator === "+" ? (index += step.value) : (index -= step.value);
        step.visited += 1;
        return index;
    } else if (action === "nop") {
        step.visited += 1;
        return index + 1;
    }
}

for (let i = 0; i < gameData.length; i++) {
    let newIndex = checkStep(gameData[i], i);
    i = newIndex - 1;
}

console.log("stepCount=", stepCount);

// PART 2 fix game to runthrough
