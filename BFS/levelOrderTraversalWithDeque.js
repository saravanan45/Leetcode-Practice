class Deque {
    constructor() {
        this.items = {};
        this.front = 0;
        this.back = 0;
    }

    addBack(value) {
        this.items[this.back++] = value
    }

    removeFront() {
        if(this.size() === 0) return undefined;
        const node = this.items[this.front]
        delete this.items[this.front++];
        return node;
    }

    size() {
        return this.back - this.front;
    }

}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



function traverse(root) {
    if(root === null) return [];

    const queue = new Deque();
    queue.addBack(root);
    const result = []
    while(queue.size() > 0) {
        const levelSize = queue.size();
        const currentLevel = []
        for(let i = 0; i < levelSize; i++) {
            const node = queue.removeFront();
            currentLevel.push(node.value)
            if(node.left) queue.addBack(node.left);
            if(node.right) queue.addBack(node.right);
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