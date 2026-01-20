// 443. String Compression

/**
 * this output uses time complexity of O(n)
 * space complexity of O(n)
 */

// var compress = function(chars) {
//     const stack = []
//     for(let i = 0; i< chars.length; i++) {
//         if(stack.length && stack[stack.length - 1][0] === chars[i]) {
//             stack[stack.length-1][1]++
//         } else {
//             stack.push([chars[i], 1])
//         }
//     }
//     let resultStr = []

//     stack.forEach(([w, c]) => {
//         if(c ===1 ) {
//             resultStr.push(w)
//         } else {
//             resultStr.push(w, c.toString())
//         }
//     })
//     console.log("res", resultStr.join(''))
//     return resultStr
    
// };


// optimal way

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let k = 0
    let char = chars[0]
    let count = 1
    for(let i = 1; i<=chars.length; i++) {
        if(i < chars.length && chars[i] === char) {
           count++;
        } else {
            chars[k] = char
            if(count > 1) {
                const countStr = count.toString();
                for(const ch of countStr) {
                    chars[++k] = ch
                }
            }
            char = chars[i]
            count = 1
            k++
        }
    }
    return k
};

chars = ["a","a","b","b","c","c","c"]
console.log("compressed output", compress(chars))

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".