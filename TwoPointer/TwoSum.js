function test(arr, val) {
    let obj = {}
    for(let i =0; i<arr.length; i++) {  
       if(obj[val - arr[i]] != undefined) {
        return [obj[val - arr[i]], i]
       }
       obj[arr[i]] = i
    //    console.log("obj", obj)
    }
}



console.log(test([2,7,11,15], 22))