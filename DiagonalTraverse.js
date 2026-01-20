
// leetcode 498. Diagonal Traverse


/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length
    const n = mat[0].length

    let i=0, j=0, upFlag = true
    const result = []
    while(i<m && j<n) {

        result.push(mat[i][j])
        
        if(upFlag) {
            if(j === n -1) {
                upFlag = false
                i++;
            }
            else if(i === 0) {
                upFlag = false
                j++
            }  else {
                i--;
                j++;
            }
        } else {
            if(i === m -1) {
                upFlag = true;
                j++;
            } else if(j === 0) {
                upFlag = true;
                i++;
            } else {
                i++;
                j--;
            }
        }

    }
    return result

};

findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])