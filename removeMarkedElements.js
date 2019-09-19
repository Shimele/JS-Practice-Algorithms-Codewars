//Define a method function that removes from a given array of integers all the values contained in a second array.
//link to kata https://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list/train/javascript

Array.prototype.remove_ = function(integer_list, values_list){
    let newList = []
      for(let i = 0; i < integer_list.length; i++){
        if(values_list.indexOf(integer_list[i]) == -1){
          newList.push(integer_list[i])
        }
        
      }
      return newList
    }