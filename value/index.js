function value(obj) {
    return typeof obj === 'function' ? value(obj()) : obj;
}

module.exports = value;
