// I was supposed to implement just the class, the interviewer provideed how the class was going to be used:

// let store = new StoreData();
// store.add('name', 'joe');
// store.add('age', 30);
// console.log(store.has('age'));    // return true
// console.log(store.has('animal')); // return false
// store.add('name', 'emma');
// store.on('change:name', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});
// store.add('name', 'john');
// store.on('age', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});
// store.add('age', 26);
// store.on('change:age', (old_val, new_val, key)=>{console.log(`${old_val > new_val ? 'older now' : ''}`)});
// store.add('age', 28);
// store.add('age', 45);


class StoreData {
    constructor() {
        this.changeEvent = new Map()
        this.storage = new Map()
    }

    add(key, value) {
        if(this.storage.has(key)) {
            if(this.changeEvent.has(key)) {
                const oldValue = this.storage.get(key);
                this.changeEvent.get(key)(oldValue, value, key)
            }
        }
        this.storage.set(key, value);
    }

    has(key) {
        if(this.storage.has(key)) {
            return true
        }
        return false
    }

    on(changeKey, callback) {
        if(changeKey.includes("change")) {
            const key = changeKey.split(":")[1]
            this.changeEvent.set(key, callback);
            return
        }
        return new Error("error: Invalid key detected")
    }
}

let store = new StoreData();
store.add('name', 'joe');
store.add('age', 30);
console.log(store.has('age'));    // return true
console.log(store.has('animal')); // return false
store.on('change:name', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});
store.add('name', 'emma');
store.on('change:name', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});
store.add('name', 'john');
store.on('change:age', (old_val, new_val, key)=>{console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`)});
store.add('age', 26);
store.add('age', 28);
store.on('change:age', (old_val, new_val, key)=>{console.log(`${old_val > new_val ? 'older now' : 'young now'}`)});
store.add('age', 27);
store.add('age', 45);

