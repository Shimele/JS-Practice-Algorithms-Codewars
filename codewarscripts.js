//Simple, remove the spaces from the string, then return the resultant string.
//regex
function noSpace(x){
    x= x.replace(/\s/g, '');
    return x;
}

 function noSpace(x){
     return x.split(' ').join('')
}

//for loop
function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
}
