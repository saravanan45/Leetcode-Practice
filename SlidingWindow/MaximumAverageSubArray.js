// 643. Maximum Average Subarray I

function test(arr, k) {

    let  result = 0;
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        
        sum += arr[i]

        if(i >= k-1 ) {
            result = Math.max(result, sum/k)
            sum -= arr[i - (k-1)]
        }
    }
    return result
}


nums = [1,12,-5,-6,50,3], k = 4

console.log(test(nums, k))