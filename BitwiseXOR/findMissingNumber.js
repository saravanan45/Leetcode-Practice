// Given an array of n-1 integers in the range from 1 to n, find the one number that is missing from the array.


function findMissingNumber(arr) {

    let res = 0
    let max = 0
    for(let i = 0; i< arr.length; i++) {
        res = res ^ arr[i]
        max = Math.max(max, arr[i])
    }

    let res1 = 0
    for(let i=1; i<=max; i++) {
        res1 = res1 ^ i
    }

    return res ^ res1
}

console.log(findMissingNumber([1,5,2,6,4]))