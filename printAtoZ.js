//print A to Z
//let A = 65(upper case)
//let Z = 91(upper case)

function printAlphabet(){
    alphabet = []
    for (let i = 65; i < 91; i++){
        alphabet.push(String.fromCharCode(i))
    }
    return alphabet.join()
}
printAlphabet()
