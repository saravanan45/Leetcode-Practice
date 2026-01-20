
function mergeIntervals(arr) {
    arr.sort((a, b) => a[0] - b[0])
    const result = []
    let i = 0

    while(i < arr.length) {
        let start = arr[i][0]
        let end = arr[i][1]
        while(end >= arr[i+1]?.[0]) {
            end =  Math.max(end, arr[i+1][1])
            i++
        }
        result.push([start, end])
        i++;
    }

    return result;
}

// intervals = [[1,3],[2,6],[8,10],[15,18]]
intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log(mergeIntervals(intervals))