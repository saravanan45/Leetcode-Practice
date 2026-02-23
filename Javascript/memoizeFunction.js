function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function add(a,b) {
    return a+b
}

const memoizedAdd = memoize(add)
console.log(memoizedAdd(2,3))

console.log(memoizedAdd(4,5))
console.log(memoizedAdd(2,3))


