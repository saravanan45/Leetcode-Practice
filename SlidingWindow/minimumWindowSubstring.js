/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  let pointer = 0;
  let minSubStringLength = Infinity;
  let minSubStringStarting = Infinity;
  let matchCount = 0;
  for (let j = 0; j < s.length; j++) {
    if (tMap.has(s[j])) {
      if (tMap.get(s[j]) > 0) {
        matchCount++;
      }
      tMap.set(s[j], tMap.get(s[j]) - 1);
    }

    if (matchCount === t.length) {
      while (matchCount === t.length) {
        if (minSubStringLength > j - pointer + 1) {
          minSubStringLength = j - pointer + 1;
          minSubStringStarting = pointer;
        }
        if (tMap.has(s[pointer])) {
          tMap.set(s[pointer], tMap.get(s[pointer]) + 1);
          if (tMap.get(s[pointer]) > 0) {
            matchCount--;
          }
        }
        pointer++;
      }
    }
  }
  return s.slice(
    minSubStringStarting,
    minSubStringStarting + minSubStringLength,
  );
};

minWindow("ADOBECODEBANC", "ABC");

// sample cases
// s = "timetopractice", p = "toc"
// s = "zoomlazapzo", p = "oza"
// test("a", "aa")

// test(s,p)

// time complexity -> O( s + t )
// space complexity -> O(t)
