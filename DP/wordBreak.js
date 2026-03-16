// 139. Word Break


var wordBreak = function(s, wordDict) {
    const dp = Array(s.length+1).fill(false)
    dp[s.length] = true;
    for(let i = s.length -1; i>=0; i--) {
        for(const word of wordDict) {
            // slice is unnecessary create new string and then compare but startsWith directly do a compare
            // const str1 = s.slice(i, i+word.length)
            // if(str1 === word) {
            //     dp[i] = dp[i+word.length]
            // }
             if(s.startsWith(word, i)) {
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


// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".