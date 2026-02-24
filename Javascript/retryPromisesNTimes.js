// You are given a function fn that returns a Promise.

// Write a function retry(fn, retries) that:

// Calls fn

// If the Promise resolves, return the resolved value immediately

// If the Promise rejects, retry calling fn again

// Retry at most retries times

// If all attempts fail, return the last rejection error


async function retry(fn, retries) {
    if (retries === 0) {
        throw new Error("Max retries reached");
    }
    try {
        const response = await fn()
        return response;
    } catch (err) {
        console.error(err)
        if (retries > 0) {
            return retry(fn, retries - 1)
        } else {
            throw err;
        }
    }
}

let count = 0
function fetchAPI() {
    const promise = new Promise((resolve, reject) => {
        count++;
        if (count > 3) {
            resolve(count)
        } else {

            reject("error")
        }
    })
    return promise
}
async function retries() {
    const result = await retry(fetchAPI, 3)
    console.log("result", result)
}

retries()
