// 1647. Minimum Deletions to Make Character Frequencies Unique
var minDeletions = function(s) {
    if(s.length < 2) {
        return 0;
    }

    const charMap = new Map()

    for(let c of s) {
        charMap.set(c, (charMap.get(c) || 0) + 1);
    }

    const values = [...charMap.values()];
    const charSet = new Set(values)
    if(charSet.size === values.length) {
        return 0;
    }

    values.sort((a, b) => a - b);
    const valueSet = new Set();
    let count = 0;
    for(let val of values) {
        if(!valueSet.has(val)) {
            valueSet.add(val)
        } else {
            while(valueSet.has(val) && val > 0) {
                val--;
                count++;
            }
            if(val > 0) {
                valueSet.add(val);
            }
        }
    }
    return count;

}


minDeletions("abcabc")

// time complexity: O(n log n) where n is the number of unique characters in the input string s, due to the sorting step.
// space complexity: O(n) in the worst case, if all characters in s are unique, we will store their frequencies in the charMap and valueSet.
