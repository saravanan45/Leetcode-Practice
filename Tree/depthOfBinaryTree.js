// 104. Max Depth of Binary tree

var maxDepth = function(root) {
    if (root === null) return 0;

    const left = maxDepth(root?.left);
    const right = maxDepth(root?.right);

    return Math.max(left, right) + 1;
};

const root = [1,null,2]

maxDepth(root)