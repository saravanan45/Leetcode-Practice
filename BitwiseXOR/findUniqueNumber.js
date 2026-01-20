// https://leetcode.com/problems/single-number/description/

function test(arr) {
    let val = 0;
    for(let i = 0; i< arr.length; i++) {
        val = val ^ arr[i]
    }

    return val
}

console.log(test([2,2,1]))