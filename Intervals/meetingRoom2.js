// Meeting Rooms II
// Problem Statement

// Given an array of meeting time intervals where
// intervals[i] = [startᵢ, endᵢ],
// return the minimum number of conference rooms required to hold all meetings.

function MinHeap() {
    this.heap = []

    this.getParentIndex = (index) => {
        return Math.floor((index - 1)/2)
    }

    this.getLeftIndex = (index) => {
        return 2 * index + 1;
    }

    this.getRightIndex = (index) => {
        return 2 * index + 2;
    }

    this.push = (value) => {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    this.pop = () => {
        if(this.heap.length === 0) return undefined;

        const node = this.heap[0];
        const root = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = root;
            this.heapifyDown(0);
        }

        return node;
    }

    this.peek = () => {
        return this.heap[0]
    }

    this.swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    this.heapifyUp = (index) => {
        while(index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index))   
            index = this.getParentIndex(index)   
        }
    }

    this.heapifyDown = (index) => {
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)

        let low = index 

        if(left < this.heap.length && this.heap[left] < this.heap[low]) {
            low = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[low]) {
            low = right
        }

        if(low !== index) {
            this.swap(low, index)
            this.heapifyDown(low)
        }
    }

    this.getSize = () => {
        return this.heap.length
    }

}

function meetingRooms(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const heap = new MinHeap()
    heap.push(intervals[0][1]);

    for(let i= 1; i< intervals.length; i++) {
        if(intervals[i][0] >= heap.peek()) {
            heap.pop()
        }
        heap.push(intervals[i][1]);
    }

    return heap.getSize()
    
}

intervals = [[0,30],[5,10],[15,20]]
// intervals = [[1,10],[2,7],[3,6],[4,5]]
console.log(meetingRooms(intervals))