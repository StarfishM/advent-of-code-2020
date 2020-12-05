const boardingData = require("./formatInput");
//PART 1
const checkRow = (boardingPass, numOfCharToCheck) => {
    let rowRange = [0, 127];

    for (var i = 0; i < numOfCharToCheck; i++) {
        const rowTotal = rowRange[1] - rowRange[0];
        const rowHalf = rowTotal / 2;
        if (boardingPass[i] === "F") {
            rowRange[1] = Math.floor(rowRange[1] - rowHalf);
            rowRange.length == 2
                ? rowRange.push(boardingPass[i])
                : (rowRange[2] = boardingPass[i]);
        } else if (boardingPass[i] === "B") {
            rowRange[0] = Math.ceil(rowRange[1] - rowHalf);
            rowRange.length == 2
                ? rowRange.push(boardingPass[i])
                : (rowRange[2] = boardingPass[i]);
        }
    }
    return rowRange;
};

//R go up L go down
const checkCol = (boardingPass, numOfCharToCheck) => {
    let colRange = [0, 7];

    for (
        let i = boardingPass.length - numOfCharToCheck;
        i <= boardingPass.length - 1;
        i++
    ) {
        const colTotal = colRange[1] - colRange[0];
        const colHalf = colTotal / 2;

        if (boardingPass[i] === "L") {
            colRange[1] = Math.floor(colRange[1] - colHalf);
            colRange.length == 2
                ? colRange.push(boardingPass[i])
                : (colRange[2] = boardingPass[i]);
        } else if (boardingPass[i] === "R") {
            colRange[0] = Math.ceil(colRange[1] - colHalf);
            colRange.length == 2
                ? colRange.push(boardingPass[i])
                : (colRange[2] = boardingPass[i]);
        }
    }
    return colRange;
};

const calculateSeatId = (row, col) => {
    return row * 8 + col;
};

let seatId = [];
boardingData.forEach((pass) => {
    const rowCheck = checkRow(pass, 7);
    const colCheck = checkCol(pass, 3);
    const r = rowCheck[2] === "F" ? rowCheck[0] : rowCheck[1];
    const c = colCheck[2] === "L" ? colCheck[0] : colCheck[1];
    seatId.push(calculateSeatId(r, c));
});

console.log(seatId.sort((a, b) => b - a)[0]);

//PART 2 find your own seat
console.log(seatId.sort((a, b) => a - b));

for (let i = 0; i < seatId.length; i++) {
    currSeat = seatId[i];
    if (currSeat + 2 == seatId[i + 1]) {
        console.log("your seat is:", currSeat + 1);
        return currSeat + 1;
    }
}
