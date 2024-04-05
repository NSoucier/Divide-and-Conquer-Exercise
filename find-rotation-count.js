function findRotationCount(arr) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;

    // if array is already sorted
    if (arr[leftIDX] < arr[rightIDX]) { return leftIDX }

    // find index of lowest number
    while (leftIDX <= rightIDX) {
        let middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        } else if (arr[middle] > arr[leftIDX]) {
            leftIDX = middle; 
        } else if (arr[middle] < arr[leftIDX]) {
            rightIDX = middle;
        } else {
            return middle
        }
    }
}

module.exports = findRotationCount