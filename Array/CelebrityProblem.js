// 277. Celebrity problem
// optimal approach
function celebrity(mat) {
  const n = mat.length;
  let top = 0;
  let down = n - 1;

  while (top < down) {
    if (mat[top][down] === 1) {
      top++;
    } else if (mat[down][top] === 1) {
      down--;
    } else {
      top++;
      down--;
    }
  }

  if (top > down) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (top === i) continue;

    if (mat[top][i] === 1 || mat[i][top] === 0) {
      return -1;
    }
  }

  return top;
}

// time complexity - O(n)
// space complexity - O(1)



// not a optimized approach O(n * n) + O(n)
// function celebrity(mat) {
//   if (mat.length < 2) {
//     return -1;
//   }
//   const n = mat.length;
//   const knowMe = new Array(n).fill(0);
//   const IKnow = new Array(n).fill(0);

//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat.length; j++) {
//       if (i === j) continue;

//       if (mat[i][j] === 1) {
//         IKnow[i]++;
//         knowMe[j]++;
//       }
//     }
//   }

//   for (let i = 0; i < mat.length; i++) {
//     if (IKnow[i] === 0 && knowMe[i] === n - 1) {
//       return i;
//     }
//   }

//   return -1;
// }

let mat = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
];
// let mat = [[1]];
pconsole.log(celebrity(mat));
