// 206. Reverse Linked List

class Node{
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

function reverse(head) {
    let prev = null
    let current = head
    while(current !== null) {
        const next = current.next
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}

function reverseLinkedList(arr) {
    if(arr.length < 1) return arr;
    const list = new Node(arr[0])
    let current = list
    for(let i =1; i< arr.length; i++) {
        const newNode = new Node(arr[i]) 
        current.next = newNode
        current = newNode
    }

    return reverse(list)
}


console.log(JSON.stringify(reverseLinkedList([1,2,3,4,5])))