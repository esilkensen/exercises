function throttle(f, wait) {
    var calls = false;

    setInterval(function() {
        if (calls.length > 0) {
            var call = calls.pop();
            f.apply(call.ctx, call.args);
        }
    }, wait + 1);

    return function() {
        if (calls) {
            calls.push({ ctx: this, args: arguments });
        } else {
            f.apply(this, arguments);
            calls = [];
        }
    };
}

module.exports = throttle;
