// var maxProfit = function(prices) {
//     let left = 0;
//     let right = 0;
//     let max = 0

//     while(right<prices.length) {
//         if(prices[right] < prices[left]) {
//             left++;
//         }
//         else {
//             diff = prices[right] - prices[left]
//             console.log("diff", diff, prices[left], prices[right])
//             if(diff > max) {
//                 max = diff
//             }
//             right++;
//         }
//     }
//     return max

    
// };

// console.log("max value", maxProfit([7,1,5,3,6,4]))


// other way

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
function test(prices) {
    let p1 = prices[0]
    let max = 0;

    for(let i = 1; i< prices.length; i++) {
        const p2 = prices[i]
        if(p1 > p2) {
            p1 = prices[i]
        } else {
            if(p2 - p1 > max) {
                max = p2 - p1
            }
        }
    }
    return max
}

console.log(test([7,1,5,3,6,4]))

// Time complexity O(n) and space complexity O(1)