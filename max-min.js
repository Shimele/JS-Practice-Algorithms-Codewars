//In this Kata, you will be given an array of unique elements,
// and your task is to rerrange the values so that 
//the first max value is followed by the first minimum, followed by second max value then second min value, etc.

//For example:solve([15,11,10,7,12]) = [15,7,12,10,11]

function solve(arr) {
    const sortedArr = [...arr].sort((a, b) => b - a)
    let answer = []
    let shifted;
    let popped;
    for (let i = 0; i < arr.length; i++) {
        if (sortedArr.length == 1) break;
        shifted = sortedArr.shift()
        popped = sortedArr.pop()
        if (shifted && popped != undefined) {
            answer.push(shifted, popped)
        }

    }
    return answer.concat(sortedArr)
};