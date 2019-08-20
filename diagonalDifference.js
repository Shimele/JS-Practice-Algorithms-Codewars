function diagonalDifference(arr) {
    // Write your code here
    let count1 = 0, count2 = arr[0].length-1, diagonal1 = [], diagonal2 = []
    for (let i = 0; i < arr.length; i++) {
        diagonal1.push(arr[count1][i])
        diagonal2.push(arr[count2][i])
        count1++
        count2--
    }
    let answere1 = diagonal1.reduce((a, b) => a + b)
    let answere2 = diagonal2.reduce((a, b) => a + b)
    return Math.abs(answere1 - answere2)
}