var async = {
    sequence: function(fns) {
        return function(callback) {
            function makeCallback(i) {
                return function(err, data) {
                    if (i < fns.length - 1) {
                        fns[i + 1](makeCallback(i + 1), data);
                    } else {
                        callback(err, data);
                    }
                };
            }

            if (fns.length > 0) {
                fns[0](makeCallback(0));
            } else {
                callback();
            }
        };
    },

    parallel: function(fns) {
        return function(callback) {
            var allData = new Array(fns.length);
            var count = 0;
            function makeCallback(i) {
                return function(err, data) {
                    allData[i] = data;
                    if (++count == fns.length) {
                        callback(err, allData);
                    }
                };
            }

            for (var i = 0; i < fns.length; i++) {
                fns[i](makeCallback(i));
            }
            if (fns.length == 0) {
                callback();
            }
        };
    },

    race: function(fns) {
        return function(callback) {
            var first = true;
            for (var i = 0; i < fns.length; i++) {
                fns[i](function(err, data) {
                    if (first) {
                        first = false;
                        callback(err, data);
                    }
                });
            }
            if (fns.length == 0) {
                callback();
            }
        };
    }
};

module.exports = async;
