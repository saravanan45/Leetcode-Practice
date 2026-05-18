// Rotate String

var rotateString = function(s, goal) {

    if(s?.length !== goal?.length) return false;

    const newString = s + s;
    
    return newString.includes(goal);
}

// time complexity: O(n) where n is the length of the string since we are concatenating the string with itself and then checking if the goal string is a substring of the new string
// space complexity: O(n) since we are creating a new string which is twice the length of the original string

rotateString("abcde", "cdeab") // true

// non optimal way for rotateString

var rotateString = function(s, goal) {
    if(s?.length !== goal?.length) return false;

    const firstCharPositions = []
    for(let i = 0; i<s.length; i++) {
        if(s[i] === goal[0]) {
            firstCharPositions.push(i)
        }
    }

    let matchFound = false;
    for(let i = 0; i<firstCharPositions.length; i++) {
        let pos = firstCharPositions[i];
        let k = 0;
        for(let j = pos; j < s.length + pos; j++) {
            const newPos = j % s.length;
            if(s[newPos] !== goal[k++]) {
                break;
            }
            if(k === s.length) {
                return true;
            }
        }
    }
    return false;
};

rotateString("abcde", "cdeab") // true

// Explanation: We can rotate "abcde" to get "cdeab" by rotating left 2 times.

// Time complexity: O(n^2) where n is the length of the string since we are checking for each position of the first character in the goal string and then comparing the rest of the characters
// Space complexity: O(1) since we are not using any extra space except for a few variables