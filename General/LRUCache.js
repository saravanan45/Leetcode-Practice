class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(limit) {
        this.capacity = limit;
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cache = new Map();
    }

    add(node) {
        const next = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = next;
        next.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    put(key, value) {
        const node = new Node(key, value)
        if(this.cache.has(key)) {
            const existingNode = this.cache.get(key)
            existingNode.value = value
            this.remove(existingNode)
            this.add(existingNode)
            return
        }
        
        this.cache.set(key, node)
        this.add(node);

        if(this.cache.size > this.capacity) {
            const removableNode = this.tail.prev;
            this.remove(removableNode);
            this.cache.delete(removableNode.key)
        }
    }

    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }
            const node = this.cache.get(key)
            this.remove(node);
            this.add(node);
            return node.value
    }
    
}


let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); 
lru.put(3, 3); 
console.log(lru.get(2)); 
lru.put(4, 4); 
console.log(lru.get(1)); 
console.log(lru.get(3)); 
console.log(lru.get(4)); 