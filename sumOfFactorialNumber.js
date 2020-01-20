/*
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not.

*/
function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
function strong(n) {
  const numberArray = n.toString().split('');
  let count = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    count += factorial(+numberArray[i]);
  }
  return (count === n) ? 'STRONG!!!!' : 'Not Strong !!';
}

strong(6);
