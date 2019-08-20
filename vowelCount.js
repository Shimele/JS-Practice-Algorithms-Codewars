//function getCount(str) {
  //var vowelsCount = 0;
  //var vowel = "aeiou"
 // for (let i = 0; i < vowel.length; i++ ){
   //   for (let y = 0; y < str.length; y++){
    //      if(vowel[i] == str[y]){
  //            vowelsCount++
   //       }
  //    }
 // }
  
  //console.log(vowelsCount)
  //return vowelsCount;
//}
//getCount('generatally')

function getCount2(str) {
    string = str.split('')
    let vowelsCount = string.filter(x => x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
    return vowelsCount.length;
  }

  function getCount(str) {
    //string = str.split('')
    return str.split('').filter(x => x == "a" || x == "e" || x == "i" || x == "o" || x == "u").length
    //return vowelsCount.length;
  }
  getCount('independencehfssertuilkbcxiutrea')
  
  //regex
  function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }
  