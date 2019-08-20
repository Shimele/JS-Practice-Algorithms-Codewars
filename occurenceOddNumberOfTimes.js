//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let numbs = [];
  for (let i = 0; i < A.length; i++){
      if (!numbs.includes(A[i])){
           numbs.push(A[i])
      }
  }
  for(let z = 0; z < numbs.length; z++){
    let count = 0;
    for(let y = 0; y < A.length; y++){
        if (numbs[z] === A[y]){
            count += 1;
        }
    }
     if(count % 2 !== 0)  return numbs[z]
  }
 
}
findOdd([1,1,1,1,2,2,3,3,3,3,4,4,4]);