// 435. Non-overlapping Intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi], 
// return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

const nonOverlappingIntervals = (intervals) => {

    intervals.sort((a, b) => a[1] - b[1])

    let count = 1
    let lastEndTime = intervals[0][1]

    for(let i = 1; i< intervals.length; i++) {
        if(intervals[i][0] >= lastEndTime) {
            count++;
            lastEndTime = intervals[i][1];
        }
    }
    return intervals.length - count
}

const intervals = [[1,2],[2,3],[3,4],[1,3]]
console.log("output", nonOverlappingIntervals(intervals))
