// 31. Next Permutation

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(i, j, nums) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(i, j, nums) {
  while (i < j) {
    swap(i, j, nums);
    i++;
    j--;
  }
}
var nextPermutation = function (nums) {
  let pivot = null;
  let nextGreaterElementPos = null;
  for (let j = nums.length - 2; j >= 0; j--) {
    if (nums[j] < nums[j + 1]) {
      pivot = j;
      break;
    }
  }

  if (pivot !== null) {
    let i = nums.length - 1;
    while (i > pivot) {
      if (nums[i] > nums[pivot]) {
        nextGreaterElementPos = i;
        break;
      }
      i--;
    }
    swap(pivot, nextGreaterElementPos, nums);
    reverse(pivot + 1, nums.length - 1, nums);
  }

  if (pivot === null) {
    reverse(0, nums.length - 1, nums);
  }

  return nums;
};

nextPermutation([1, 3, 2]);
