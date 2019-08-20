function sockMerchant(n, ar) {
    let pair = []
    
    for(let i = 0; i < n; i++){
        let temp = []
        temp.push(ar.filter(number => number == ar[i]))
        console.log(temp)
        pair.push(Math.floor(temp.length/2))
        temp = []
    }
    console.log(pair)
}
sockMerchant(9, [10,20,20,10,10,30,50,10,20])