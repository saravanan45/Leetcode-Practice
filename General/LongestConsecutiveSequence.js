// 128. Longest Consecutive Sequence


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    const set = new Set(nums)

    let maxCount = 0
    for(const num of set) {
        if(!set.has(num-1)) {
            count = 1
            let currentValue = num
            while(set.has(currentValue + 1)) {
                count++;
                currentValue = currentValue + 1
            }
            maxCount = Math.max(count, maxCount)
        }
    }
    return maxCount
};

longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])