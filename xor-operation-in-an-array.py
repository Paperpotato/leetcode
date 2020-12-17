class Solution(object):
    def xorOperation(self, n, start):
        """
        :type n: int
        :type start: int
        :rtype: int
        """
        arr = []
        for i in range(n):
            arr.append(start + 2 * i)
        output = 0
        for i, el in enumerate(arr):
            output ^= el
        return output
        

meow = Solution()
print(meow.xorOperation(4, 3))