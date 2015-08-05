function invertTree(root) {
    var left = root.left;
    var right = root.right;
    if ('left' in root) {
        invertTree(left);
        root.right = left;
    }
    if ('right' in root) {
        invertTree(right);
        root.left = right;
    }
}

module.exports = invertTree;
