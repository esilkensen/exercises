function debounce(f, wait) {
    var ctx;
    var args;
    var called = new Date();
    
    return function() {
        ctx = this;
        args = arguments;
        var now = new Date();
        
        if (now - called >= wait) {
            called = now;
            f.apply(ctx, args);
        } else {
            setTimeout(function() {
                now = new Date();
                if (now - called >= wait){
                    called = new Date();
                    f.apply(ctx, args);
                }
            }, wait - (now - called));
        }
    };
}

module.exports = debounce;
