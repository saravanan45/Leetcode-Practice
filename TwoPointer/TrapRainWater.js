// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxLeft = 0;
  let maxRight = 0;

  let left = 0;
  let right = height.length - 1;

  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < maxLeft) {
        water += maxLeft - height[left];
      } else {
        maxLeft = height[left];
      }
      left++;
    } else {
      if (height[right] < maxRight) {
        water += maxRight - height[right];
      } else {
        maxRight = height[right];
      }
      right--;
    }
  }
  return water;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
