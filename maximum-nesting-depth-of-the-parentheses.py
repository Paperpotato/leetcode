class Solution(object):
    def maxDepth(self, s):
        """
        :type s: str
        :rtype: int
        """
        output = 0
        max_depth = depth = 0
        for c in s:
            if c == '(':
                depth += 1
            elif c == ')':
                depth -= 1
            max_depth = max(depth, max_depth)
        return max_depth

meow = Solution()
print(meow.maxDepth('(1+(2*3)+((8)/4))+1'))