function invertTree(root) {
    if (root) {
        var left = root.left;
        var right = root.right;
        invertTree(left);
        invertTree(right);
        root.left = right;
        root.right = left;
        if (root.left === undefined) {
            delete root.left;
        }
        if (root.right === undefined) {
            delete root.right;
        }
    }
}

module.exports = invertTree;
