/**
 * @param {number[]} prices
 * @return {number}
 */
function test(prices) {
    let p1 = prices[0]
    let maxSingleTransaction = 0;

    for(let i = 1; i< prices.length; i++) {
        const p2 = prices[i]
        if(p1 > p2) {
            p1 = prices[i]
        } else {
            if(p2 - p1 > maxSingleTransaction) {
                maxSingleTransaction = p2 - p1
            }
        }
    }

    let sumOfMaxTransaction = 0

    for(let i = 1; i< prices.length; i++) {
        const p2 = prices[i]
        const p3 = prices[i-1]
        if(p2 > p3) {
            sumOfMaxTransaction += p2 - p3
        }
    }

    
    return Math.max(maxSingleTransaction, sumOfMaxTransaction)
}

console.log(test([7,1,5,3,6,4]))

// time complexity O(n) and space complexity O(1)
