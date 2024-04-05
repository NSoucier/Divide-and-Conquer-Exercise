function sortedFrequency(arr, value) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let firstAndLast = []; 

    for (let i=0; i<2; i++) {
        while (leftIDX <= rightIDX) {
            let middle = Math.floor((rightIDX + leftIDX) / 2);
            if (arr[middle] >= value) {
                rightIDX = middle - 1;
                firstAndLast[0] = middle;
            } else {
                leftIDX = middle + 1;
                firstAndLast[0] = middle + 1; // new
            }
        }
    }

    leftIDX = firstAndLast[0];
    rightIDX = arr.length - 1;
    while (leftIDX <= rightIDX) {
        let middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] <= value) {
            leftIDX = middle + 1;
            firstAndLast[1] = middle + 1;           
        } else {
            rightIDX = middle - 1;
            firstAndLast[1] = middle;          
        }
    }
    
    return (firstAndLast.length === 2) ? (firstAndLast[1] - firstAndLast[0]) : (-1)
}

module.exports = sortedFrequency