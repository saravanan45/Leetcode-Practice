// 154. Find Minimum in Rotated Sorted Array II

var findMin = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[right]) {
            left = mid + 1;
        } else if(arr[mid] < arr[right]) {
            right = mid;
        } else if (arr[mid] === arr[right]) {
            right = right - 1;
        } 
    }
    return arr[left];
};


Input: nums = [2,2,2,0,1]
Output: 0

// time complexity: O(log n) in the average and best case, but in the worst case when all elements are the same, it becomes O(n) because we have to check each element.
// space complexity: O(1) since we are using only a constant amount of extra space for the left and right pointers.
