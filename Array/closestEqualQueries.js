// 3488. Closest Equal Queries

var solveQueries = function (nums, queries) {
  const n = nums.length;
  const m = queries.length;
  const result = [];

  const map = new Map();
  const indexMap = new Map();

  for (let k = 0; k < n; k++) {
    if (!map.has(nums[k])) {
      map.set(nums[k], []);
    }
    map.get(nums[k]).push(k);
  }

  for (const [key, arr] of map.entries()) {
    for (let i = 0; i < arr.length; i++) {
      indexMap.set(arr[i], i);
    }
  }

  for (let i = 0; i < m; i++) {
    const pos = queries[i];
    const val = nums[pos];
    let found = false;

    const allPos = map.get(val);
    const r = allPos.length;
    if (r === 1) {
      result.push(-1);
    } else {
      const startPos = indexMap.get(pos);

      const left = (startPos - 1 + r) % r;
      const right = (startPos + 1) % r;

      // calculating distance in a linear manner
      // from 0 -> n-1
      const leftDistRaw = Math.abs(allPos[startPos] - allPos[left]);
      const rightDistRaw = Math.abs(allPos[right] - allPos[startPos]);

      // calculating distance in a circular manner
      // from n-1 -> 0
      const leftDist = Math.min(leftDistRaw, n - leftDistRaw);
      const rightDist = Math.min(rightDistRaw, n - rightDistRaw);
      result.push(Math.min(leftDist, rightDist));
    }
  }
  return result;
};

// nums = [1,3,1,4,1,3,2]
// queries = [0,3,5]

nums = [15, 1, 10, 1, 20, 4, 6, 14, 4, 9, 4, 18];
queries = [0, 2, 10, 6, 11, 8];

console.log(solveQueries(nums, queries));

// time complexity: O(n + m) where n is the length of nums and m is the length of queries
// space complexity: O(n) for the map and indexMap
