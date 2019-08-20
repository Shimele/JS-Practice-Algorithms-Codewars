//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    let intergers = [];
    let reducer = (accum, currentVal) => accum + currentVal;
    for (let i = 0; i < x.length; i++){
        if (typeof x[i] === 'string'){
            intergers.push(parseInt(x[i], 10))
        }else {
            intergers.push(x[i]);
        }
    }
    
    return (intergers.reduce(reducer));
}
sumMix([1,2,'42px']);