function findUniqueCharacters(str1, str2) {
    let xor = 0

    for(let i=0; i<str1.length; i++) {
        xor ^= str1.charCodeAt(i)
    }

    for(let i=0; i<str2.length; i++) {
        xor ^= str2.charCodeAt(i)
    }

    return String.fromCharCode(xor)
}


console.log(findUniqueCharacters("abcd", "abcde"))