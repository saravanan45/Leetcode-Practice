class MinHeap {
    constructor() {
        this.heap = []
    }

     getParentIdx(idx) {
        return Math.floor((idx - 1)/2)
    }

    getLeftChild(idx) {
        return ( 2 * idx ) + 1
    }

    getRightChild(idx) {
        return ( 2 * idx ) + 2
    }

    push(val) {
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapifyUp(idx) {
        while(idx > 0 && this.heap[idx][1] < this.heap[this.getParentIdx(idx)][1]) {
            this.swap(idx, this.getParentIdx(idx))
            idx = this.getParentIdx(idx)
        }
    }

    removeMin() {
       if(this.heap.length === 0) return undefined;
       if(this.heap.length === 1) return this.heap.pop();
       const root = this.heap[0]
       this.heap[0] = this.heap.pop()
       this.heapifyDown(0)
       return root
    }

    getHeap() {
        return this.heap
    }

    heapifyDown(idx) {
        const left = this.getLeftChild(idx)
        const right = this.getRightChild(idx)
        let smallest = idx

        if(left < this.heap.length && this.heap[left][1] < this.heap[idx][1]) {
            smallest = left
        }
        if(right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
            smallest = right
        }

        if(smallest !== idx) {
            this.swap(idx, smallest);
            this.heapifyDown(smallest)
        }
    }
}


function dijikstra(src, v, edges) {
    const adjList = {}
    for(let i= 0; i<edges.length; i++) {
        const [s, d, weight] = edges[i]
        adjList[s] ? adjList[s].push([d,weight]) : adjList[s] = [[d, weight]]
        adjList[d] ? adjList[d].push([s,weight]) : adjList[d] =[[s, weight]]
    }
    
    const resultArr = new Array(v).fill(Infinity)

    
    const dijikstraHeap = new MinHeap()
    dijikstraHeap.push([src, 0])
    resultArr[src] = 0

    while(dijikstraHeap.getHeap().length) {
        const [u, w] = dijikstraHeap.removeMin()
        // skip stale elements
        if (w > resultArr[u]) continue;

        for(const [v, weight] of adjList[u]) {
            if(resultArr[v] > resultArr[u] + weight) {
                resultArr[v] = resultArr[u] + weight
                dijikstraHeap.push([v, resultArr[v]])
            }
        }
    }

    return resultArr
}

src = 0, V = 5, edges = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]] 
console.log(dijikstra(src, V, edges))
