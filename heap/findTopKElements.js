class Heap {
    constructor() {
        this.heap = [];
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftIndex(idx) {
        return 2 * idx + 1;
    }

    getRightIndex(idx) {
        return 2 * idx + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    size() {
        return this.heap.length;
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return root;
    }

    heapifyUp(idx) {
        let parentIndex = this.getParent(idx);

        while (
            idx > 0 &&
            this.heap[idx][1] < this.heap[parentIndex][1]
        ) {
            this.swap(idx, parentIndex);
            idx = parentIndex;
            parentIndex = this.getParent(idx);
        }
    }

    heapifyDown(idx) {
        let smallest = idx;

        const leftIdx = this.getLeftIndex(idx);
        const rightIdx = this.getRightIndex(idx);

        if (
            leftIdx < this.heap.length &&
            this.heap[leftIdx][1] < this.heap[smallest][1]
        ) {
            smallest = leftIdx;
        }

        if (
            rightIdx < this.heap.length &&
            this.heap[rightIdx][1] < this.heap[smallest][1]
        ) {
            smallest = rightIdx;
        }

        if (smallest !== idx) {
            this.swap(idx, smallest);
            this.heapifyDown(smallest);
        }
    }
}

function test(arr, k) {
    const heap = new Heap();
    const map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map.entries()) {
        heap.push([key, value]);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    const result = [];

    while (heap.size() > 0) {
        result.push(heap.pop()[0]);
    }

    return result;
}

console.log(test([3,1,4,4,5,2,6,1],2));