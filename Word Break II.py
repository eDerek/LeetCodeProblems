# Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

# Note:

# The same word in the dictionary may be reused multiple times in the segmentation.
# You may assume the dictionary does not contain duplicate words.
# Example 1:

# Input:
# s = "catsanddog"
# wordDict = ["cat", "cats", "and", "sand", "dog"]
# Output:
# [
#   "cats and dog",
#   "cat sand dog"
# ]
# Example 2:

# Input:
# s = "pineapplepenapple"
# wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
# Output:
# [
#   "pine apple pen apple",
#   "pineapple pen apple",
#   "pine applepen apple"
# ]
# Explanation: Note that you are allowed to reuse a dictionary word.
# Example 3:

# Input:
# s = "catsandog"
# wordDict = ["cats", "dog", "sand", "and", "cat"]
# Output:
# []

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        mySet = set(wordDict)
        cacheSet = {''}
        result = []
        currStack = []
        
        def go(currS: str):
            # print(currS)
            if currS in cacheSet:
                if len(currStack) > 0:
                    currStack.pop()
                return
            
            # This part seems unnecessary-------
            if len(currS) == 1:
                if currS in mySet:
                    currStack.append(currS)
                    addToResult()
                    currStack.pop()
                if len(currStack) > 0:
                    currStack.pop()
                return
            #------------------------

            resultCount = len(result)
            for i in range(len(currS), 0, -1):
                # print(currS[0:i])
                if not currS[0:i] in mySet:
                    continue

                currStack.append(currS[0:i])
                if i==len(currS):
                    addToResult()
                    # currStack.pop()
                go(currS[i:])
            if len(currStack) > 0:
                currStack.pop()
            if len(result) == resultCount:
                cacheSet.add(currS)

        def addToResult():
            result.append(' '.join(currStack))
        
        go(s)
        return result

print(Solution().wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"]))
print(Solution().wordBreak('pineapplepenapple', ["apple", "pen", "applepen", "pine", "pineapple"]))
print(Solution().wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))
print(Solution().wordBreak('abcd', ["a", "abc", "b", "cd"]))
# print(Solution().wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
# print(Solution().wordBreak('aaaaaaaaaa', ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))