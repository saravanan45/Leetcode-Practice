function test(arr) { 
    const result = []
    for(let i = 0; i<arr.length; i++) {
        const tempArr = [arr[i]]
        result.push([...tempArr])
        for(let j = i+1; j<arr.length; j++) {
            tempArr.push(arr[j])
            result.push([...tempArr])
        }
    }

    // circular subarrays
    
    // const n = arr.length
    // for(let i =0; i<n; i++) {
    //     const tempArr = [];
    //     for(let j =0; j<n; j++) {
    //        tempArr.push(arr[(i+j) % n])
    //         result.push([...tempArr])
    //     }
    // }

    return result


}

console.log(test([6,4,8,7,5]))