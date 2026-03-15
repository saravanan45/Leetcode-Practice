// subarrays are contiguous elements in an array
//

const getAllSubArrays = (nums) => {
    const result = []
    for(let i =0; i<nums.length; i++) {
        const temp = [nums[i]]
        result.push([...temp])
        for(let j = i+1; j<nums.length; j++) {
            temp.push(nums[j])
            result.push([...temp])
        }
    }
    return result
}

console.log(getAllSubArrays([1, 2, 3, 4, 5]))

// time complexity: O(n^2)
// space complexity: O(n^2)

// optimized version

const getAllSubArraysOptimized = (nums) => {

}

console.log(getAllSubArraysOptimized([1, 2, 3, 4, 5]))