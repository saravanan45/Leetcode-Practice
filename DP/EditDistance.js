// 72. Edit Distance


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    const dp = Array.from({length: word2.length + 1}, () => new Array(word1.length + 1))

    for(let i = 0; i<=word2.length; i++) {
        for(let j=0; j<= word1.length; j++) {
            if(i === 0) {
                dp[i][j] = j
            } else if(j === 0) {
                dp[i][j] = i
            } else {
                dp[i][j] = 0
            }
        }
    }

    for(let i = 1; i<=word2.length; i++) {
        for(let j=1; j<=word1.length; j++) {
            if(word1[j - 1] === word2[i - 1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1
            }
        }
    }

    return dp[word2.length][word1.length]
};

console.log(minDistance("horse", "ros"))

// OUTPUT: 