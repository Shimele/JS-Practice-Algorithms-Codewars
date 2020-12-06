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
