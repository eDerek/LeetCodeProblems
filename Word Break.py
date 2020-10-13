# Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

# Note:

# The same word in the dictionary may be reused multiple times in the segmentation.
# You may assume the dictionary does not contain duplicate words.
# Example 1:

# Input: s = "leetcode", wordDict = ["leet", "code"]
# Output: true
# Explanation: Return true because "leetcode" can be segmented as "leet code".
# Example 2:

# Input: s = "applepenapple", wordDict = ["apple", "pen"]
# Output: true
# Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
#              Note that you are allowed to reuse a dictionary word.
# Example 3:

# Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
# Output: false

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        mySet = set(wordDict)
        lengthSet = {0}
        cacheMap = {}
        for word in wordDict:
            lengthSet.add(len(word))
        # print(mySet)
        def go(currS: str) -> bool:
            if currS in cacheMap:
                return cacheMap[currS]
            if len(currS) == 1:
                return currS in mySet
            for i in range(len(currS), 0, -1):
                # print(currS[0:i])
                if not i in lengthSet:
                    continue
                if not currS[0:i] in mySet:
                    continue
                if i==len(currS):
                    cacheMap[currS] = True
                    return True
                nextResult = go(currS[i:])
                if nextResult:
                    return True
            cacheMap[currS] = False
            return False
        return go(s)

print(Solution().wordBreak('leetcode', ["leet", "code"]))
print(Solution().wordBreak('applepenapple', ["apple", "pen"]))
print(Solution().wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))
print(Solution().wordBreak('a', ["a"]))
print(Solution().wordBreak('ab', ["a",'b']))