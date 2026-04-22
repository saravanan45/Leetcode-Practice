
class Node {
    constructor(val, left, right) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

const bfs = (root) => {
    let queue = [root];
    let pointer = 0;
    const result = [];
    let temp = [];
    while(pointer < queue.length) {

        const levelSize = queue.length - pointer;

        for(let i = 0; i< levelSize; i++) {
            const node = queue[pointer++];
            result.push(node.val)
            if(node.left) {
                queue.push(node.left);
            } if(node.right) {
                queue.push(node.right);
            }
        }

        result.push("#")
        
    }
    return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// console.log(root);

console.log(bfs(root));


//  [1, '#', 2, 3, '#', 4, 5, 6, 7, '#']
// time complexity: O(N)
// space complexity: O(N)






// not a optimal approach
// time complexity: O(n)
// space complexity: O(n) as the temp is used to store n nodes

// class Node {
//     constructor(val, left, right) {
//         this.left = null;
//         this.right = null;
//         this.val = val;
//     }
// }

// const bfs = (root) => {
//     let queue = [root];
//     let pointer = 0;
//     const result = [];
//     let temp = [];
//     while(pointer < queue.length) {
//         const node = queue[pointer++];
//         result.push(node.val);
//         if(node.left) {
//             temp.push(node.left);
//         }
//         if(node.right) {
//             temp.push(node.right);
//         }
//         if(pointer === queue.length && temp.length) {
//             result.push("#")
//             queue.push(...temp);
//             temp = [];
//         }
//         if(pointer === queue.length && !temp.length) {
//              result.push("#");
//         }
//     }
//     return result;
// }

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// // console.log(root);

// console.log(bfs(root));


//  [1, '#', 2, 3, '#', 4, 5, 6, 7, '#']



