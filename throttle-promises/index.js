function throttlePromises(n, fns) {
    var waiting = fns.concat([]);
    var running = 0;
    var allResults = new Array(fns.length);

    function run(resolve) {
        if (waiting.length > 0) {
            if (running < n) {
                running++;
                var idx = fns.length - waiting.length;
                var f = waiting.pop();
                f().then(function(results) {
                    running--;
                    allResults[idx] = results;
                    run(resolve);
                });
                run(resolve);
            }
        } else if (running == 0) {
            resolve(allResults);
        }
    }
    
    return new Promise(function(resolve) {
        run(resolve);
    });
}

module.exports = throttlePromises;
