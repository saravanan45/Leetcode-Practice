function test(nums) {

    let n1xn2 = 0
    // xor of all numbers
    for(let i =0; i< nums.length; i++) {
        n1xn2 ^= nums[i]
    }

    // n1xn2 will be having xor of 4 and 6
    // get mask value by bitwise AND
    const mask = n1xn2 & -n1xn2

    let num1 = 0, num2=0
    for(let i = 0; i< nums.length; i++) {
        if((nums[i] & mask) === 0) {
            num1 ^= nums[i]
        } else {
            num2 ^= nums[i]
        }
    }
    return [num1, num2]

    
}


console.log(test([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]))