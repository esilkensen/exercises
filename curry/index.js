function curry(f, partialArgs) {
    return function() {
        if (!Array.isArray(partialArgs)) {
            partialArgs = [];
        }
        
        var args = partialArgs.slice();
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        
        if (args.length == f.length) {
            return f.apply(this, args);
        } else {
            return curry(f, args);
        }
    };
}

module.exports = curry;
