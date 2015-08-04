function sort(arr) {
    var sortedArr = arr.slice();
    quicksort(sortedArr, 0, arr.length - 1);
    return sortedArr;
}

function quicksort(arr, lo, hi) {
    if (lo < hi) {
        p = partition(arr, lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
}

function partition(arr, lo, hi) {
    pivot = arr[hi];
    i = lo - 1;
    for (var j = lo; j < hi; j++) {
        if (arr[j] <= pivot) {
            i = i + 1;
            swap(arr, i, j);
        }
    }
    i = i + 1;
    swap(arr, i, hi);
    return i;
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

module.exports = sort;
