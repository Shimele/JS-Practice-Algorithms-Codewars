//link to kata
//https://www.codewars.com/kata/method-for-counting-total-occurence-of-specific-digits/train/javascript

function List(){
    this.countSpecDigits=function(integersList, digitsList){
      let single = integersList.join("").split("");
      let tupleList = [];
      for(let i = 0; i < digitsList.length; i++){
          let numOccurence = single.filter(num => num == digitsList[i]).length
          tupleList.push([digitsList[i], numOccurence])
      }
      return tupleList
    }
  }
  
List([-18, -31, 81, -19, 111, -888], [1, 8, 4])