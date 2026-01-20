const findSquare = (num) => {
    let sum = 0
    while(num>0) {
        const digit = num % 10
        sum += digit * digit
        num = Math.floor(num/10)
    }
    return sum
}

const findHappyNumber = (num) => {
    let slow = findSquare(num)
    let fast = findSquare(findSquare(num))

    while(slow !== fast) {
        slow = findSquare(slow)
        fast = findSquare(findSquare(fast))
    }

    return slow === 1 ? true: false
}


console.log(findHappyNumber(23))

console.log(findHappyNumber(12))