// 560. Subarray Sum Equals K

// O(n square) not optimized way
// var subarraySum = function(nums, k) {

//     let count = 0

//     for(let i =0; i<nums.length; i++) {
//         let ps= 0
//         for(let j = i; j<nums.length; j++) {
//            ps += nums[j];
//             if(ps === k) {
//                 count++;
//             }
//         }
//     }
//     return count
// };


// optimized way
function subarraySum(nums, k) {
    let ps = 0;
    const map = new Map()
    map.set(0, 1);
    let result = 0;

    for(let i=0; i<nums.length; i++) {
        ps += nums[i]

        if(map.has(ps - k)) {
            result += map.get(ps-k)
        }

        map.set(ps, (map.get(ps) || 0) + 1)
    }

    return result
}

nums = [1,2,3,-3,1,1,1,4,2,-3], k = 3
console.log(subarraySum(nums, k))



