class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const getCycleLength = (node) => {
    let current = node
    let length = 0
    while(true) {
        current = current.next
        length++;
        if(current === node) break
    }
    return length
}

const hasCycle = (node) => {
    if(!node) return 0

    let fast = node
    let slow = node
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            const length = getCycleLength(slow)
            return length
        }
    }
    return 0
}


const Head = new Node(5)
Head.next = new Node(4)
Head.next.next = new Node(8)
Head.next.next.next = new Node(9)
Head.next.next.next.next = new Node(1)
Head.next.next.next.next.next = new Node(2)


console.log(Head);
console.log("is cycle present", hasCycle(Head))
Head.next.next.next.next.next.next = Head.next
console.log("is cycle present", hasCycle(Head))
