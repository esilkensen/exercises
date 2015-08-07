function transmitter(options, callback) {
    transmitMessage(options.message.split(' '), 0, callback);
    
    function transmitMessage(words, i, callback) {
        if (i < words.length) {
            var word = words[i];
            transmitWord(word, 0, function() {
                options.timeouter(function() {
                    transmitMessage(words, i + 1, callback);
                }, i < words.length - 1 ? 6 : 0);
            });
        } else {
            callback();
        }
    }
    
    function transmitWord(word, i, callback) {
        if (i < word.length) {
            var code = options.codes[word.charAt(i)];
            transmitCode(code, 0, function() {
                options.timeouter(function() {
                    transmitWord(word, i + 1, callback);
                }, i < word.length - 1 ? 2 : 0);
            });
        } else {
            callback();
        }
    }
    
    function transmitCode(code, i, callback) {
        if (i < code.length) {
            var mark = code.charAt(i);
            transmitMark(mark, function() {
                transmitCode(code, i + 1, callback);
            });
        } else {
            callback();
        }
    }
    
    function transmitMark(mark, callback) {
        options.toggle();
        options.timeouter(function() {
            options.toggle();
            options.timeouter(callback, 1);
        }, mark == '.' ? 1 : 3);
    }
}

module.exports = transmitter;
