// 844. Backspace String Compare


// moderate solution: use array instead of string to avoid slice and concat by push and pop


// function compare(str1, str2) {
//     let tempStr1 = "", tempStr2 = ""
//     for(let i=0; i< str1.length; i++) {
//         if(str1[i] !== '#') {
//             tempStr1 = tempStr1.concat(str1[i])
//         } else {
//             tempStr1 = tempStr1.slice(0, -1)
//         }
//     }
//     for(let i=0; i< str2.length; i++) {
//         if(str2[i] !== '#') {
//             tempStr2 = tempStr2.concat(str2[i])
//         } else {
//             tempStr2 = tempStr2.slice(0, -1)
//         }
//     }

//     console.log("tem", tempStr1, tempStr2)
//     if(tempStr1 === tempStr2) {
//         return true
//     } else {
//         return false
//     }
// }


// optimal solution:

function compare(str1, str2) {
    let i = str1.length - 1;
    let j = str2.length -1
    let str1Skip=0
    let str2Skip =0

    while(i >= 0 || j >= 0) {

        while(i >= 0) {
            if(str1[i] === '#') {
                str1Skip++;
                i--;
            } else if(str1Skip > 0) {
                i--;
                str1Skip--;
            } else break;
        }

         while(j >= 0) {
            if(str2[j] === '#') {
                str2Skip++;
                j--;
            } else if(str2Skip > 0) {
                j--;
                str2Skip--;
            } else break;
        }

        const char1 = i >= 0 ? str1[i] : null;
        const char2 = j >= 0 ? str2[j] : null;

        if (char1 !== char2) return false;

        i--;
        j--;
    }

    return true


}


s = "ab#c", t = "ad#c"

console.log(compare(s, t))