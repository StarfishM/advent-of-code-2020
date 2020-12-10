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

// for (let i = 0; i < gameData.length; i++) {
//     let newIndex = checkStep(gameData[i], i);
//     i = newIndex - 1;
// }

// console.log("stepCount=", stepCount);
let counter = 0;

// PART 2 fix game to runthrough

const potentialsModified = [...gameData].filter(
    (each) => each.action === "nop" || each.action === "jmp"
);
const potentialsModifiedClone = [];
potentialsModified.map((s) => {
    cloneS = { ...s };
    cloneS.action === "nop" ? (cloneS.action = "jmp") : (cloneS.action = "nop");
    potentialsModifiedClone.push(cloneS);
});

function cloneGameData(arr) {
    const clonedData = [...arr].map((each) => Object.assign({}, each));
    return clonedData;
}

function checkStep2(step, index) {
    let { visited, action } = step;
    if (visited > 0) {
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

function runGameCheck(arrOfSteps, modifiedStep) {
    stepCount = 0;
    arrOfSteps[modifiedStep.inGameindex].action = modifiedStep.action;
    let newIndex;
    for (let i = 0; i < arrOfSteps.length; i++) {
        newIndex = checkStep2(arrOfSteps[i], i);
        if (newIndex == "stop") {
            break;
        } else if (newIndex == "end") {
            break;
        } else {
            i = newIndex - 1;
        }
    }
    if (typeof newIndex == "number") {
        console.log("exited game normal");
        console.log("stepCount is:", stepCount);
    }
}
for (let i = 0; i < potentialsModifiedClone.length; i++) {
    const cloneOfGameData = cloneGameData(gameData);

    runGameCheck(cloneOfGameData, potentialsModifiedClone[i]);
}
