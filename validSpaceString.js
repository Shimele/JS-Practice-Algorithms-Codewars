//Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

//For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

function validSpacing(s) {
  let before = s.length;
  let after = s.trim().length;
  if (before !== after) {
    return false;
  }

  let nbwords = s.split(/\s+/).length; //get number of words in the string
  let nbspace = s.split("").filter((char) => char == " ").length; //get number of space in a string
  return nbwords - nbspace == 1;
}

console.log(validSpacing("hello world"));
