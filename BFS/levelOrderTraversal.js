class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

// shift makes the function to be O(n*2)

// function traverse(root) {
//     if(root === null) return root;

//     const queue = [root]
//     const levels = []

//     while(queue.length > 0) {
//         const levelSize = queue.length;
//         const currentLevel = []
//         for(let i = 0; i< levelSize; i++) {
//             const node = queue.shift()
//             currentLevel.push(node.value)
//             if(node.left) queue.push(node.left)
//             if(node.right) queue.push(node.right)
//         }
//         levels.push(currentLevel)
//     }
//     return levels;
// }


// using pointer to make the traversal function as O(n)
function traverse(root) {
    if(root === null) return root;

    const queue = [root]
    let index = 0;
    const result = []
    while(index < queue.length) {
        const levelSize = queue.length - index;
        const currentLevel = []
        for(let i = 0; i < levelSize; i++) {
            const node = queue[index++]
            currentLevel.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(currentLevel)
    }

    return result;

}

// Time complexity - O(n)




var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${JSON.stringify(traverse(root))}`);
