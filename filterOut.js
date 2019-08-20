//Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

//The geese are any strings in the following array, which is pre-populated in your solution:

//geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var temp = []
  for (var i = 0; i < birds.length; i++){
          if (!geese.includes(birds[i]) ){
              temp.push(birds[i])
          }
  }
  return temp
};

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])