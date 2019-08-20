//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    x = x.split("");
    let digits = [];
    for(let i = 0; i < x.length; i++){
        if (x[i] < 5){
            //x[i] = 0;
            digits.push('0')
        } else if (x[i] >= 5){
            //x[i] = 1;
            digits.push('1')
        }
    }
    let finalDigits = digits.join('');
    return finalDigits;
    console.log(finalDigits)
}
fakeBin('12356879');