
// 2121. Intervals Between Identical Elements

// O(n square) approach - Not optimized

// function findInterval(arr) {
//     const map = new Map()
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       const bucket = map.get(arr[i]);

//       const tempBucket = [];
//       let ownDistance = 0;
//       for (let obj of bucket) {
//         let { position, distance } = obj;
//         distance += i - position;
//         ownDistance += i - position;
//         tempBucket.push({ position, distance });
//       }

//       map.set(arr[i], [...tempBucket, { position: i, distance: ownDistance }]);
//     } else {
//       map.set(arr[i], [{ position: i, distance: 0 }]);
//     }
//   }
//   const result = [];
//   for (let k = 0; k < arr.length; k++) {
//     const bucket = map.get(arr[k]);
//     const filteredBucket = bucket.find((obj) => obj.position === k);
//     result.push(filteredBucket.distance);
//   }
//   return result;
// }

// optimized way

var getDistances = function(arr) {
    const map = new Map();

    for(let i =0; i< arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], [])
        }
        map.get(arr[i]).push(i)
    }

    const result = Array(arr.length).fill(0)
    for(const value of map.values()) {
        let ps = 0;
        const n = value.length;
        let totalSum = 0;
        for(let j =0; j< value.length; j++) {
            totalSum += value[j]
        }
        for(let k=0; k<value.length; k++) {
            const left = k * value[k] - ps
            const right = (totalSum - ps - value[k]) - ((n - k -1) * value[k])
            
            result[value[k]] = left + right
            ps += value[k]
        }
    }
    return result
};
console.log(findInterval([2,1,3,1,2,3,3]));
