// Binary Tree Path Sum

class TreeNode{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function formTree(arr, targetSum) {
    if(arr.length === 0) return false;

    const root = new TreeNode(arr[0])
    const queue = [root];

    let i = 1;
    while(queue.length > 0 && i< arr.length) {
        const node = queue.shift();

        if(i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i])
            queue.push(node.left)
        } 
        i++;
        if(i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }
        i++
    }

    return hasPathSum(root, targetSum)
}

var hasPathSum = function(root, targetSum) {

    if(root === null) return false

    if(root.value === targetSum && root.left === null && root.right === null) {
        return true
    }

    return (hasPathSum(root.left, targetSum - root.value) || hasPathSum(root.right, targetSum - root.value))
    
};

root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
console.log(formTree(root, targetSum));