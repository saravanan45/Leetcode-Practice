class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    pop() {
        if(this.heap.length === 0) return undefined;
        if(this.heap.length === 1) return this.heap.pop();
        const node = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return node;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapifyUp() {
        let nodePosition = this.heap.length - 1
        let parentIndex = this.getParentIndex(nodePosition)
        while(nodePosition > 0 && this.heap[nodePosition][0] < this.heap[parentIndex][0]) {
            this.swap(nodePosition, parentIndex)
            nodePosition = parentIndex
            parentIndex = this.getParentIndex(nodePosition)
        }
    }

    heapifyDown(idx) {
        let small = idx
        let leftChildIndex = this.getLeftChildIndex(idx)
        let rightChildIndex = this.getRightChildIndex(idx)

        if(leftChildIndex < this.heap.length && this.heap[small][0] > this.heap[leftChildIndex][0]) {
            small = leftChildIndex
        }
         if(rightChildIndex < this.heap.length && this.heap[small][0] > this.heap[rightChildIndex][0]) {
            small = rightChildIndex
        }

        if(small !== idx) {
            this.swap(idx, small)
            this.heapifyDown(small)
        }
    }

    getHeap() {
        return this.heap;
    }

    getSize() {
        return this.heap.length;
    }
}

function dijikstra(adjList, src) {
    
    const shortestDistance = Array(adjList.length).fill(Infinity);
    const heap = new MinHeap();
    shortestDistance[src] = 0
    heap.push([0, src]);

    while(heap.getSize() > 0) {
        const [weight, node] = heap.pop()

        if(weight > shortestDistance[node]) continue;

        for(let [v, w] of adjList[node]) {
            if(shortestDistance[node] + w < shortestDistance[v]) {
                shortestDistance[v] = shortestDistance[node] + w
                heap.push([shortestDistance[v], v])
            }
        }
        
    }

    return shortestDistance
}

src = 0, adj = [[[1, 4], [2, 8]], [[0, 4], [4, 6], [2,3]], 
                                            [[0, 8], [3, 2], [1,3]], 
                                            [[2, 2], [4, 10]], 
                                            [[1, 6], [3, 10]]]


console.log(dijikstra(adj, src))