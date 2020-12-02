const input = require("./input");

const checkPasswords = (arrOfObjs) => {
    const validPw = [];
    arrOfObjs.map((each) => {
        const countOccurence = each.pw.split(each.char).length - 1;
        if (countOccurence >= each.min && countOccurence <= each.max) {
            validPw.push(each);
        }
    });
    return validPw.length;
};

const checkPasswordsForNewPolicy = (arrOfObjs) => {
    const validPw = [];
    arrOfObjs.map((each) => {
        console.log("***********************");
        console.log("each.char:", each.char);
        console.log("each.pw[each.min]", each.pw[each.min - 1]);
        console.log("each.pw[each.max]", each.pw[each.max - 1]);
        console.log("min is char", each.pw[each.min - 1] == each.char);
        console.log("max is not char", each.pw[each.max - 1] != each.char);
        if (
            (each.pw[each.min - 1] == each.char &&
                each.pw[each.max - 1] != each.char) ||
            (each.pw[each.min - 1] != each.char &&
                each.pw[each.max - 1] == each.char)
        ) {
            validPw.push(each);
        }
    });
    return validPw.length;
};

// const runCheck = checkPasswords(input);
const runSecondCheck = checkPasswordsForNewPolicy(input);
// console.log("runCheck:", runCheck);
console.log("runSecondCheck: ", runSecondCheck);
