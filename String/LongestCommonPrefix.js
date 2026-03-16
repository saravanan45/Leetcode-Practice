// 14. Longest Common Prefix

function LongestCommonPrefix(strs) {
    const firstString = strs[0]
    let i =0;
    while(i < firstString.length) {
        for(let j = 1; j<strs.length; j++) {
            if(i >= strs[j].length || strs[j][i] !== firstString[i]) {
                return firstString.slice(0, i)
            }
        }
        i++;
    } 
    return firstString

}

console.log(LongestCommonPrefix(["flower","flow","flight"])) // "fl"


// time complexity - O(n*m) where n is the number of strings and m is the length of the longest common prefix
// space complexity - O(m) where m is the length of the longest common prefix