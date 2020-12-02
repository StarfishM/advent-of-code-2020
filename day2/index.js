const input = require("./input");

const firstPasswordPhilosophy = (arrOfObjs) => {
    const validPw = [];
    arrOfObjs.map((each) => {
        const countOccurence = each.pw.split(each.char).length - 1;
        if (countOccurence >= each.min && countOccurence <= each.max) {
            validPw.push(each);
        }
    });
    return validPw.length;
};

const secondPasswordPhilosophy = (arrOfObjs) => {
    const validPw = [];
    arrOfObjs.map((each) => {
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

const runFirstPolicy = firstPasswordPhilosophy(input);
const runSecondPolicy = secondPasswordPhilosophy(input);
console.log(
    `There is ${runFirstPolicy} valid passwords in the list when the first policy is applied`
);
console.log(
    `There is ${runSecondPolicy} valid passwords in the list when the second policy is applied`
);
