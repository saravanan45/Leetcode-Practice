// 209. Minimum Size Subarray Sum


function test(arr, target) {
    let result = Infinity;
    let sum = 0;
    let start = 0;
    for(let i=0; i<arr.length; i++) {
        sum+= arr[i]
            while(sum >= target) {
                const windowSizeModified = i - start + 1;
                result = Math.min(result, windowSizeModified)
                sum -= arr[start]
                start++;          
            }
        }
    return result
}
target = 7, nums = [2,3,1,2,4,3]

console.log("test", test(nums, target))