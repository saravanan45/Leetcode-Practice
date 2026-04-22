// 160. Intersection of Two Linked Lists

getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }

    return p1;
};

// time complexity: O(n) where n is the length of the longer linked list between headA and headB
// space complexity: O(1) since we are using constant extra space for the two pointers p1 and p2