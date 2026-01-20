// [3,2,1,5,6,4]

function quickSelect(start, end, arr) {
    const pivot = arr[end]

    let i = start
    for(let j=start; j< end; j++) {
        if(arr[j] > pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
        }
    }
    
    [arr[i], arr[end]] = [arr[end], arr[i]]
    return i;
 
}

function kthLargest(start, end, arr, k) {
    if(start === end) return arr[start]
    const idx = quickSelect(start, end, arr, k)

    if(idx === k -1) {
        return arr[idx]
    }
    else if(idx > (k -1)) {
        return kthLargest(start, idx -1, arr, k)
    } else {
        return kthLargest(idx + 1, end, arr, k)
    }


}
// const arr = [3,2,1,5,6,4]
const arr = [10, 80, 30, 90, 40, 50, 70]
console.log("result", kthLargest(0, arr.length -1, arr, 4))