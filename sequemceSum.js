//We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:
//Example:
//Input:

//> 6
//Output:
//0+1+2+3+4+5+6 = 21

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count < 0) return count + "<0"
    if(count == 0) return '0=0'
    let sumAdd = []
    let sum = 0
      for (let i = 0; i <= count; i++){
      (i !== count)? sumAdd.push(i + '+') : sumAdd.push(i)
      sum += i
    }
      return sumAdd.join("") + ' = ' + sum
  };

  return SequenceSum

})();