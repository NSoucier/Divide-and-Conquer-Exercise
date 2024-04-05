function findFloor(arr, num) {
    let leftIDX = 0;
    let rightIDX = arr.length - 1;

    // check if num is included in arr
    if (num < arr[0]) { return -1 }

    // find floor
    while (leftIDX <= rightIDX) {
        var middle = Math.floor((rightIDX + leftIDX) / 2);
        if (arr[middle] === num) {
            return num
        } else if (arr[middle] < num) {
            leftIDX = middle + 1;
        } else {
            rightIDX = middle - 1;
        }
    }

    return arr[middle]
}

module.exports = findFloor