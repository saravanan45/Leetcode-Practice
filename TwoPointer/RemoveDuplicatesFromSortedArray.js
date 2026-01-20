//  26. Remove Duplicates from Sorted Array


// var removeDuplicates = function(nums) {
//     let i = 0
//     let j = 1
//     const result = [nums[0]]
//     while(i < nums.length && j < nums.length) {
//         if(nums[i] === nums[j]) {
//             j++;

//         } else {
//             result.push(nums[j])
//             i = j
//             j++;
//         }
//     }

//     return result;
// };

var removeDuplicates = function(nums) {
    if(!nums.length) return []

    let i = 0
    for(let j = 1; j<nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    nums.splice(i+1)
    return nums
}


    
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// console.log(removeDuplicates([1,1,2]))