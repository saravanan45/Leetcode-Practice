/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || !grid.length) return 0
    let islands = 0;
    const dfs = (i, j) => {
        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j] === '0') {
            return
        }

        grid[i][j] = '0'

        dfs(i, j-1)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i+1, j)
    }
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === '1') {
                islands++;
                dfs(i,j)
            }
        }
    }
    console.log("islands", islands)
    return islands
};

numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])

  numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])

  // DFS approach

  //Ref: leetcode: 200 https://leetcode.com/problems/number-of-islands/description/