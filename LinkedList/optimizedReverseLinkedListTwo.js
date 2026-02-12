class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function createLinkedList(arr) {
    const list = new Node(arr[0])
    let current = list;
    for(let i = 1; i<arr.length; i++) {
        const newNode = new Node(arr[i])
        current.next = newNode 
        current = newNode;
    }
    return list;
}


function reverseLinkedList(arr, left, right) {

    if(left === right) return arr;
    
    const head = createLinkedList(arr);
   
    const dummyNode = new Node(0);
    dummyNode.next = head;
    let prev = dummyNode
    for(let i = 1; i<left; i++) {
        prev = prev.next;
    }

    let current = prev.next

    for(let i = 0; i< right-left; i++) {
        let next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummyNode.next
}

head = [1,2,3,4,5], left = 1, right = 3
console.log(reverseLinkedList(head, left, right))