# A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

# For example, these are arithmetic sequences:

# 1, 3, 5, 7, 9
# 7, 7, 7, 7
# 3, -1, -5, -9
# The following sequence is not arithmetic.

# 1, 1, 2, 5, 7
 
# A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

# A slice (P, Q) of the array A is called arithmetic if the sequence:
# A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

# The function should return the number of arithmetic slices in the array A.

 
# Example:

# A = [1, 2, 3, 4]

# return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

from typing import List

class Solution:
    def numberOfArithmeticSlices(self, A: List[int]) -> int:
        if len(A) < 3:
            return 0
        result = 0
        currStep = 0
        counter = 0
        for i in range(1, len(A)):
            # print(counter)
            if counter == 0:
                counter = 1
                currStep = A[i]-A[i-1]
                continue
            
            if A[i]-A[i-1] == currStep:
                counter += 1
            elif counter > 1:
                result += self.calculate(counter+1)
                counter = 1
                currStep = A[i]-A[i-1]
            else:
                counter = 1
                currStep = A[i]-A[i-1]
        result += self.calculate(counter+1)
        return result

    def calculate(self, x: int) -> int:
        # print(x,'-----')
        # result = 0
        # for i in range(3, x+1):
        #     result += (x-i+1)
        # return result
        return (x-2)*(x-1)//2

print(Solution().numberOfArithmeticSlices([1, 2, 3, 4,6,8,10,11,16,-2]))
print(Solution().numberOfArithmeticSlices([1, 2, 3, 4]))
# print(Solution().calculate(4))