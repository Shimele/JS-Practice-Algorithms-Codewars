function squareSum(numbers){
  let squared = [] 
  for (let i =0; i < numbers.length; i++){
    squared.push(Math.pow(numbers[i],2))
  }
  return squared.reduce((a,b) => a+b)
}
squareSum([1, 2, 2])