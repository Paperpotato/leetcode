class Solution(object):
    def restoreString(self, s, indices):
        """
        :type s: str
        :type indices: List[int]
        :rtype: str
        """
        output = [None] * len(indices)
        split_string = [c for c in s]
        for i, val in enumerate(indices):
            output[val] = split_string[i]
        return ''.join(output)

meow = Solution()
print(meow.restoreString('codeleet', [4,5,6,7,0,2,1,3]))