
// not an optimal approach
// function test(str) {
//     if(str.length < 2) return str;

//     let start = 0
//     let map = new Map();
//     let result = 0;

//     for(let i = 0; i< str.length; i++) {
//         if(map.has(str[i])) {
//             while(map.has(str[i])) {
//                 map.delete(str[start]);
//                 start++;
//             }
//             map.set(str[i], i)
//         } else {
//             map.set(str[i], i)
//         }

//        result = Math.max(result, i-start+1)
//     }
//     return result;
// }


// optimal way
function test(str) {
    if(str.length < 2) return str;

    let start = 0
    let map = new Map();
    let result = 0;

    for(let i = 0; i< str.length; i++) {
        if(map.has(str[i]) && map.get(str[i]) >= start) {
            start = map.get(str[i]) + 1;
        }
    
       map.set(str[i], i)
       result = Math.max(result, i-start+1)
    }
    return result;
}


str= "abcabcbb"
console.log(test(str))