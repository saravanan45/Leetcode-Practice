// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

async function fetchAPI() {
    try {
        const response = await fetchWrapperCall('https://domain.com/test', 'GET', 5000)
        return response
    } catch (err) {
        console.error(err)
    }
}

// cache - { url: {data, expiry} }
function isCacheExpired(cacheCreatedAt, expiry) {
    const now = Date.now()

    if (now - cacheCreatedAt > expiry) {
        return true
    }

    return false
}


const cache = {}
const apiInProcess = new Map()

// fetchWrapperCall('https://domain.com/path', 'GET', 5000)
function fetchWrapperCall(URL, requestType, expiry) {

    if (cache[URL] && !isCacheExpired(cache[URL].createdAt, cache[URL].expiry)) {
        return Promise.resolve(cache[URL].data)
    }

    if (apiInProcess.has(URL)) {
        return apiInProcess.get(URL);
    }

    const fetchPromise = fetch(URL, {
        method: requestType
    }).then(res => res.json()).then(data => {
        cache[URL] = {
            data,
            expiry,
            createdAt: Date.now()
        }
        return data;
    }).catch(err => {
        throw err;
    }).finally(() => {
        apiInProcess.delete(URL)
    });

    apiInProcess.set(URL, fetchPromise);

    return fetchPromise;

}



