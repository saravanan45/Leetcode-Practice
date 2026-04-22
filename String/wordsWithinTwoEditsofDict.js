// 2452. Words Within Two Edits of Dictionary

var twoEditWords = function(queries, dictionary) {
    function compare(str1, str2) {
        let mismatch = 0;

        for(let i = 0; i<str1.length; i++) {
            if(str1[i] !== str2[i]) {
                mismatch++;
            }
        }

        if(mismatch <= 2) {
            return true
        }
        return false;
    }

    const result = []

    for(let query of queries) {
        const match = dictionary.some((words) => compare(query, words))
        if(match) {
            result.push(query)
        }
    }

    return result;
};

const queries = ["vkvbuh","usgkoz","fogezn","cgtkwr","dbzgvv"]
const dictionary = ["hfosud","aaxhkp","vkvbua","xhqibo","mgxzer","ybzgvv","fsgkoz"]

twoEditWords(queries, dictionary)

// Time: O(q * d * n) → optimal for this problem
// Space: O(1) (ignoring output)