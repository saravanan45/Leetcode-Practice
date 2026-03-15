
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
// output [ 24, 15, 13, 15, 21 ]
// output explanation - for 1 - (4-1) + (6-1) + (8-1) + (10-1) = 24
// for 4 - (4-1) + (6-4) + (8-4) + (10-4) = 15
// for 6 - (6-1) + (6-4) + (8-6) + (10-6) = 13
// for 8 - (8-1) + (8-4) + (8-6) + (10-8) = 15
// for 10 - (10-1) + (10-4) + (10-6) + (10-8) = 21


// Time complexity - O(n)
// space complexity - O(n)