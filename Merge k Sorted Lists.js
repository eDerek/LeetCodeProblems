/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 1){
        return lists[0];
    }
    let result = null;
    if(lists.length == 0){
        return null;
    }
    let currNode = null;
    while(true){
        let tempMinNode = lists[0];
        let temmMinIdx = 0;
        let nullCounter = 0;
        for(let i=0;i<lists.length;i++){
            if(!lists[i]){
                nullCounter++;
            }else{
                if(!tempMinNode || (tempMinNode && lists[i].val <= tempMinNode.val)){
                    tempMinNode = lists[i];
                    temmMinIdx = i;
                }
            }
        }
        if(nullCounter == lists.length){
            break;
        }
        lists[temmMinIdx] = lists[temmMinIdx].next;
        if(!result){
            result = tempMinNode;
            currNode = result;
            continue;
        }
        currNode.next = tempMinNode;
        currNode = currNode.next;
    }
    return result;
};

