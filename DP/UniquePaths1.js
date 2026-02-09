// 62. Unique Paths


// bottom up approach

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {

//     const dp = Array.from({length: m+1}, () => Array(n+1).fill(0))
//     dp[m-1][n] = 1

//     for(let rows = m-1; rows>=0; rows--) {
//         for(let cols = n-1; cols>=0; cols--) {
//             dp[rows][cols] = dp[rows+1][cols] + dp[rows][cols+1]
//         }
//     }

//     return dp[0][0]
// };

// console.log(uniquePaths(3,7))


// top down approach

var uniquePaths = function(m, n) {

    const dp = Array.from({length: m}, () => Array(n).fill(1))

    for(let rows = 1; rows<m; rows++) {
        for(let cols =1; cols<n; cols++) {
            dp[rows][cols] = dp[rows-1][cols] + dp[rows][cols-1]
        }
    }

    return dp[m-1][n-1]
};

console.log(uniquePaths(3,7))

