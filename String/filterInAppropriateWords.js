function filterOut(comments, inappropriateWords) {
    const result = []
    for(let i = 0; i< comments.length; i++) {
        const notValid = inappropriateWords.some((words) => comments[i].toLowerCase().includes(words.toLowerCase()))

        if(!notValid) {
            result.push(comments[i])
        }
    }
    return result;
}

console.log("filter out", filterOut(['I love this video', 'I hate this video', 'I dislike it'], ['Dislike', 'hate']))