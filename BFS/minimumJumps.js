// 3629. Minimum Jumps to Reach End via Prime Teleportation

var minJumps = function(nums) {
    function checkIfPrime(num) {
        if(num <= 1) {
            return false;
        }

        for(let i = 2; i * i <= num; i++) {
            if(num % i === 0) {
                return false;
            }
        }

        return true;
    }

    if(nums.length < 2) return 0;

    let jumps = 0;
    let queue = [0];
    let visited = new Set([0]);

    while(queue.length > 0) {
        let size = queue.length;

        for(let i = 0; i<size; i++) {
            const pos = queue.shift();

            if(pos === nums.length - 1) {
                return jumps;
            }

            if(pos - 1 >= 0 && !visited.has(pos - 1)) {
                queue.push(pos - 1);
                visited.add(pos - 1);
            }

            if(pos + 1 < nums.length && !visited.has(pos + 1)) {
                queue.push(pos + 1);
                visited.add(pos + 1);
            }

            const num = nums[pos];

            if(checkIfPrime(num)) {
                for(let j = 0; j < nums.length; j++) {
                    if(j !== pos && nums[j] % num === 0 && !visited.has(j)) {
                        queue.push(j);
                        visited.add(j)
                    }
                }
            }
        }
        jumps++;
    }
    return -1;
};

