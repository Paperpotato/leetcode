class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        # nums[:] = set(nums)
        for _ in range(nums.count(val)):
            nums.remove(val)
        return len(nums)

meow = Solution()
print(meow.removeElement([0,1,2,2,3,0,4,2], 2))
        