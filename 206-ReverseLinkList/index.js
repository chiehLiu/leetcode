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
      next = current.next; //2
      // Reverse current node's pointer
      current.next = prev; // null
      // Move pointers one position ahead
      prev = current; // 1
      current = next;
  }

  return prev;
};