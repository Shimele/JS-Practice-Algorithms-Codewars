
function stairsIn20(s){
    let sumStairs = []
    for (let i = 0; i < s.length; i++){
      sumStairs.push(s[i].reduce((a,b) => a+b))
    }
    return sumStairs.reduce((a,b) => a+b) * 20
  }
stairsIn20([[2,5,3],[5,9,6],[7,10,60]])