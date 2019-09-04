//Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

//The Smallest element of the list of integers , must come in center position of array/list.

//The Higher than smallest , goes to the right .
//The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
function pendulum(values) {
    let arranged = [Math.min(...values)] //create new array at place the minimum value inside
    let temp = values.splice(values.indexOf(Math.min(...values)), 1) //splice the initial array not to include the minumum value anymore
    let push = 0;
    let unshift = 0;
    let i = 0
    while(i < values.length){
        if(push <= unshift){
            arranged.push(Math.min(...values)); //push minimum value at the right
            temp = values.splice(values.indexOf(Math.min(...values)), 1) //remove the pushed value from the array
            push++
        }else{
            arranged.unshift(Math.min(...values)); // for next loop unshift minimum value at the left
            temp = values.splice(values.indexOf(Math.min(...values)), 1) // remove the unshifted value from the array
            unshift++
        }
    }
    return arranged;
}
pendulum ([6, 6, 8 ,5 ,10])