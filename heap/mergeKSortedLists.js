class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(idx) {
    return 2 * idx + 1;
  }

  getRightChild(idx) {
    return 2 * idx + 2;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  push(idx) {
    this.heap.push(idx);
    this.heapifyUp(this.heap.length - 1);
  }

  removeMin() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return root;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(idx) {
    while (idx > 0 && this.heap[idx].val < this.heap[this.getParentIdx(idx)].val) {
      this.swap(idx, this.getParentIdx(idx));
      idx = this.getParentIdx(idx);
    }
  }

  getHeap() {
    return this.heap;
  }

  heapifyDown(idx) {
    const leftChildIndex = this.getLeftChild(idx);
    const rightChildIndex = this.getRightChild(idx);

    let smallest = idx;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].val < this.heap[smallest].val
    ) {
      smallest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].val < this.heap[smallest].val
    ) {
      smallest = rightChildIndex;
    }

    if (idx !== smallest) {
      this.swap(idx, smallest);
      this.heapifyDown(smallest);
    }
  }
}

// this will cost us O(n log n)

// function mergeKLists(lists) {
//     let heap = new Heap();
//     for(let i = 0; i< lists.length; i++) {
//         for(let j =0; j< lists[i].length; j++) {
//             heap.push(lists[i][j]);
//         }
//     }

//     const result = [];
//     while(heap.getHeap().length > 0) {
//         result.push(heap.removeMin())
//     }

//     return result;
// }

// for better approach O(n log k)

function mergeKLists(lists) {
  let heap = new Heap();
  for (let i = 0; i < lists.length; i++) {
    heap.push({
      val: lists[i][0],
      listsIdx: i,
      elementIdx: 0,
    });
  }

  const result = [];
  while (heap.getHeap().length > 0) {
    const { val, listsIdx, elementIdx } = heap.removeMin();
    result.push(val);
    if ((elementIdx + 1) < lists[listsIdx].length) {
      heap.push({
        val: lists[listsIdx][elementIdx + 1],
        listsIdx,
        elementIdx: elementIdx + 1,
      });
    }
  }
  return result;
}

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
