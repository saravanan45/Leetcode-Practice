// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function lengthOfLongestSubstring(str, k) {
    let result = 0
    const obj = {}
    let maxRepeatCount = 0
    let start = 0
    for(let i =0; i< str.length; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 0
        }
        obj[str[i]]++;

        maxRepeatCount = Math.max(maxRepeatCount, obj[str[i]])

        if(i - start + 1 - maxRepeatCount > k) {
            obj[str[start]]--;
            start++;
        }

        result = Math.max(result, i-start+1)
    }
    return result;
}

console.log(lengthOfLongestSubstring("aabccbb", 2))