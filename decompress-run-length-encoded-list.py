class Solution(object):
    def decompressRLElist(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        output = []
        for i, n in enumerate(nums):
            if i % 2 == 0:
                for _ in range(nums[i]):
                    output.append(nums[i + 1])
        return output

meow = Solution()
print(meow.decompressRLElist([1,1,2,3]))