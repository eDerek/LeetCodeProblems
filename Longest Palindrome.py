# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation:
# One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Example 3:

# Input: s = "bb"
# Output: 2
 

# Constraints:

# 1 <= s.length <= 2000
# s consits of lower-case and/or upper-case English letters only.

class Solution:
    def longestPalindrome(self, s: str) -> int:
        sArray = list(s)
        myMap = {}
        result = 0
        for c in sArray:
            if c in myMap:
                myMap[c] += 1
            else:
                myMap[c] = 1
        # print(myMap)
        x = 0
        for value in myMap.values():
            if value%2 == 0:
                result += value
            elif x == 0:
                result += value
                x = 1
            else:
                result += (value-1)
        return result

# print(Solution().longestPalindrome('abccccdd'))
# print(Solution().longestPalindrome('a'))
# print(Solution().longestPalindrome('bb'))
print(Solution().longestPalindrome('ccc'))
# print(Solution().longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))