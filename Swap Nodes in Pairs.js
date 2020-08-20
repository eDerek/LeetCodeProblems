// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

 

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

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
var swapPairs = function(head) {
    let k = 2;
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