function stringSplitConversion(obj) {
    function recursive(keyParts, parentObj = {}, value) {
        const [part0, ...remParts] = keyParts
        if(remParts?.length) {
            const parent = parentObj[part0] || {}
            const childObj = recursive(remParts, parent, value)
            return {...parentObj, [part0]: childObj}
        } else {
            if(parentObj[part0]) {
                return parentObj
            }
            return {...parentObj, [part0]: value}
        }
    }

    let resultObj = {}
    for(let [key, value] of Object.entries(obj)) {
        const parts = key.split(".")
        resultObj = recursive(parts, resultObj, value)
    }

    return resultObj;
}


const input = {
    "a" : "123",
    "b": "2",
    "b.def": ["ghij"],
    "b.ghi": "lmn",
    "b": "1",
    "c.lmn": "mxlx",
    "c.stuv": ["mxlsjs"],
    "c.pqr.ikk": ["ndncxn"],
}

console.log(stringSplitConversion(input))