// 101. Symmetric Tree

function isMirror(root) {

    const queue = [[root, root]]
    let pointer = 0;

    while(pointer < queue.length) {

        const [left, right] = queue[pointer++];

        if(left === null && right === null) continue;
        if(left === null || right === null) return false;

        if(left.val !== right.val) return false;

        queue.push([left.left, right.right])
        queue.push([left.right, right.left])
    }

    return true
    
}

var isSymmetric = (root) => {
    return isMirror(root)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function formTree(arr, i=0) {
     if(i>= arr.length || arr[i] === null) return null;
    
    const root = new TreeNode(arr[i])

    root.left = formTree(arr, 2 * i + 1);
    root.right = formTree(arr, 2 * i + 2)

    return root;  
}

const arr = [1,2,2,3,4,4,3]
const root = formTree(arr);
console.log(isSymmetric(root))