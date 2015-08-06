function jasmineAsync(f) {
    var obj = f();
    it(obj.desc, function() {
        var done = false;
        runs(function() {
            obj.setup(function() {
                done = true;
            });
        });
        waitsFor(function() {
            return done;
        });
        runs(obj.test);
    });
}

module.exports = jasmineAsync;
