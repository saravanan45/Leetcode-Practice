function stringSplitConversion(obj) {
    let resultObj = {}
    for(let [key, value] of Object.entries(obj)) {
        const parts = key.split(".")
        let pointerObj = resultObj
        for(let i = 0; i<parts.length; i++) {
            if(i === parts.length - 1) {
                if(!pointerObj[parts[i]]) { // first write wins or otherwise skip if condition here 
                    pointerObj[parts[i]] = value
                }
            } else {
                if(!pointerObj[parts[i]]) {
                    pointerObj[parts[i]] = {}
                }
                pointerObj = pointerObj[parts[i]]
            }
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
