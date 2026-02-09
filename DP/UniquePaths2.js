// 63. Unique Paths II

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1) return 0;

    const dp = Array.from({length: m}, () => Array(n).fill(0))
    dp[0][0] = 1
    for(let rows = 0; rows < m; rows++) {
        for(let cols = 0; cols < n; cols++) {
            if(obstacleGrid[rows][cols]) {
                dp[rows][cols] = 0
            } else {
                if(rows > 0) {
                    dp[rows][cols] += dp[rows - 1][cols] 
                } 
                if(cols > 0) {
                    dp[rows][cols] += dp[rows][cols - 1]
                }
            }
        }
    }

    return dp[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))