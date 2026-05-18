// 1914. Cyclically Rotating a Grid
var rotateGrid = function(arr, k) {
    function extractGrid(layer, rows, cols, grid) {
    const arr = [];

    //top
    let i = layer;
    let j = layer;

    while(j < cols - 1 - layer) {
        arr.push(grid[i][j]);
        j++;
    }

    // right

    i = layer;
    j = cols - 1 - layer;

    while(i < rows - 1 - layer) {
        arr.push(grid[i][j]);
        i++;
    }

    // bottom

    i = rows - 1 - layer;
    j = cols - 1 - layer;
 
    while(j > layer) {
        arr.push(grid[i][j]);
        j--;
    }
    

    // left
    i = rows - 1 - layer;
    j = layer;

    while(i > layer) {
        arr.push(grid[i][j]);
        i--;
    }

    return arr
    
}

function applyGrid(layer, rows, cols, grid, arr) {

    let k = 0;
    
    //top
    let i = layer;
    let j = layer;

    while(j < cols - 1 - layer) {
        grid[i][j] = arr[k++];
        j++;
    }

    // right

    i = layer;
    j = cols - 1 - layer;

    while(i < rows - 1 - layer) {
         grid[i][j] = arr[k++];
        i++;
    }

    // bottom

    i = rows - 1 - layer;
    j = cols - 1 - layer;
 
    while(j > layer) {
        grid[i][j] = arr[k++];
        j--;
    }
    

    // left
    i = rows - 1 - layer;
    j = layer;

    while(i > layer) {
        grid[i][j] = arr[k++];
        i--;
    }

    return arr
}

const rotate = (start, end, arr) => {
    
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start ++;
        end --;
    }
}

const arrRotation = (arr, k) => {
    const rotation = k % arr.length;

    rotate(0, arr.length - 1, arr);
    rotate(0, arr.length - 1 - rotation, arr);
    rotate(arr.length - rotation, arr.length - 1, arr);

}
    const m = arr.length;
    const n = arr[0].length;
    

    const layers = Math.floor((Math.min(m,n)) / 2);

    for(let i = 0; i<layers; i++) {
        const tempArr = extractGrid(i, m, n, arr)
        arrRotation(tempArr, k)

        applyGrid(i, m, n, arr, tempArr);
        
        
    }

    return arr;
};

console.log(grid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 2))

// time : O(m * n)
// space : O(m * n) in the worst case when the grid has only one layer, we will store all the elements in the temporary array.