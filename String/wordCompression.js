// 1209. Remove All Adjacent Duplicates in String II

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"


// stack based approach

function test(str, k) {

    let stack = []

    // in stack storing as [d, count]

    for(let i =0; i<str.length; i++) {
        if(stack.length && stack[stack.length - 1][0] === str[i]) {
            stack[stack.length - 1][1]++;

            if(stack[stack.length - 1][1] === k) {
                stack.pop()
            }
        } else {
            stack.push([str[i], 1])
        }
    }

    // let resultStr = ''
    // stack.forEach((element) => resultStr += element[0].repeat(element[1]))
    // return resultStr;

    return stack.map((element) => element[0].repeat(element[1])).join('')

}



s = "deeedbbcccbdaa", k = 3
// Output: "aa"

console.log(test(s, k))

// time complexity - O(n) where n is the length of the string
// space complexity - O(n) in worst case when there are no duplicates and we have to store all characters in the stack

