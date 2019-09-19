//Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
    let n = num;
    let allPrimeNum = [];
    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...
    
      for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
      }
    
      allPrimeNum.push( i ); // a prime
    }
    return allPrimeNum.reduce((a,b) => a+b)
    }
    
    sumPrimes(10)