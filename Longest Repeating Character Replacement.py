# Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

# In one operation, you can choose any character of the string and change it to any other uppercase English character.

# Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

# Note:
# Both the string's length and k will not exceed 104.

# Example 1:

# Input:
# s = "ABAB", k = 2

# Output:
# 4

# Explanation:
# Replace the two 'A's with two 'B's or vice versa.
 

# Example 2:

# Input:
# s = "AABABBA", k = 1

# Output:
# 4

# Explanation:
# Replace the one 'A' in the middle with 'B' and form "AABBBBA".
# The substring "BBBB" has the longest repeating letters, which is 4.
from typing import List

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        L = len(s)
        if L <= k:
            return L
        sArray = list(s)
        myMap = {}
        for i in range(0,L):
            if sArray[i] in myMap:
                myMap[sArray[i]].append(i)
            else:
                myMap[sArray[i]] = [i]
        print(myMap)
        result = 0
        for myList in myMap.values():
            temp = self.go(myList, L, k)
            if temp > result:
                result = temp
        return result

    def go(self, myList: List, L: int, k: int) -> int:
        b = myList[-1]-myList[0]+1-len(myList)
        if b <= k:
            return len(myList)+k
        -----
        return 0

# print(Solution().characterReplacement("ABAB", 2))
print(Solution().characterReplacement("AABABBA", 1))