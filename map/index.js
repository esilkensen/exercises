function map(arr, callback, thisArg) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(callback.apply(thisArg, [arr[i], i, arr]));
    }
    return result;
}

module.exports = map;
