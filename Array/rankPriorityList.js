// What you’re describing is priority / rank compression of an array.

// 👉 Smaller number ⇒ higher priority (rank 1)
// 👉 Equal values ⇒ same rank


// I/P -> [9, 2, 3, 3, 2]
// O/P -> [3, 1, 2, 2, 1]

function rankPriorityList(arr) {
    const set = [...(new Set(arr))]

    set.sort((a, b) => a - b)

    const mapper = new Map()
   
    for(let i = 0; i< set.length; i++) {
        mapper.set(set[i], i + 1)
    }

    const result = arr.map((val) => mapper.get(val))
    return result
}

console.log(rankPriorityList([9, 2, 3, 3, 2]))