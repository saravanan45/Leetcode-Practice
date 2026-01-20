 // (i - 1)/ 2 => Parent node
 // (2 * i) +1 => Left child
 // (2 * i) + 2 => right child

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
        while(idx > 0 && this.heap[idx] < this.heap[this.getParentIdx(idx)]) {
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

        if(left < this.heap.length && this.heap[left] < this.heap[idx]) {
            smallest = left
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if(smallest !== idx) {
            this.swap(idx, smallest);
            this.heapifyDown(smallest)
        }


    }
}

const h = new MinHeap();
h.push(5);
h.push(3);
h.push(8);
h.push(1);
console.log("heap", h.getHeap())

console.log("removed", h.removeMin())
console.log("heap", h.getHeap())
