// 1669. Merge In Between Linked Lists

var mergeInBetween = function (list1, a, b, list2) {
    let dummyNode = new ListNode(0);
    dummyNode.next = list1;

    // Move prev to node before index a
    let prev = dummyNode;
    for (let i = 0; i < a; i++) {
        prev = prev.next;
    }

    // Move tail to node after index b
    let tail = prev;
    for (let i = 0; i <= b - a + 1; i++) {
        tail = tail.next;
    }

    // Find end of list2
    let list2Tail = list2;
    while (list2Tail.next) {
        list2Tail = list2Tail.next;
    }

    // Connect
    prev.next = list2;
    list2Tail.next = tail;

    return dummyNode.next;

};

mergeInBetween([0, 1, 2, 3, 4, 5], 3, 4, [1000000, 1000001, 1000002])

// time complexity - O(n + m) where n is the length of list1 and m is the length of list2
// space complexity - O(1) as we are modifying the list in place without using any extra space