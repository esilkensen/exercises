function Middleware() {
    var fns = [];
    return {
        use: function(f) {
            fns.push(f);
        },
        
        go: function(f) {
            var count = 0;
            var ctx = this;
            for (var i = 0; i < fns.length; i++) {
                fns[i].apply(ctx, [function() {
                    if (++count == fns.length) {
                        f.apply(ctx);
                    }
                }]);
            }
        }
    };
}

module.exports = Middleware;
