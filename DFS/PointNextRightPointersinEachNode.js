// 116. Populating Next Right Pointers in Each Node

var connect = function(root) {
    if(!root) return null;
    const dfs = (node) => {
        if(!node || !node.left) return;

        node.left.next = node.right;

        if(node.next) {
            node.right.next = node.next.left;
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return root;
};

connect([1,2,3,4,5,6,7])

// time complexity: O(n) where n is the number of nodes in the tree
// space complexity: O(1) since we are using constant extra space for the next pointers, and the recursive stack space is not counted as extra space.