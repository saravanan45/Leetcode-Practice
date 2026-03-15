/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length < 2) {
        return nums
    }
    let pointer1 = 0;
    for(let pointer2=0; pointer2<nums.length; pointer2++) {
        if(nums[pointer1] === 0 && nums[pointer2] !== 0) {
            const temp = nums[pointer2]
            nums[pointer2] = nums[pointer1]
            nums[pointer1] = temp;
            pointer1++;
            
        }
        else if(nums[pointer1] !== 0 && nums[pointer2] !== 0) {
            pointer1++;
        }
            
        }     
    return nums;
};

console.log("output",moveZeroes([0,1,0,3,12]))
// moveZeros([1,0,1])

// function moveZeroes(arr) {
//     let p1 = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[i], arr[p1]] = [arr[p1], arr[i]];
//             p1++;
//         }
//     }

//     return arr;
// }

// console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]