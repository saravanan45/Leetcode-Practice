// 151. Reverse Words in a String

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};

// \s+ means:
// one or more whitespace characters
// So:
// no need for filter