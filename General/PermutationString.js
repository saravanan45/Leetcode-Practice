// recursive way

// function permute(str) {
//   if (str.length <= 1) return [str];

//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const rem = str.slice(0, i) + str.slice(i + 1);

//     for (const perm of permute(rem)) {
//       result.push(char + perm);
//     }
//   }
//   return result;
// }


// Iterative way
function permute(str) {

    let result = [""]
    for(let i = 0; i< str.length; i++) {
        const char = str[i]
        let temp = []
        for(let perm of result) {
            for (let j = 0; j<= perm.length; j++) {
                temp.push(perm.slice(0, j) + char + perm.slice(j))
            }
        }

        result = temp
    }

    return result;
}

console.log("str", permute("abc"));
