function binarySearch(arr, item, begin, end) {
    console.log('binarySearch(' + begin + ', ' + end + ')');
    if (end <= begin) {
        return -1;
    }
    var mid = Math.floor((end + begin) / 2);
    if (arr[mid] < item) {
        return binarySearch(arr, item, mid + 1, end);
    } else if (arr[mid] > item) {
        return binarySearch(arr, item, begin, mid);
    } else {
        return mid;
    }
}

function search(arr, item) {
    return binarySearch(arr, item, 0, arr.length);
}

module.exports = search;
