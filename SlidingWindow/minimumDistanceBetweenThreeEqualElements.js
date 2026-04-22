/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map()
    for(let i = 0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], [...map.get(nums[i]), i])
        } else {
            map.set(nums[i], [i])
        }
    }

    let result = 1e9;
    for(const value of map.values()) {
        if(value.length < 3) {
            continue;
        }
        for(i = 0; i<= value.length - 3; i++) {
            const start = value[i]
            const middle = value[i+1]
            const last = value[i+2]
            const val = Math.abs(start - middle) + Math.abs(middle - last) + Math.abs(last - start) 
            result = Math.min(result, val);
        }
    }

    return result === 1e9 ? -1 : result
};

minimumDistance([1,2,1,1,3])

// time complexity: O(n)
// space complexity: O(n)

// output: 6
// explanation: three equal elements are 1, and the indices are 0, 2 and 3.
//  So the distance is |0 - 2| + |2 - 3| + |3 - 0| = 6. 
// It can be shown that there is no way to get a smaller distance than 6.