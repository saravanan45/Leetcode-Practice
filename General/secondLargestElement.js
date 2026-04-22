function test(nums) {
    let max = nums[0]
    let secondMax = -Infinity
    for(let num of nums) {

        if(num > max) {
            secondMax = max
            max = num
        }
        else if(num < max && num > secondMax) {
            secondMax = num
        }

    }
    return secondMax === -Infinity ? -1 : secondMax
}

// const nums = [12, 45, 7, 89, 23, 56, 90]
const nums = [5, 5, 5, 5, 5, 5, 5]
// const nums = [-10, -20, -3, -50, -7, -1, -30]
console.log(test(nums))