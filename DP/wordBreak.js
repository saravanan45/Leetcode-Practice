// 139. Word Break


var wordBreak = function(s, wordDict) {
    const dp = Array(s.length+1).fill(false)
    dp[s.length] = true;
    for(let i = s.length -1; i>=0; i--) {
        for(const word of wordDict) {
            const str1 = s.slice(i, i+word.length)
            if(str1 === word) {
                dp[i] = dp[i+word.length]
            }
            if(dp[i]) {
                break;
            }
        }
    }
    return dp[0]
};

console.log(wordBreak("leetcode", ["leet", "code"]))

// Time complexity: O(n*m*k) where n is the length of the string, 
// m is the number of words in the dictionary and k is the average length of the words in the dictionary.
// Space complexity: O(n) where n is the length of the string.

// we can optimize the above solution by storing dictionary words in a set for O(1) lookup 
// and also we can avoid slicing the string by using substring method.