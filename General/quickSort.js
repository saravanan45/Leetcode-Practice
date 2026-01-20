// not a optimal solution becuase of space complexity O(n)

// function quickSort(nums) {
//     // base case
//     if(nums.length <=1) return nums;

//     let pivot = nums[nums.length - 1]

//     let arr1 = [], arr2 = []
//     // check till before pivot
//     for(let i =0; i< nums.length - 1; i++) {
//         if(nums[i] < pivot) {
//             arr1.push(nums[i])
//         } else {
//             arr2.push(nums[i])
//         }
//     }

//       return [...quickSort(arr1), pivot, ...quickSort(arr2)]
// }

// optimal way

function swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
function partition(arr, start, end) {
    let mark = start;

    let pivot = arr[end]
    for(let i = start; i<end; i++) {
        if(arr[i] < pivot) {
            swap(arr, mark, i)
            mark++;
        }
    }
    swap(arr, mark, end);
    return mark
}

function quickSort(nums, i , j) {
    if(i >= j) return nums
    let pivot = partition(nums, i, j)

    quickSort(nums, i, pivot - 1)
    quickSort(nums, pivot + 1, j)

    return nums
}


console.log(quickSort([3, 1, 5, 12, 2, 11], 0, 5))