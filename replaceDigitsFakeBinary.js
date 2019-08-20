
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let xx = x.split('')
    let digits = [];
    for(let i = 0; i < xx.length; i++){
        if (xx[i] < 5){
            xx[i] = 0;
            digits.push(xx[i])
        } else if (xx[i] >= 5){
            xx[i] = 1;
            digits.push(xx[i])
        }
    }
    return digits.join('')
}