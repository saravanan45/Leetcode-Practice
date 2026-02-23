//416. Partition Equal Subset Sum


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = 0
    for(let i = 0; i<nums.length; i++) {
        total+= nums[i]
    }

    if(total % 2 === 1) return false

    const target = total/2

    let set = new Set()
    set.add(0)
    for(let j= nums.length -1; j>=0; j--) {
        const num = nums[j]
        let nextSet = new Set(set)
        for(const val of set.values()) {
            if(val + num === target) return true;
            if(val + num < target) {
                nextSet.add(val+num)
            }
        }
        set = nextSet
    }

    if(set.has(target)) return true

    return false
};

console.log(canPartition([1,5,11,5]))
// console.log(canPartition([1,2,3,5]))