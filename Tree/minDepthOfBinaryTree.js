var minDepth = function(root) {
    if(root === null) return 0;

    const left = minDepth(root.left);
    const right = minDepth(root.right);

    if(root.left === null) return right + 1;
    if(root.right === null) return left + 1;

    return Math.min(left, right) + 1;
};