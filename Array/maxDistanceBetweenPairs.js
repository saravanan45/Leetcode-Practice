// 1855. Maximum Distance Between a Pair of Values
var maxDistance = function(nums1, nums2) {
    if(nums1.length<= 0 || nums2.length <= 0) {
        return 0
    }

    let p1 = 0, p2 = 0
    let maxDistance = 0

    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] <= nums2[p2]) {
            maxDistance = Math.max(maxDistance, p2 - p1);
            p2++;
        } else {
            p1++;
            // p2++;
        }
    }
    return maxDistance
    
};

const nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
maxDistance(nums1, nums2)

// time complexity: O(n) where n is the length of the longer array between nums1 and nums2
// space complexity: O(1) since we are using constant extra space