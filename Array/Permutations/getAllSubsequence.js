// all possible combinations
// but order also matters - subsequences are not the same as subsets

const getAllSubsequences = (nums) => {
    const result = [[]]
    for(let i = 0; i<nums.length; i++) {
        const temp = [];
        for(const val of result) {
            temp.push([...val, nums[i]])
        }
        console.log("temp", temp)
        result.push(...temp)
    }
    return result;
}

console.log(getAllSubsequences([1, 2, 3, 4, 5]))

// time complexity: O(n*2^n) - we are generating 2^n subsequences and each subsequence takes O(n) time to create
// space complexity: O(n*2^n) - we are storing 2^n subsequences and each subsequence takes O(n) space to store