//Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
  decimal = parseInt(bin, 2);
  return decimal;
}
function binToDec(bin){
    var dec = 0;
    dec = Number("0b" + bin);
    return dec;
  }