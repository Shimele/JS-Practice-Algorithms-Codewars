//7kyu

function divisibleByThree(str){
   //let digit = str.split('').map(x => Number(x));             //map from array string to array number
   return (str.split('').map(x => Number(x)).reduce((a,b) => a+b) %3 == 0)? true:false 
}