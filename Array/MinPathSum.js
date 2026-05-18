// 64. Minimum Path Sum
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({length: m}, () => Array(n).fill(0));

    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
                continue;
            }
            const top = i > 0 ? dp[i-1][j] : Infinity;
            const left = j > 0 ? dp[i][j-1] : Infinity;
            dp[i][j] = grid[i][j] + Math.min(top, left);
        }
    }

    return dp[m-1][n-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])) // 7

// Explanation: The path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Time: O(m * n)
// space: O(m * n)