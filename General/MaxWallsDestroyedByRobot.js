// 3661. Maximum Walls Destroyed by Robots

/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function(robots, distance, walls) {
    
    // sort walls
    walls.sort((a, b) => a - b);

    // pair and sort robots
    const pairs = robots.map((r, i) => [r, distance[i]]);
    pairs.sort((a, b) => a[0] - b[0]);

    // binary search: first index >= target
    const lowerBound = (target) => {
        let l = 0, r = walls.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (walls[mid] < target) l = mid + 1;
            else r = mid;
        }
        return l;
    };

    let brokenUntil = -Infinity;
    let total = 0;

    for (let [pos, dist] of pairs) {

        // LEFT interval: [pos - dist, pos]
        let leftStart = lowerBound(Math.max(pos - dist, brokenUntil + 1));
        let leftEnd = lowerBound(pos + 1);
        let leftCount = leftEnd - leftStart;

        // RIGHT interval: [pos, pos + dist]
        let rightStart = lowerBound(Math.max(pos, brokenUntil + 1));
        let rightEnd = lowerBound(pos + dist + 1);
        let rightCount = rightEnd - rightStart;

        if (leftCount > rightCount) {
            total += leftCount;
            if (leftCount > 0) {
                brokenUntil = walls[leftStart + leftCount - 1];
            }
        } else {
            total += rightCount;
            if (rightCount > 0) {
                brokenUntil = walls[rightStart + rightCount - 1];
            }
        }
    }

    return total;
};


// time complexity: O(n log n) due to sorting and binary search
// space complexity: O(n) for pairs array

// Example usage:
const robots = [1, 3, 5];
const distance = [2, 2, 2];
const walls = [2, 4, 6];
console.log(maxWalls(robots, distance, walls)); // Output: 3    

// solution i tried

// /**
//  * @param {number[]} robots
//  * @param {number[]} distance
//  * @param {number[]} walls
//  * @return {number}
//  */
// var maxWalls = function(robots, distance, walls) {
    
//     // sort walls
//     walls.sort((a, b) => a - b);

//     // pair and sort robots
//     const pairs = robots.map((r, i) => [r, distance[i]]);
//     pairs.sort((a, b) => a[0] - b[0]);

//     // binary search: first index >= target
//     const lowerBound = (target) => {
//         let l = 0, r = walls.length;
//         while (l < r) {
//             let mid = Math.floor((l + r) / 2);
//             if (walls[mid] < target) l = mid + 1;
//             else r = mid;
//         }
//         return l;
//     };

//     let brokenUntil = -Infinity;
//     let total = 0;

//     for (let [pos, dist] of pairs) {

//         // LEFT interval: [pos - dist, pos]
//         let leftStart = lowerBound(Math.max(pos - dist, brokenUntil + 1));
//         let leftEnd = lowerBound(pos + 1);
//         let leftCount = leftEnd - leftStart;

//         // RIGHT interval: [pos, pos + dist]
//         let rightStart = lowerBound(Math.max(pos, brokenUntil + 1));
//         let rightEnd = lowerBound(pos + dist + 1);
//         let rightCount = rightEnd - rightStart;

//         if (leftCount > rightCount) {
//             total += leftCount;
//             if (leftCount > 0) {
//                 brokenUntil = walls[leftStart + leftCount - 1];
//             }
//         } else {
//             total += rightCount;
//             if (rightCount > 0) {
//                 brokenUntil = walls[rightStart + rightCount - 1];
//             }
//         }
//     }

//     return total;
// };

