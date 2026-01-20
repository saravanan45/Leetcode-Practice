// 5. https://leetcode.com/problems/longest-palindromic-substring/

function palindrome(str) {
    if(str.length < 2) return str;
    let maxLen = 0;
    let start = 0;

    function expand(left, right) {
        while(left >= 0 && right < str.length && str[left] === str[right]) {
            if(right - left + 1 > maxLen) {
                maxLen = right - left + 1
                start = left
            }
            left--;
            right++;
        }
    }

    for(let i =0; i< str.length; i++) {
        expand(i, i) // odd
        expand(i, i+1) // even
    }

    return str.substring(start, start+maxLen)
}

s = "babad"
console.log(palindrome(s))