function countZeroes(arr) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let indexOfZero = 0; 

    while (leftIDX <= rightIDX) {
        let middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] === 0) {
            rightIDX = middle - 1;
            indexOfZero = middle;
        } else {
            leftIDX = middle + 1;
            indexOfZero = leftIDX;
        }
    }

    return arr.length - indexOfZero
}

module.exports = countZeroes