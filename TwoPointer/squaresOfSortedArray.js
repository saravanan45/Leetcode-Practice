// 977. Squares of a Sorted Array


// not an optimal approach

// var sortedSquares = function(nums) {
//     const result = []
//     for(let i=0; i<nums.length; i++) {
//         result.push(nums[i] * nums[i])
//     }
//     const arr = result.sort((a, b) => a - b)
//     return arr;
// };

// nums = [-4,-1,0,3,10]

// console.log(sortedSquares(nums))

// O(n log n)

// optimal approach

var sortedSquares = function(nums) {
    let i = 0
    let j = nums.length - 1
    let k = nums.length - 1
    const result = new Array(nums.length)

    while(i<=j) {
        const iSquare = nums[i] * nums[i]
        const jSquare = nums[j] * nums[j]
        if(iSquare > jSquare) {
            result[k] = iSquare
            i++
        } else {
            result[k] = jSquare
            j--
        }
        k--
    }
    return result
}

nums = [-4,-1,0,3,10]

console.log(sortedSquares(nums))
