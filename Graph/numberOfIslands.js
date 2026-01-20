function islands(mat) {
    let result = 0;
    const visited = [...Array(mat.length)].map((_, i) => new Array(mat[i].length).fill(0));
    const directions = [[1,0], [1, -1], [1,1], [0, 1], [-1, 0], [-1, 1], [-1, -1], [0, -1]]
    
    for(let i = 0; i< mat.length; i++) {
        for(let j =0; j< mat[i].length; j++) {
            if(!visited[i][j] && mat[i][j] === 'L') {
                visited[i][j] = 1
                DFS(i, j)
                result++;
            }
        }
    }

    function DFS(x, y) {
        for(const [a, b] of directions) {
            let m = a + x
            let n = b + y

            if(m >= 0 && m < mat.length && n >=0 && n < mat[m].length && mat[m][n] === 'L' && !visited[m][n]) {
                visited[m][n] = 1
                DFS(m, n)
            }
        }
    }

    return result;

}

mat = [['L', 'L', 'W', 'W', 'W'],['W', 'L', 'W', 'W', 'L'], ['L', 'W', 'W', 'L', 'L'], ['W', 'W', 'W', 'W', 'W'], ['L', 'W', 'L', 'L', 'W']]

console.log(islands(mat))