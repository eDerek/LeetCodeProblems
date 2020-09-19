# Implement a basic calculator to evaluate a simple expression string.

# The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

# Example 1:

# Input: "3+2*2"
# Output: 7
# Example 2:

# Input: " 3/2 "
# Output: 1
# Example 3:

# Input: " 3+5 / 2 "
# Output: 5
# Note:

# You may assume that the given expression is always valid.
# Do not use the eval built-in library function.

class Solution:
    def calculate(self, s: str) -> int:
        s = s.replace(' ','')
        sArray = list(s)
        result = 0
        values = []
        opts = []
        currVal = 0
        x = 1
        lastOpt = '+'
        for c in sArray:
            if c=='+':
                lastOpt = c
                values.append(currVal)
                opts.append('+')
                currVal = 0
                x = 1
            elif c=='-':
                lastOpt = c
                values.append(currVal)
                opts.append('-')
                currVal = 0
                x = 1
            elif c=='*':
                lastOpt = c
                values.append(currVal)
                opts.append('*')
                currVal = 0
            elif c=='/':
                lastOpt = c
                values.append(currVal)
                opts.append('/')
                currVal = 0
            else:
                currVal = currVal*10+int(c)
        values.append(currVal)
        print(values, opts)
        valueStack = [values[0]]
        return result

    def go(self, sArray) -> int:
        print(sArray)
        valStr = ''
        x = 1
        for c in sArray:
            if c=='+':
                return int(valStr)+self.go(sArray[len(valStr)+1:])
            elif c=='-':
                return int(valStr)-self.go(sArray[len(valStr)+1:])
            elif c=='*':
                print(0)
            elif c=='/':
                print(0)
            else:
                valStr += c
        return int(valStr)
            

print(Solution().calculate('3+2*2'))
print(Solution().calculate('3/2'))
print(Solution().calculate(' 3+5 / 2 '))

print(Solution().calculate('13+2-37+912'))