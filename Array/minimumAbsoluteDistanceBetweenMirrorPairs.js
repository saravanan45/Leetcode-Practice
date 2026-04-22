// 2516. Minimum Absolute Distance Between Mirror Pairs
var minMirrorPairDistance = function(nums) {
    function reverse(val) {
        let reversedVal = 0;
        while(val > 0) {
            reversedVal = (reversedVal * 10) + (val % 10);
            val = Math.floor(val / 10);
        }
        return reversedVal
    }

    const map = new Map();
    let min = nums.length;
    for(let i = 0; i< nums.length; i++) {
        const num = nums[i]
        if(map.has(num)) {
            min = Math.min(min, i - map.get(num))
        } 
        const reversedNum = reverse(num)
        map.set(reversedNum, i)
    }   
    
    return min === nums.length ? -1 : min
};

const nums = [1,2,3,11,12]

minMirrorPairDistance(nums)

// time complexity: O(n) where n is the length of the nums array
// space complexity: O(n) since we are using a map to store the reversed numbers and their indices