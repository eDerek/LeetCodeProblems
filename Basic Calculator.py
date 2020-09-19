# Implement a basic calculator to evaluate a simple expression string.

# The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

# Example 1:

# Input: "1 + 1"
# Output: 2
# Example 2:

# Input: " 2-1 + 2 "
# Output: 3
# Example 3:

# Input: "(1+(4+5+2)-3)+(6+8)"
# Output: 23
# Note:
# You may assume that the given expression is always valid.
# Do not use the eval built-in library function.

import re

class Solution:
    flag = False
    def calculate(self, s: str) -> int:
        if not self.flag:
            s = s.replace(' ','')
            self.flat = True
        subEs = re.findall(r'\([\d+-]+\)', s)
        if len(subEs) == 0:
            return self.simpleExpress(s)
        for sub in subEs:
            valStr = str(self.simpleExpress(sub.replace('(','').replace(')','')))
            s = s.replace(sub, valStr, 1).replace('+-','-', 1).replace('--','+',1)
        # print(s)
        return self.calculate(s)

    def simpleExpress(self, s:str) -> int:
        # print(s)
        sArray = list(s)
        result = 0
        currOpt = 1
        currVal = 0
        for c in sArray:
            if c=='+':
                # print(currVal)
                result += currOpt*currVal
                currVal = 0
                currOpt = 1
            elif c=='-':
                result += currOpt*currVal
                currVal = 0
                currOpt = -1
            else:
                currVal = currVal*10+int(c)
        result += currOpt*currVal
        # print(result)
        return result

print(Solution().calculate('1 + 1'))
print(Solution().calculate('2-1 + 2'))
print(Solution().calculate('4+5+2'))
print(Solution().calculate('(1+(4+5+2)-3)+(6+8)'))
print(Solution().calculate('2-(5-6)'))