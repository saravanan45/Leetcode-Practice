// Ref link: https://javascript.plainenglish.io/paypal-microsoft-amazon-and-meta-interview-question-b7e026b5c7d0

// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// using bucket sorting way - O(n)
const topKFrequent = (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }

  const bucket = {},
    result = [];
  let maxFreq = 0;
  for (let [key, freq] of map.entries()) {
    if (bucket[freq]) {
      bucket[freq] = [...bucket[freq], key];
    } else {
      bucket[freq] = [key];
    }
    if (freq > maxFreq) maxFreq = freq;
  }

  for (let i = maxFreq; i > 0; i--) {
    if (bucket[i]) {
      for (let j = 0; j < bucket[i].length; j++) {
        result.push(bucket[i][j]);
        if (result.length === k) {
          break;
        }
      }
    }
  }
  return result;
};

const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5];
const k = 2;
console.log(topKFrequent(nums, k));
