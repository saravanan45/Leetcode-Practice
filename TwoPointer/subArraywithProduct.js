
// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/description/


// not a optimal approach

// var numSubarrayProductLessThanK = function(nums, k) {
//     const result = []
//     for(let i =0; i< nums.length; i++) {
//         let product = 1;
//         let tempArr = []
//         for(let j = i; j< nums.length; j++) {
//             product *= nums[j] 
//             if(product < k) {
//                 tempArr.push(nums[j])
//                 result.push([...tempArr])
//             } else {
//                 break;
//             }
//         }
//     }
//     return result
// };

// console.log(numSubarrayProductLessThanK([10,5,2,6], 100))

// time complexity: O(n^2)

// optimal approach



var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let i = 0;
    let result = 0
    let product = 1;
    for(let j=0; j<nums.length; j++) {
        product *= nums[j]

        while(product >= k) {
            product /= nums[i]
            i++;
        }

        result +=  j - i + 1 //number of subarrays
    }
    return result
}

console.log(numSubarrayProductLessThanK([10,5,2,6], 100))

// time complxity: O(n)