// 316. Remove Duplicate Letters

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
     const stack = []

    const map = new Map()
    const visitedSet = new Set()

    for(let i =0; i < s.length; i++) {
        map.set(s[i], i)
    }

    for(let j = 0; j<s.length; j++) {

            if(visitedSet.has(s[j])) continue;

            while((stack[stack.length -1] > s[j]) && map.get(stack[stack.length -1]) > j ) {
                visitedSet.delete(stack.pop())
            }

            stack.push(s[j])
            visitedSet.add(s[j])
    }
    return stack.join("")
};

// const str = "bcabc"
const str = "cbacdcbc"
console.log(removeDuplicateLetters(str))