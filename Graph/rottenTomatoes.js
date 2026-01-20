function rottenTomatoes(matrix) {
  const queue = [];
  let freshTomatoes = 0;
  let minTime = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 2) {
        queue.push([i, j]);
      }
      if (matrix[i][j] === 1) {
        freshTomatoes++;
      }
    }
  }

  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let head = 0;
  while (queue.length > 0 && freshTomatoes > 0) {
    let size = queue.length - head;

    while (size > 0) {
      let [i, j] = queue[head++];
      for (const dir of directions) {
        let x = i + dir[0];
        let y = j + dir[1];

        if (x >= 0 && x < matrix.length && y >=0 && y < matrix[0].length && matrix[x][y] === 1 ) {
          queue.push([x, y]);
          freshTomatoes--;
          matrix[x][y] = 2;
        }
      }
      size--;
    }

    minTime++;
  }

  return freshTomatoes === 0 ? minTime : -1;
}

mat = [
  [2, 1, 0, 2, 1],
  [1, 0, 1, 2, 1],
  [1, 0, 0, 2, 1],
];

console.log(rottenTomatoes(mat));
