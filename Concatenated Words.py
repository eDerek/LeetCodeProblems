# Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
# A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

# Example:
# Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

# Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

# Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
#  "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
# "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

from typing import List

class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        myCatch = {}
        result = []
        wordsSet = set(words)
        def go(word):
            if word in myCatch and myCatch[word] == 0:
                return False
            for i in range(1, len(word)):
                s1 = word[0:i]
                s2 = word[i:len(word)]
                r1 = (s1 in myCatch and myCatch[s1] == 1) or (s1 in wordsSet)
                r2 = (s2 in myCatch and myCatch[s2] == 1) or (s2 in wordsSet)
                if (r1 and r2) or (r1 and go(s2)):
                    myCatch[word] = 1
                    return True
            myCatch[word] = 0
            return False
        for word in words:
            if go(word):
                result.append(word)
        return result

print(Solution().findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]))