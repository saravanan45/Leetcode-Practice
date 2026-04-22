function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function formTree(arr) {
    if (!arr.length || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1; // pointer for array

    while (queue.length && i < arr.length) {
        const node = queue.shift();

        // left child
        if (arr[i] !== undefined && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        // right child
        if (i < arr.length && arr[i] !== undefined && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

const arr = [4,2,7,1,3,6,9]
const root = formTree(arr);
console.log(root)

// Time: O(n)
// Space: O(n) in worst case (skewed tree), O(log n) in best case (balanced tree)