class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1)/2)
    }

    getLeftIndex(idx) {
        return (2 * idx + 1)
    }

    getRightIndex(idx) {
        return (2 * idx + 2)
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    swap(i,j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapifyUp(idx) {
        if(idx === 0) return
        const parentIdx = this.getParentIndex(idx)
        if(this.heap[idx] > this.heap[parentIdx]) {
            this.swap(idx, parentIdx)
            this.heapifyUp(parentIdx)
        }
    }

    removeMax() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0]
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0)
        return max
    }

    getHeap() {
        return this.heap;
    }

    heapifyDown(idx) {
        let largest = idx
        const leftIdx = this.getLeftIndex(idx)
        const rightIdx = this.getRightIndex(idx)
        if(leftIdx < this.heap.length && this.heap[idx] < this.heap[leftIdx]) {
            largest = leftIdx
        }
        if(rightIdx < this.heap.length && this.heap[largest] < this.heap[rightIdx] ) {
            largest = rightIdx
        }

        if(idx !== largest) {
            this.swap(idx, largest)
            this.heapifyDown(largest)
        }    
    }
    
}

const heap = new MaxHeap()
heap.push(8)
heap.push(3)
heap.push(1)
heap.push(5)
heap.push(9)
heap.push(6)
heap.push(7)
console.log("max heap", heap.getHeap())
console.log("removed max", heap.removeMax())
console.log("reorganized max heap", heap.getHeap())

