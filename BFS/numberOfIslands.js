// 1254. Number of Closed Islands

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let numberOfIslands = 0

    
    const neighbours = [[-1, 0], [0, 1], [0, -1], [1,0]]
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j] === 0) {
                const queue = []
                queue.push([i, j])
                grid[i][j] = 1;

                let closedIsland = true
                let pointer = 0
                while(pointer < queue.length) {
                    const [a, b] = queue[pointer++];
                    if(a=== 0 || b === 0 || a === grid.length -1 || b=== grid[0].length -1) {
                        closedIsland = false
                    }
                    for(let k = 0; k < 4; k++) {
                        const [x,y] = neighbours[k]
                        const nx = a+x
                        const ny = b+y
                        if(nx < 0 || ny<0 || nx >= grid.length || ny >= grid[0].length) {
                            continue;
                        }
                        if(grid[nx][ny] === 0) {                 
                            queue.push([nx, ny])
                            grid[nx][ny] = 1;
                        }
                    }
                }

                if(closedIsland === true) {
                    numberOfIslands += 1
                }
            }
            
        }
    }
    return numberOfIslands
};