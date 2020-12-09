function sharedBits(a, b) {
  let firstNum = a.toString(2).split();
  let secondNum = b.toString(2).split();
  let count = 0;
  const loopCounter = firstNum.length < secondNum.length ? firstNum : secondNum;

  for (let i = 0; i <= loopCounter; i++) {
    for (let j = 0; j <= loopCounter; j++) {
      loopCounter[i] == loopCounter[j] ? (count += 1) : count;
    }
  }
  ((count) => 2) ? true : false;
}
console.log(sharedBits(2, 10));
