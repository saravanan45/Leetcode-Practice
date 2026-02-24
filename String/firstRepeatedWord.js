function firstRepeatedWord(sentence) {
    const sentenceArr = sentence.split(/[:;,.-\s]+/g);

    const map = new Map()
    for(let i = 0; i<sentenceArr.length; i++) {
        if(map.has(sentenceArr[i])) {
            return sentenceArr[i]
        }
        map.set(sentenceArr[i], i)
    }

    return ""
}

console.log(firstRepeatedWord("I:: had a good sleep,but had dreams."));