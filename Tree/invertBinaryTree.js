// 226. Invert Binary Tree

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
    if(root === null) return root;

    let left = invertTree(root?.left)
    let right = invertTree(root?.right)

    root.left = right;
    root.right = left;

    return root
};

function formTree(arr, i=0) {
    if(i>= arr.length || arr[i] === null) return null;
    
    const root = new TreeNode(arr[i])

    root.left = formTree(arr, 2 * i + 1);
    root.right = formTree(arr, 2 * i + 2)

    return root;  
}

const arr = [4,2,7,1,3,6,9]
const root = formTree(arr);
console.log("root", root)
invertTree(root)

// Time: O(n)
// Space: O(n) in worst case (skewed tree), O(log n) in best case (balanced tree)