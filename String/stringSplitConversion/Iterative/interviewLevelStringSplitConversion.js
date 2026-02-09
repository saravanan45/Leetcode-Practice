function stringSplitConversion(obj) {
    let resultObj = {}
    for(let [key, value] of Object.entries(obj)) {
        const parts = key.split(".")
        
        let pointer = resultObj

        for(let i = 0; i< parts.length; i++) {
            if(parts.length - 1 === i) // last element
                pointer[parts[i]] = value
            else 
                pointer[parts[i]] ??= {}
                pointer = pointer[parts[i]]
        }
    }
    return resultObj
}



const input = {
    "a" : "123",
    "b": "1",
    "b.def": ["ghij"],
    "b.ghi": "lmn",
    "c.lmn": "mxlx",
    "c.stuv": ["mxlsjs"],
    "c.pqr.ikk": ["ndncxn"]
}

console.log(stringSplitConversion(input))
