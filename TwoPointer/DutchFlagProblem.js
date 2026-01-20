// 75. Sort Colors

function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
} 
function test(arr) {
    let low = 0;
    let high = arr.length -1;
    let i =0
    while(i <= high) {
        if(arr[i] === 0) {
            swap(i, low, arr)
            low++;
            i++
        }
        else if(arr[i] === 1) {
            i++
        } else {
            swap(i, high, arr)
            high--;
        }
    }
    return arr
}

// nums = [2,0,2,1,1,0]
nums = [1,2,0,2,1,0]
console.log(test(nums))