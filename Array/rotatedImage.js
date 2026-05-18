// 48. Rotate Image
var rotate = function(matrix) {
    const n = matrix.length;

    for(let i = 0; i<n; i++) {
        for(let j = i; j<n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
        let k = 0;
        let m = n - 1;
        while(k < m) {
            [matrix[i][k], matrix[i][m]] = [matrix[i][m], matrix[i][k]];
            k++;
            m--;
        }
    }

    return matrix
};

matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)

// output: [[7,4,1],[8,5,2],[9,6,3]]

// time complexity: O(n^2) where n is the number of rows/columns in the matrix
// space complexity: O(1) since we are doing the rotation in place