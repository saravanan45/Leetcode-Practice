
// 1685. Sum of Absolute Differences in a Sorted Array

var getSumAbsoluteDifferences = function(nums) {
    let ps = 0
    const result = []
    let totalSum = 0
    const n = nums.length
    for(let k=0; k<nums.length; k++) {
        totalSum += nums[k]
    }
    for(let i = 0; i<nums.length; i++) {
        const left = (i * nums[i]) - ps;
        const right = (totalSum - ps - nums[i]) - ((n - i -1) * nums[i])
        result.push(left + right)
        ps += nums[i]
    }  
    return result 
};


console.log(getSumAbsoluteDifferences([1,4,6,8,10]))

// Time complexity - O(n)
// space complexity - O(n)