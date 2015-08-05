function flattenThunk(f) {
    function makeCallback(callback) {
        return function(err, result) {
            if (typeof result === 'function') {
                result(makeCallback(callback));
            } else {
                callback(err, result);
            }
        }
    }

    return function(callback) {
        f(makeCallback(callback));
    };
}

module.exports = flattenThunk;
