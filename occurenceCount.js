//All Star Code Challenge #18

//Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
  let string = str.split("")
  let count = 0
  for(let i = 0; i < string.length; i++){
      if(string[i] == letter){
          count += 1
      }
  }
  return count
}
strCount("hello", "e")

function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }
  function strCount(str, letter){  
    return str.split(letter).length-1
  }