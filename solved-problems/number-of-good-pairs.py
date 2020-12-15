class Solution(object):
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        hashTable = {}

        for n in nums:
            if n in hashTable:
                count += hashTable[n]
                hashTable[n] += 1
            else:
                hashTable[n] = 1

        return count

meow = Solution()

print(meow.numIdenticalPairs([1,2,3, 1]))

#This is a hash table solution.