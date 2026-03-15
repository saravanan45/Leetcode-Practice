var longestCommonSubsequence = function(text1, text2) {
  const dp = Array.from(
    { length: text2.length + 1 },
    () => new Array(text1.length + 1).fill(0)
  )

  for (let i = 1; i <= text2.length; i++) {
    for (let j = 1; j <= text1.length; j++) {
      if (text2[i - 1] === text1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[text2.length][text1.length]
}

console.log(longestCommonSubsequence("abcde", "ace"))
// output: 3
// time complexity: O(m * n)
// space complexity: O(m * n)