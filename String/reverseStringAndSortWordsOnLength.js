function reverseString(sentence) {

    const reversedSentence = sentence.split('').reverse().join('');
    const splittedSentence = reversedSentence.split(' ');
    const splittedMapSentence = splittedSentence.map((word, index) => ({word, index}))
    splittedMapSentence.sort((a,b) => {
        if(a.word.length === b.word.length) {
            return a.index - b.index
        }
        return a.word.length - b.word.length
    });

    console.log("splitt", splittedMapSentence)

    const result = splittedMapSentence.map((words) => words.word)
    console.log("result", result.join(' '))
}


reverseString("The quick brown fox jumps")

// output: "xof ehT spmuj nworb kciuq"

// function reverseString(sentence) {
//     const reverseSentence = sentence.split('').reverse().join("")
//     const wordsArr = reverseSentence.split(" ")
//     const sortedArr = wordsArr.sort((a, b) => {
//        return a.length - b.length 
//     })
//     return sortedArr
// }

// console.log(reverseString("The quick brown fox jump"))

// above is also correct
