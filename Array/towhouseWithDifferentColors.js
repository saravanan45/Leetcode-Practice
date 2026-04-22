// 2078. Two Furthest Houses With Different Colors
var maxDistance = function(colors) {
    if(colors.length < 2) return -1 

    let p1 = 0;
    let p2 = colors.length - 1;
    let maxDistance = 0;

    // left traverse
    while(p2 >= 0 && colors[p2] === colors[0]) {
        p2--;
    }

    maxDistance = p2;

    p1 = 0
    p2 = colors.length - 1
    while(p1 < colors.length && colors[p1] === colors[colors.length - 1]) {
        p1++;
    }

    maxDistance = Math.max(maxDistance, colors.length - 1 - p1)

    return maxDistance
};

// const colors = [1,1,1,1,1,1,1]
const colors = [82,40,40,82]

maxDistance(colors)

// time complexity: O(n) where n is the length of the colors array
// space complexity: O(1) since we are using constant extra space


// var maxDistance = function(colors) {
//     if(colors.length < 2) return -1 

//     let p1 = 0;
//     let p2 = colors.length - 1;
//     let currentElement = colors[0]
//     let maxDistance = 0;

//     while(colors[p1] === colors[p2] && p2 > p1 && colors[p1] === currentElement && colors[p2] === currentElement) {
//         p2--;
//         p1++;
//     }
    
//     if(colors[p1] !== currentElement) {
//         maxDistance = colors.length - 1 - p1;
//     } else if(colors[p2] !== currentElement) {
//         maxDistance = p2 - 0;
//     } else {
//         maxDistance = -1;
//     }

//     return maxDistance
// };