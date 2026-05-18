// 788.Rotated Digits
const invalidDigits = [3,4,7];
const map = {
    2: 5,
    5: 2,
    6: 9,
    9: 6,
    0: 0,
    1: 1,
    8: 8
}

const checkAllNumbersAreValid = (num) => {
    const temp = num;
    let newNum = '';
    while(num > 0) {
        const rem = num % 10;
        if(invalidDigits.includes(rem)) {
            return false;
        }
        newNum = map[rem] + newNum;
        num = Math.floor(num / 10);
    }

    if(Number(newNum) !== temp) {
        return true;
    } else {
        return false;
    }
}

var rotatedDigits = function(n) {
    if(n < 2) return 0;

    let count = 0;

    for(let i = 1; i<=n; i++) {
        if(checkAllNumbersAreValid(i)) {
            count++;
        }
    }
    
    return count;
};

console.log(rotatedDigits(857))

// output: 247

// time complexity: O(n * log n) where n is the input number and log n is the number of digits in the number
// space complexity: O(log n) since we are creating a new string for each number which can have at most log n digits