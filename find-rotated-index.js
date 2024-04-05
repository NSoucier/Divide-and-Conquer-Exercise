function findRotatedIndex(arr, num) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;
    let minIndex = 0; 

    // find index of lowest number
    while (leftIDX <= rightIDX) {
        let middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] > arr[middle + 1]) {
            minIndex = middle + 1;
            break
        } else if (arr[middle] > arr[leftIDX]) {
            leftIDX = middle + 1; 
        } else {
            rightIDX = middle - 1;
        }
    }
    
    // is num < last index ? then look in second 'half' of arr. Otherwise, look in first 'half'
    if (num <= arr[arr.length -1]) {
        leftIDX = minIndex;
        rightIDX = arr.length -1;
    } else {
        rightIDX = minIndex;
        leftIDX = 0;
    }

    // binary search for num in first or second 'half' of array 
    while (leftIDX <= rightIDX) {
        let middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] > num) {
            rightIDX = middle -1; 
        } else if (arr[middle] < num) {
            leftIDX = middle +1;
        } else {
            return middle
        }
    }

    return -1
}

module.exports = findRotatedIndex
