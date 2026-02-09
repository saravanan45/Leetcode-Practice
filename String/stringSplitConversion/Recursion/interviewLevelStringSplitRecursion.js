function stringSplitConversion(obj) {

    const result = {}

    function recursiveFunction(keyParts, value, resultObj) {
        const [part0, ...remParts] = keyParts
        if(!remParts.length) {
            resultObj[part0] = value
            return
        }

        resultObj[part0] ??= {}
        recursiveFunction(remParts, value, resultObj[part0])

    }
    for(let [key, value] of Object.entries(obj)) {
        const keyParts = key.split(".")
        recursiveFunction(keyParts, value, result)
    }

    return result
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