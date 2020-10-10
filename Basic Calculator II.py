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
        # print(int(-10/3))
        s = s.replace(' ','')
        sArray = list(s)
        values = []
        opts = []
        currVal = 0

        def haha() -> int:
            if len(opts) > 0 and opts[-1] == '*':
                lastVal = values.pop()
                opts.pop()
                return lastVal*currVal
            if len(opts) > 0 and opts[-1] == '/':
                lastVal = values.pop()
                # print(lastVal)
                opts.pop()
                return int(lastVal/currVal)
            return currVal
        
        for c in sArray:
            if c.isnumeric():
                currVal = currVal*10+int(c)
                continue

            currVal = haha()

            values.append(currVal)
            opts.append(c)
            currVal = 0
        
            # if c=='+':
            #     values.append(currVal)
            #     opts.append('+')
            #     currVal = 0
            # elif c=='-':
            #     values.append(currVal)
            #     opts.append('-')
            #     currVal = 0
            # elif c=='*':
            #     values.append(currVal)
            #     opts.append('*')
            #     currVal = 0
            # elif c=='/':
            #     values.append(currVal)
            #     # print(currVal,'-----------------')
            #     opts.append('/')
            #     currVal = 0
        # print(values)
        currVal = haha()
        
        values.append(currVal)
        # print(values, opts)

        result = values[0]
        for i in range(0, len(opts)):
            if opts[i] == '+':
                result += values[i+1]
            else:
                result -= values[i+1]
        return result

    # Not correct ------------------------------
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

print(Solution().calculate('3+5 / 2*3-8-9/3'))