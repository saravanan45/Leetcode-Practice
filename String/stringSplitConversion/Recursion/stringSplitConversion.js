function stringSplitConversion(obj) {
    function recursive(keyParts, parentObj = {}, value) {
        const [part0, ...remParts] = keyParts
        if(remParts?.length) {
            const parent = parentObj[part0] || {}
            const childObj = recursive(remParts, parent, value)
            return {...parentObj, [part0]: childObj}
        } else {
            if(parentObj.hasOwnProperty(part0)) {
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


// function stringSplitConversion(obj, result= {}) {
//     for(let [key, value] of Object.entries(obj)) {
//         const [part0, ...remParts] = key.split(".");
//         if(remParts.length) {
//             result[]
//         } else {
//             result[part0] = value
//         }

//     }
// }

const input = {
    "a" : "123",
    "b.def": ["ghij"],
    "b.ghi": "lmn",
    "c.lmn": "mxlx",
    "c.stuv": ["mxlsjs"],
    "c.pqr.ikk": ["ndncxn"]
}

console.log(stringSplitConversion(input))

// const output = {
//   "a": "123",
//   "b": {
//     "def": ["ghij"],
//     "ghi": "lmn"
//   },
//   "c": {
//     "pqr": {
//       "ikk": ["ndncxn"]
//     },
//     "lmn": "mxlx",
//     "stuv": ["mxlsjs"]
//   }
// };