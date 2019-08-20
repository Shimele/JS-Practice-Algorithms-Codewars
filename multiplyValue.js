//Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
    let multiple = 1;
    for (let i = 0; i < x.length; i++){
        multiple *= x[i]
    }
    console.log(multiple)
    return multiple
}
grow([1, 2, 3])