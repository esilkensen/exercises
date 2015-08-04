function memoize(f) {
    var cache = [];
    
    return function() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }

        if (!(args in cache)) {
            cache[args] = f.apply(this, args);
        }

        return cache[args];
    };
}

module.exports = memoize;
