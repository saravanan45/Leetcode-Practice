// 92. Reverse Linked List II

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function createLinkedList(arr) {
    const list = new Node(arr[0])
    let current = list
    for(let i = 1; i< arr.length; i++) {
        const newNode = new Node(arr[i])
        current.next = newNode
        current = newNode
    }

    return list
}

function reverseFunction(head, end) {
    let prev = null;
    let current = head;
    let tail = current

    while(current !== end) {
        const next = current.next;
        current.next = prev;
        prev = current
        current = next;  
    }
    
    return { head: prev, tail}
}

function reverse(head, left, right) {
    if(left === right) {
        return head;
    }
    let current = head;
    let index = 1;
    let prevLeft = null;
    let rightNext = null;
    let leftNode = null;
    while(current !== null) {
        if(index === left - 1) {
            prevLeft = current
        }
        if(index === left) {
            leftNode = current
        }
        if(index === right+1) {
            rightNext = current
        }
        index++;
        current = current.next    
    }

    const {head: startNode, tail: endNode} = reverseFunction(leftNode, rightNext)
    if(prevLeft) {
        prevLeft.next = startNode;
    } 
    if(rightNext){
        endNode.next = rightNext;
    }
    if(prevLeft === null) {
        head = startNode;
    }

    return head
}

function reverseLinkedList(arr, left, right) {
    const list = createLinkedList(arr)
    return reverse(list, left, right)
}

head = [1,2,3,4,5], left = 1, right = 3
console.log(reverseLinkedList(head, left, right))


//optimized way

// function reverse(head, left, right) {
//     if (!head || left === right) return head;

//     const dummy = new Node(0);
//     dummy.next = head;

//     // Step 1: move prev to node before `left`
//     let prev = dummy;
//     for (let i = 1; i < left; i++) {
//         prev = prev.next;
//     }

//     // Step 2: reverse sublist
//     let curr = prev.next;      // left node
//     let next = null;

//     for (let i = 0; i < right - left; i++) {
//         next = curr.next;
//         curr.next = next.next;
//         next.next = prev.next;
//         prev.next = next;
//     }

//     return dummy.next;
// }
