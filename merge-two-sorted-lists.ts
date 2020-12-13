

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
  

}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list


};


mergeTwoLists([1, 2, 3], [2, 3, 4])















// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode[] | null {
//   // let output: ListNode[] = []
//   let list = new ListNode()
//   let head = list

//   while (l1 !== null && l2 !== null) {
//     if (l1.val < l2.val) {

//     }
//   }


//   return []
// };

// console.log(mergeTwoLists([], []))