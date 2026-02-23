// Ref: https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const calculateSum = (startIndex, endIndex) => {
        if(startIndex === endIndex) {
            return 0
        }
        let sum = 0
        for(let i = startIndex; i< endIndex; i++) {
            sum += nums[i]
        }
        return sum
    }

    for(let i=0; i<nums.length;i++) {
        const leftSum = calculateSum(0, i)
        const rightSum = calculateSum(i+1, nums.length)
        if(leftSum === rightSum) {
            return i
        }
    }
    return -1
};

// optimized way

var pivotIndex = function(nums) {
    let totalSum = 0
    for(let i =0; i<nums.length; i++) {
        totalSum += nums[i]
    }

    let leftSum = 0, rightSum = 0
    for(let i=0; i<nums.length; i++) {
        rightSum = totalSum - nums[i] - leftSum
        if(leftSum === rightSum) {
            return i
        }
        leftSum += nums[i]
    }

    return -1
}

pivotIndex([1,7,3,6,5,6])