/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
      // Store next node
      next = current.next;
      // Reverse current node's pointer
      current.next = prev; // null
      // Move pointers one position ahead
      prev = current;
      current = next;
  }

  return prev;
};

// Time complexity: O(n)
// Space complexity: O(1)

// Iteration 1:
// next = current.next;  // next = 2 -> 3 -> 4 -> 5
// current.next = prev;  // 1 -> null
// prev = current;       // prev = 1 -> null
// current = next;       // current = 2 -> 3 -> 4 -> 5

// Iteration 2:
// next = current.next;  // next = 3 -> 4 -> 5
// current.next = prev;  // 2 -> 1 -> null
// prev = current;       // prev = 2 -> 1 -> null
// current = next;       // current = 3 -> 4 -> 5

// Iteration 3:
// next = current.next;  // next = 4 -> 5
// current.next = prev;  // 3 -> 2 -> 1 -> null
// prev = current;       // prev = 3 -> 2 -> 1 -> null
// current = next;       // current = 4 -> 5

// Iteration 4:
// next = current.next;  // next = 5
// current.next = prev;  // 4 -> 3 -> 2 -> 1 -> null
// prev = current;       // prev = 4 -> 3 -> 2 -> 1 -> null
// current = next;       // current = 5

// Iteration 5:
// next = current.next;  // next = null
// current.next = prev;  // 5 -> 4 -> 3 -> 2 -> 1 -> null
// prev = current;       // prev = 5 -> 4 -> 3 -> 2 -> 1 -> null
// current = next;       // current = null

// if you want to do it recursively, you can do it like this:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // Base case: if head is null or only one node, it's already reversed
  if (head === null || head.next === null) {
      return head;
  }
  
  // Recursive case: reverse the rest of the list
  let newHead = reverseList(head.next);
  
  // Adjust the pointers
  head.next.next = head;
  head.next = null;
  
  return newHead;
};

// Time complexity: O(n)
// Space complexity: O(n) due to the recursive stack

// First Recursive Call:

// head = 1
// head.next = 2
// Call reverseList(2 -> 3 -> 4 -> 5)
// Second Recursive Call:

// head = 2
// head.next = 3
// Call reverseList(3 -> 4 -> 5)
// Third Recursive Call:

// head = 3
// head.next = 4
// Call reverseList(4 -> 5)
// Fourth Recursive Call:

// head = 4
// head.next = 5
// Call reverseList(5)
// Base Case:

// head = 5
// Since head.next === null, return head
// Now, we start unwinding the recursion:

// Returning from Fourth Call:

// newHead = 5
// head = 4
// head.next.next = head (i.e., 5.next = 4)
// head.next = null (i.e., 4.next = null)
// Return newHead (i.e., 5 -> 4)
// Returning from Third Call:

// newHead = 5 -> 4
// head = 3
// head.next.next = head (i.e., 4.next = 3)
// head.next = null (i.e., 3.next = null)
// Return newHead (i.e., 5 -> 4 -> 3)
// Returning from Second Call:

// newHead = 5 -> 4 -> 3
// head = 2
// head.next.next = head (i.e., 3.next = 2)
// head.next = null (i.e., 2.next = null)
// Return newHead (i.e., 5 -> 4 -> 3 -> 2)
// Returning from First Call:

// newHead = 5 -> 4 -> 3 -> 2
// head = 1
// head.next.next = head (i.e., 2.next = 1)
// head.next = null (i.e., 1.next = null)
// Return newHead (i.e., 5 -> 4 -> 3 -> 2 -> 1)