class Solution(object):
    def createTargetArray(self, nums, index):
        """
        :type nums: List[int]
        :type index: List[int]
        :rtype: List[int]
        """
        target = []
        for index, i in enumerate(index):
            target.insert(i, nums[index])
        return target
        
meow = Solution()
print(meow.createTargetArray([0,1,2,3,4], [0,1,2,2,1]))