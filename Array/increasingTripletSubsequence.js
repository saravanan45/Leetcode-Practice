// 334. Increasing Triplet Subsequence

var increasingTriplet = function(nums) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let num of nums) {
        if(num <= smallest) {
            smallest = num;
        } else if(num <= secondSmallest) {
            secondSmallest = num;
        } else {
            return true
        }
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false

// time complexity: O(n) where n is the length of the input array nums
// space complexity: O(1) since we are using only a constant amount of extra space to store the smallest and second smallest values.

