// 49. Group Anagrams

// method 1: using sort

var groupAnagrams = function (strs) {
  const map = new Map();
  function getSortedString(str) {
    return str.split("").sort().join("");
  }
  for (let i = 0; i < strs.length; i++) {
    const sortedString = getSortedString(strs[i]);
    if (map.has(sortedString)) {
      // map.set(sortedString, map.get(sortedString).push(strs[i]))
      map.get(sortedString).push(strs[i]); // optimized way directly pushing to map
    } else {
      map.set(sortedString, [strs[i]]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// ouput: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Time complexity:
// n -> number of strings
// k => average length of string -> k
// O(k log k) for sorting
// O(n) for loop
// total O(n + k log k)

// space complexity:
// O(n * k) => N strings × K characters per string → O(N × K)

// method 2 - using frequency

var groupAnagrams = function (strs) {
  const map = new Map();
  function getFrequencyString(str) {
    const freq = Array(26).fill(0);
    for (const char of str) {
      freq[char.charCodeAt(0) - 97]++;
    }
    return freq.join("#");
  }

  for (let i = 0; i < strs.length; i++) {
    const freqString = getFrequencyString(strs[i]);
    if (map.has(freqString)) {
      map.get(freqString).push(strs[i]);
    } else {
      map.set(freqString, [strs[i]]);
    }
  }
  return [...map.values()];
};

// time complexity - O(n * k) better than sorting method

