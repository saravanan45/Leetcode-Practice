// zigzagTraversal

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Deque {
    constructor() {
        this.items = {}
        this.front = 0
        this.back = 0
    }

    addBack(node) {
        this.items[this.back++] = node
    }

    addFront(node) {
        this.front--;
        this.items[this.front] = node
    }

    removeFront() {
        if(this.getSize() === 0) return undefined
        const node = this.items[this.front]
        delete this.items[this.front++]
        return node;
    }

    removeBack() {
        if(this.getSize() === 0) return undefined
        this.back--;
        const node = this.items[this.back];
        delete this.items[this.back];
        return node
    }

    getSize() {
        return this.back - this.front
    }
}

function traverseZigzag(root) {
    if(root === null) return []

    const queue = new Deque()
    queue.addBack(root);

    const result = [];
    let levels = 0;
    while(queue.getSize() > 0) {
        const levelSize = queue.getSize() 
        for(let i = 0; i< levelSize; i++) {
            if(levels % 2 === 0) {
                const node = queue.removeFront();
                result.push(node.value)
                
                if(node.left) queue.addBack(node.left)
                if(node.right) queue.addBack(node.right)
                
            } else {
                const node = queue.removeBack();
                result.push(node.value)
                if(node.right) queue.addFront(node.right)
                if(node.left) queue.addFront(node.left)
                
            }
        }
        levels++;
    }
    return result;
}




// [3,9,20,null,null,15,7]
const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)


console.log(`zigzag order traversal: ${JSON.stringify(traverseZigzag(tree))}`);