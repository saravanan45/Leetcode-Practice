// 27. https://leetcode.com/problems/remove-element/description/


function test(arr, target) {
    let i = 0, j = 0
    while(j<arr.length) {
        if(arr[j] !== target) {
            arr[i] = arr[j]
            i++
        }
        j++;
    }
    // arr.splice(i)
    // return arr
    return i
}

// nums = [3,2,2,3]
// targetElement = 3

nums = [0,1,2,2,3,0,4,2]
targetElement = 2

console.log(test(nums, targetElement))