// https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews/blob/main/%E2%9C%85%20%20Pattern%2002%3A%20Two%20Pointers.md#-minimum-window-sort-medium

function minimumWindowSort(arr) {
  let left = 0;
  let right = arr.length - 1;

  // 1. Find first out-of-order from left
  let i = 0;
  while (i < arr.length - 1 && arr[i] <= arr[i + 1]) {
    i++;
  }

  // Already sorted
  if (i === arr.length - 1) return 0;

  left = i;

  // 2. Find first out-of-order from right
  let j = arr.length - 1;
  while (j > 0 && arr[j] >= arr[j - 1]) {
    j--;
  }

  right = j;

  // 3. Find min & max in window
  let min = Infinity;
  let max = -Infinity;
  for (let k = left; k <= right; k++) {
    min = Math.min(min, arr[k]);
    max = Math.max(max, arr[k]);
  }

  // 4. Extend left
  while (left > 0 && arr[left - 1] > min) {
    left--;
  }

  // 5. Extend right
  while (right < arr.length - 1 && arr[right + 1] < max) {
    right++;
  }

  return {
    window: arr.slice(left, right + 1),
    length: right - left + 1
  };
}





nums = [1, 3, 2, 0, -1, 7, 10]

console.log(minimumWindowSort(nums))



