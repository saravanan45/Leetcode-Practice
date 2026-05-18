// 2784. Check if Array is Good
var isGood = function(nums) {
    let max = Math.max(...nums);

    if (nums.length !== max + 1) {
        return false;
    }

    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let i = 1; i < max; i++) {
        if (freq.get(i) !== 1) {
            return false;
        }
    }

    return freq.get(max) === 2;
};

console.log(isGood([1, 3, 2, 3, 1])); // true

// time complexity: O(n) where n is the length of the input array nums
// space complexity: O(n) in the worst case, if all elements in nums are unique, we will store them in the frequency map.


