/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F*/

function abbrevName(name){
   name = name.split(/,| /)
   let cap = []
   for (let i = 0; i < name.length; i++){
     cap.push(name[i][0])
   }
   let abbr = cap.join('.')
   let capital = abbr.toUpperCase()
   return capital
}
