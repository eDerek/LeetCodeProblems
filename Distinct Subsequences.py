# Given a string S and a string T, count the number of distinct subsequences of S which equals T.

# A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

# It's guaranteed the answer fits on a 32-bit signed integer.

# Example 1:

# Input: S = "rabbbit", T = "rabbit"
# Output: 3
# Explanation:
# As shown below, there are 3 ways you can generate "rabbit" from S.
# (The caret symbol ^ means the chosen letters)

# rabbbit
# ^^^^ ^^
# rabbbit
# ^^ ^^^^
# rabbbit
# ^^^ ^^^
# Example 2:

# Input: S = "babgbag", T = "bag"
# Output: 5
# Explanation:
# As shown below, there are 5 ways you can generate "bag" from S.
# (The caret symbol ^ means the chosen letters)

# babgbag
# ^^ ^
# babgbag
# ^^    ^
# babgbag
# ^    ^^
# babgbag
#   ^  ^^
# babgbag
#     ^^^

from typing import List
class Solution:
    result = 0
    def numDistinct(self, s: str, t: str) -> int:
        if len(s)<len(t):
            return 0
        self.result = 0
        sArray = list(s)
        tArray = list(t)
        tSet = set(t)
        # tDistinctArray = []
        sMap = {}
        usedCharPositionMap = {}
        for i in range(len(s)):
            if not sArray[i] in tSet:
                continue
            if sArray[i] in sMap:
                sMap[sArray[i]].append(i)
            else:
                sMap[sArray[i]] = [i]
                # tDistinctArray.append(sArray[i])
        # print(sMap)
        # print(tSet)
        # def getNextStartIdx(targetIdx, idxArray) -> int:
        #     for idx in idxArray:
        #         if idx>targetIdx:
        #             return idx
        #     return -1
        
        # result = 0

        def go(targetIdx, currTDistinctIdx):
            if currTDistinctIdx == len(tArray):
                return
            # print(targetIdx, tArray[currTDistinctIdx])
            if not tArray[currTDistinctIdx] in sMap:
                return
            if not tArray[currTDistinctIdx] in usedCharPositionMap:
                usedCharPositionMap[tArray[currTDistinctIdx]] = 0
            for i in range(usedCharPositionMap[tArray[currTDistinctIdx]], len(sMap[tArray[currTDistinctIdx]])):
                idx = sMap[tArray[currTDistinctIdx]][i]
            # for idx in sMap[tArray[currTDistinctIdx]]:
                if idx <= targetIdx:
                    continue
                # print(targetIdx, currTDistinctIdx, idx)
                usedCharPositionMap[tArray[currTDistinctIdx]] = i
                if currTDistinctIdx == len(tArray)-1:
                    self.result += 1
                go(idx, currTDistinctIdx+1)
            usedCharPositionMap[tArray[currTDistinctIdx]] = 0

        go(-1, 0)
        return self.result

# print(Solution().numDistinct('rabbbit','rabbit'))
# print(Solution().numDistinct('babgbag','bag'))
# print(Solution().numDistinct('eee','eee'))
# print(Solution().numDistinct('b','a'))
# print(Solution().numDistinct('aabb','ab'))
print(Solution().numDistinct("daacaedaceacabbaabdccdaaeaebacddadcaeaacadbceaecddecdeedcebcdacdaebccdeebcbdeaccabcecbeeaadbccbaeccbbdaeadecabbbedceaddcdeabbcdaeadcddedddcececbeeabcbecaeadddeddccbdbcdcbceabcacddbbcedebbcaccac","ceadbaa"))