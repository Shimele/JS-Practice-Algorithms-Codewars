function catAndMouse(x, y, z) {

    let distanceCatA = 0
    let distanceCatB = 0
    if (x > z) {
        distanceCatA = x - z
    } else if (z > x) {
        distanceCatA = z - x
    }

    if (y > z) {
        distanceCatB = y - z
    } else if (z > y) {
        distanceCatB = z - y
    }
    if(distanceCatA == distanceCatB){
       return 'Mouse C' 
    }else if(distanceCatA > distanceCatB){
        return  'Cat B'
    }else return 'Cat A'
}
catAndMouse(1, 2, 3)