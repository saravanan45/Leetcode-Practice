// 15. https://leetcode.com/problems/3sum/description/


function threeSum(nums) {
    nums.sort((a,b) => a - b)
    const result = []
    // no need to iterate fully as we need triplets
    for(let i=0; i<nums.length - 2; i++) {
        let target = nums[i]
        let j = i+1;
        let k = nums.length - 1
        // avoid duplicates for i
        if(i>0 && nums[i] === nums[i-1]) continue;

        if(nums[i] > 0) break; // since array is sorted no need to proceed further(always value is > 0)


        while(j<k) {
            if(target + nums[j] + nums[k] > 0) {
                k--;
            } 
            else if(target + nums[j] + nums[k] < 0) {
                j++
            } else {
                result.push([nums[i], nums[j], nums[k]])
                // avoid duplicates for j and k
                while(j<k && nums[j] === nums[j+1]) j++;
                while(j<k && nums[k] === nums[k-1]) k--;
                // move pointers
                k--;
                j++;
            }
        }
        
    }
    return result;


}

console.log(threeSum([-1,0,1,2,-1,-4]))


// O(n * n)

