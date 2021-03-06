# Return any binary tree that matches the given preorder and postorder traversals.

# Values in the traversals pre and post are distinct positive integers.

 

# Example 1:

# Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
# Output: [1,2,3,4,5,6,7]
 

# Note:

# 1 <= pre.length == post.length <= 30
# pre[] and post[] are both permutations of 1, 2, ..., pre.length.
# It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import List

class Solution:
    def constructFromPrePost(self, pre: List[int], post: List[int]) -> TreeNode:
        L = len(pre)
        postDic = {}
        for i in range(L):
            postDic[post[i]] = i
        # print(postDic)
        def go(preRootIdx, childrenAmount, postMostLeftIdx) -> TreeNode:
            if preRootIdx >= L or childrenAmount < 0 or postMostLeftIdx < 0:
                return None
            print(preRootIdx, childrenAmount, postMostLeftIdx)
            node = TreeNode(pre[preRootIdx])
            if childrenAmount == 0:
                return node
            nextPostLeftRootIdx = postDic[pre[preRootIdx+1]]
            node.left = go(preRootIdx+1, nextPostLeftRootIdx-postMostLeftIdx, postMostLeftIdx)
            print('----------')
            node.right = go(preRootIdx+nextPostLeftRootIdx-postMostLeftIdx+2, childrenAmount-(nextPostLeftRootIdx-postMostLeftIdx+1)-1, nextPostLeftRootIdx+1)
            return node
        return go(0, L-1, 0)

Solution().constructFromPrePost([1,2,4,5,3,6,7],[4,5,2,6,7,3,1])
# Solution().constructFromPrePost([1,2],[2,1])