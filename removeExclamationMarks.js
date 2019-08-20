//Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s,n){
    let arr = s.split("")
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "!" && count < n){
            arr[i] = "0"
            count++
        }
    }
    return (arr.filter(x => x !== "0")).join("")
}
remove('!Hi!!!', 2)
 