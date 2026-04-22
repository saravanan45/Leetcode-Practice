// 101. Symmetric Tree

function isMirror(left, right) {
    if(left === null && right === null) return true;

    if(left === null || right === null) return false;
    
    if(left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)) {
        return true
    } else {
        return false;
    }
}

var isSymmetric = (root) => {
    return isMirror(root, root)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function formTree(arr) {
     if(i>= arr.length || arr[i] === null) return null;
    
    const root = new TreeNode(arr[i])

    root.left = formTree(arr, 2 * i + 1);
    root.right = formTree(arr, 2 * i + 2)

    return root;  
}

const arr = [1,2,2,3,4,4,3]
const root = formTree(arr);
console.log(isSymmetric(root))