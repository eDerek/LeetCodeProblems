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
var addTwoNumbers = function(l1, l2) {
    let x = 0;
    let firstL2 = l2;
    let lastL2 = l2;
    while(l1 != null || l2 != null || x == 1){
        if(l2 != null){
           lastL2 = l2;
        }
        if(l1 != null && l2 != null){
           let result = l1.val + l2.val + x;
           if(result > 9){
              x = 1;
              result = result - 10;
              }else{
                  x = 0;
              }
            l2.val = result;
            l1 = l1.next;
            l2 = l2.next;
        }else if(l1 == null && l2 != null){
            let result = l2.val + x;
            if(result > 9){
              x = 1;
              result = result - 10;
              }else{
                  x = 0;
              }
            l2.val = result;
            l2 = l2.next;
        }else if(l1 != null && l2 == null){
            let result = l1.val + x;
            if(result > 9){
              x = 1;
              result = result - 10;
              }else{
                  x = 0;
              }
            let newNode = new ListNode(result);
            lastL2.next = newNode;
            lastL2 = newNode;
            l1 = l1.next;
        }else if(l1 == null && l2 == null){
             let newNode = new ListNode(1);
            lastL2.next = newNode;
            x = 0;
        }
    }
    return firstL2;
};