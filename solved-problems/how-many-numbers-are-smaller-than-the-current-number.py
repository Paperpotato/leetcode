class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        output = []
        for iIndex, i in enumerate(nums):
            total = 0
            for jIndex, j in enumerate(nums):
                if iIndex != jIndex and j < i:
                    total += 1
            output.append(total)
        return output
    
        