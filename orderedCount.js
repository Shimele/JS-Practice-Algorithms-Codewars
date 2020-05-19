//Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
//Example:
//orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]'

let orderedCount = function (text) {
    let array = text.split('')
    let obj = {}
    for(let i=0; i < array.length; i++){
     if(obj.hasOwnProperty(array[i])){
       obj[array[i]] +=1
     }else{
       obj[array[i]] = 1
     }
    }

   const set1 = new Set(array)//create a set from the array(to have unique values of each element)
   const result = []
   set1.forEach(x => {
     result.push([x, obj[x]])
   })
   
   return result
    
    }