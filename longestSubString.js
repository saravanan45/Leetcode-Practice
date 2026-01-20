// string s, find the length of the longest substring without repeating characters.

// 3. Longest Substring Without Repeating Characters

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const longest = (s) => {

   if(s.length < 2) return s.length
     let i = 0;
    let max = 0;
    let obj = {}
    for(let j = 0; j<s.length ; j++) {
        if(obj[s[j]] !== undefined && obj[s[j]] >= i) {
            i = obj[s[j]] + 1
        }
            obj[s[j]] = j
            // if(j-i + 1> max) {
            //     max = j - i + 1
            // }
            max = Math.max(j-i+1, max)
    }
    return max
    
}

longest("abcabcbb")
// longest("bbbbbb")
// longest("aab")



