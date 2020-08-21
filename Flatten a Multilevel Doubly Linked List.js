// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(head){
        go(head);
    }
    return head;
};

function go(node){
    let childHead = node.child;
    let next = node.next;
    if(!childHead && !next){
        return node;
    }
    if(childHead){
        node.next = childHead;
        node.child = null;
        childHead.prev = node;
        let tempEnd = go(childHead);
        if(next){
            next.prev = tempEnd;
            tempEnd.next = next;
        }
    }
    if(next){
        return go(next);
    }

    // let childEnd = childHead;
    // go(childHead);
    // while(childEnd.next){
    //     childEnd = childEnd.next;
    //     go(childEnd);
    // }
    
    // if(next){
    //     next.prev = childEnd;
    //     childEnd.next = next;
    //     go(next);
    // }
}