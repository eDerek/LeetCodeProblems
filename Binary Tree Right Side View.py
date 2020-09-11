# Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

# Example:

# Input: [1,2,3,null,5,null,4]
# Output: [1, 3, 4]
# Explanation:

#    1            <---
#  /   \
# 2     3         <---
#  \     \
#   5     4       <---

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

import queue
class Solution:
    def rightSideView(self, root: TreeNode):
        if not root:
            return []
        result = []
        myQueue = queue.Queue()
        myQueue.put(root)
        while not myQueue.empty():
            currSize = myQueue.qsize()
            for i in range(currSize):
                node = myQueue.get()
                # print(node.val)
                if i==currSize-1:
                    result.append(node.val)
                if node.left:
                    myQueue.put(node.left)
                if node.right:
                    myQueue.put(node.right)
        return result

Solution().rightSideView(TreeNode(6))
