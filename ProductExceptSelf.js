function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);

    let leftProduct = 1

    for(let i=0; i<nums.length; i++) {
        result[i] = leftProduct
        leftProduct *= nums[i]
    }

    let rightProduct = 1
    for(let i = nums.length -1; i>=0; i--) {
        result[i] *= rightProduct
        rightProduct *= nums[i]
    }

    console.log("result", result)

}

nums = [1,2,3,4]

console.log(productExceptSelf(nums))