// https://leetcode.com/problems/permutation-in-string/

// 567. Permutation in String

function findPermutation(str, pattern) {
    const obj = {}
    let start = 0
    let match = 0
    for(let i =0; i< pattern.length; i++) {
        obj[pattern[i]] = (obj[pattern[i]] || 0) + 1
    }
    for(let i = 0; i< str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]]--;
            if(obj[str[i]] === 0) {
                match++;
            }
        }
        if(match === Object.keys(obj).length) {
            return true
        }

        if(i >= pattern.length - 1) {
            if(obj[str[start]] !== undefined) {
                if(obj[str[start]] === 0) {
                    match--;
                }
                obj[str[start]]++;
            }
            start++;
        }

    }
    return false

}

// findPermutation("oidbcaf", "abc")//true, The string contains "bca" which is a permutation of the given pattern.
// findPermutation("odicf", "dc")//false
// findPermutation("bcdxabcdy", "bcdxabcdy")//true
console.log(findPermutation("aaacb", "abc"))