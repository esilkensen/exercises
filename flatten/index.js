function flatten(arr) {
    if (arr.length == 0) {
        return [];
    } else if (Array.isArray(arr[0])) {
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
    } else {
        return [arr[0]].concat(flatten(arr.slice(1)));
    }
}

module.exports = flatten;
