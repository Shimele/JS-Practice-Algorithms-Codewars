//print A to Z

function printAlphabet(){
    let A = 65
    let Z = 91
    alphabet = ""
    for (let i = A; i < Z.length; i++){
        alphabet.push(string.fromCharCode(i))
    }
    console.log(alphabet)
    return alphabet
}
printAlphabet