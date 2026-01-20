// Longest Substring with K Distinct Characters


// idea is correct but not the best approach because string includes or slice is O(n) which makes the function as O(n*2)
// function longestSubstringWithKdistinct(str, k) {
//   let result = -Infinity;
//   let start = 0;
//   let distinct = 0;
//   let sum = "";
//   for (let i = 0; i < str.length; i++) {
//     // if(sum.includes(str[i]) && distinct <= k) {
//     //     sum.concat(str[i])
//     // } else {
//     //     sum.concat(str[i])
//     // }
//     if (sum.includes(str[i])) {
//       sum = sum.concat(str[i]);
//     } else if (distinct < k) {
//       distinct++;
//       sum = sum.concat(str[i]);
//     } else {
//       sum = sum.concat(str[i]);
//       distinct++;
//       while (distinct <= k) {
//         const c = sum.slice(-1);
//         sum = sum.slice(1);
//         if (sum.includes(c)) {
//           distinct--;
//         }
//       }
//     }
//     console.log("sum", sum, distinct)
//     result = Math.max(result, sum.length)
//   }
//   return result
// }


// optimal approach

function longestSubstringWithKdistinct(str, k) {

    let result = 0;
    const distinct = new Map()
    let start = 0;
    for(let i = 0; i< str.length; i++) {
            distinct.set(str[i], (distinct.get(str[i]) || 0) + 1)
            while(distinct.size >k) {
                if(distinct.get(str[start])>1) {
                    distinct.set(str[start], distinct.get(str[start])- 1)
                } else {
                    distinct.delete(str[start])
                }
                start++;
            }
            result = Math.max(result, i - start + 1)
        }
    return result
}


console.log(longestSubstringWithKdistinct("araaci", 2));
