// 904. Fruit Into Baskets

var totalFruit = function(fruits) {
    let head = 0;
    let max = 0;

    let map = new Map();
    for(let tail = 0; tail < fruits.length; tail++) {
        map.set(fruits[tail], (map.get(fruits[tail]) || 0) + 1)

        while(map.size > 2) {
            if(map.get(fruits[head]) === 1) {
                map.delete(fruits[head])
            } else {
                map.set(fruits[head], map.get(fruits[head]) - 1)
            }
            head++;
        }

        max = Math.max(max, tail - head + 1)  
    }

    return max;

};

// a = [1,2,3,2,2]
// a = [0,1,2,2]
// a = [1,2,1]
a = [3,3,3,1,2,1,1,2,3,3,4]

console.log(totalFruits(a))