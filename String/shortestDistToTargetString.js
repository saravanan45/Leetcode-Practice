
// 2457. Minimum Distance to the Target Element

var closestTarget = function(words, target, startIndex) {
    // if(!words.includes(target)) return -1;
    // if(words[startIndex] === target) return 0;

    // const n = words.length;
    // let left = (startIndex - 1 + n) % n;
    // let right = (startIndex + 1) % n;
    // let steps = 1;

    // while (words[left] !== target && words[right] !== target) {
    //     left = (left - 1 + n) % n;
    //     right = (right + 1) % n;
    //     steps++;
    // }

    // return steps  
    // const n = words.length;
    // if(words[startIndex] === target) return 0;
    // let steps = 0;
    // for(let i = 0; i < n; i++) {
    //     const left = (startIndex - i - 1+ n) % n;
    //     const right = (startIndex + i + 1) % n;
    //     steps++;
    //     if(words[left] === target || words[right] === target) {
    //         break;
    //     }
    // }

    // return steps >= n? -1: steps

    const n = words.length;
    if(words[startIndex] === target) return 0;
    for(let i = 1; i < n; i++) {
        const left = (startIndex - i + n) % n;
        const right = (startIndex + i) % n;
        if(words[left] === target || words[right] === target) {
           return i
        }
    }

    return -1
};

closestTarget(["hello","i","am","leetcode","hello"], "hello", 1)

// Time: O(n)
// Space: O(1)

// 

