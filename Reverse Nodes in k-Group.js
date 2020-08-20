// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k==1){
        return head;
    }
    let currNode = head;
    let groupCounter = 0;
    let newHead = head;
    let lastGroupEnd = null;
    while(groupCounter == 0 || currNode){
        let kArray = [];
        for(let i=0;i<k;i++){
            if(!currNode){
                break;
            }
            kArray.push(currNode);
            if(currNode.next){
                currNode = currNode.next;
            }else{
                currNode = null;
                break;
            }
        }
        if(kArray.length == 0){
            break;
        }
        if(kArray.length != k && kArray.length > 0){
            if(lastGroupEnd){
                lastGroupEnd.next = kArray[0];
            }
            break;
        }
        groupCounter++;
        
        if(groupCounter == 1){
            newHead = kArray[kArray.length-1];
        }
        let tempNode = null;
        // console.log(kArray);
        for(let i=k-1;i>=0;i--){
            if(i==k-1){
                tempNode = kArray[k-1];
                if(lastGroupEnd){
                    lastGroupEnd.next = kArray[k-1];
                }
                continue;
            }
            // console.log(tempNode);
            tempNode.next = kArray[i];
            tempNode = tempNode.next;
        }

        // The index 0 will be the last----------
        lastGroupEnd = kArray[0];
        // Must has this----
        kArray[0].next = null;
    }
    return newHead;
};

// NOT finished---------------------------