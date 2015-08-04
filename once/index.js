function once(f) {
    var called = false;
    var value;
    
    return function() {
        if (!called) {
            value = f.apply(this, arguments);
            called = true;
        }
        return value;
    };
}

module.exports = once;
