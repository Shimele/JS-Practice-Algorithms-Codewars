/*
Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function lottery()). Your code inside lottery() must filter out all letters and return unique integers as a string. If there are no integers in the string return - “One more run!”.

Examples:

var str = "hPrBKWDH8yc6Lt5NQZWQ";

lottery(str); // should return "865"

var str = "ynMAisVpHEqpqHBqTrwH";

lottery(str); // should return "One more run!"
*/
function lottery(str){
    let array = str.split("")
   let filteredNumbers = array.filter(x => Number.isInteger(+x))
   if (filteredNumbers.length == 0) return "One more run!"
   let uniqueNumbers = []
   for(let i=0; i < filteredNumbers.length; i++){
             if(uniqueNumbers.indexOf(filteredNumbers[i]) === -1) {
                 uniqueNumbers.push(filteredNumbers[i]);
             }
         }
       return uniqueNumbers.join('')
 }