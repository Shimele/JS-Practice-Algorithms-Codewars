//In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.


function solve(s){
let ss = new Set(s)
if (ss.size != s.split('').length) return false
if(s.length == 0 || s.length == 1) return true
  let string = s.split('').sort()
    let r = []
    for(let i = 1; i < string.length; i++){           //original array
      for(let y = 0; y < string.length; y++)          //clone array
      if(string[i].charCodeAt(0) == (string[y].charCodeAt(0) + 1) ){ //compare the second element of the original array to the first element of clone array
      r.push(string[i])                             //if charCode of original == charCode of (clone+1) means its the next 
      }
    }
    if(r.length == string.length-1){                 //check if the length of the r array(also known as the 'true' array) is equl to the lenfth of the original array of alphabet
      return true
    }else if (r.filter(item => item => 2)){          //check if letter appears more than once
      return false
    }else return false
}