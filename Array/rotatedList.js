// 61. Rotate List

var rotateRight = function(head, k) {
    if(head === null || !head.next || k === 0) return head;

    let tail = head;
    let totalLength = 1;
    while(tail.next !== null) {
        tail = tail.next;
        totalLength++;
    }

    const numberOfRotations = k % totalLength;
    if(numberOfRotations === 0) {
        return head;
    }
    const numberOfNodesSkipped = totalLength - numberOfRotations;

    tail.next = head;

    temp = head;
    let skippedNodes = 1;
    while(skippedNodes < numberOfNodesSkipped) {
        temp = temp.next;
        skippedNodes++;
    }

    const newHead = temp.next;
    temp.next = null;
    head = newHead;
    
    return head;
};

console.log(rotateRight([1,2,3,4,5], 2)); // [4,5,1,2,3]

// Time Complexity: O(n) where n is the number of nodes in the list
// Space Complexity: O(1) since we are not using any additional data structures
