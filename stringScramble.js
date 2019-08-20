//Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

//Ex:scramble('abcd', [0,3,1,2]) -> 'acdb'

function scramble1(str, arr) {
  let my_object = {}
  let answer = []
  let str_array = str.split('')
  for (i = 0; i < arr.length; i++) { 
    my_object[arr[i]] = str_array[i]
  }
 //const object_keys = Object.keys(my_object)
 for (key in my_object) {
   answer.push(my_object[key])
 }
return answer.join('')
}

function scramble(str, arr) {
    for(var r=[],i=0;i<arr.length;i++) r[arr[i]]=str[i]
    console.log(r)
    return r.join("")
  };
  scramble('abcd', [0,3,1,2])