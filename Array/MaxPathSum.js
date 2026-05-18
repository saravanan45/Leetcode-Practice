// try

const scoreCostMap = {
    0 : 0,
    1: 1,
    2: 1
}

const betterFn = (a, b) => {
    if(a[0] > b[0]) return a;
    if(b[0] > a[0]) return b;

    return a[1] <= b[1] ? a : b;
}

var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m }, () => Array.from({length: n}, () => [0, 0]));

    for(let i = 0; i<m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = [grid[i][j], scoreCostMap[grid[i][j]]];
                continue;
            }
            const top = i > 0 ? dp[i-1][j] : [-Infinity, Infinity];
            const left = j > 0 ? dp[i][j-1] : [-Infinity, Infinity];
            
            const topOrLeft = betterFn(top, left)
            dp[i][j] = [grid[i][j] + topOrLeft[0], scoreCostMap[grid[i][j]] + topOrLeft[1]]
        }
    }
    return dp[m-1][n-1][0]
};

console.log(maxPathScore([[0,1,2],[2,1,0],[1,0,2]], 2)) // 5

// Explanation: The path 0 → 1 → 2 → 0 → 2 maximizes the score with a cost of 2, which is within the allowed cost k = 2.

// Time Complexity: O(m * n) where m and n are the dimensions of the grid
// Space Complexity: O(m * n) since we are using a dp array to store the maximum score and cost for each cell