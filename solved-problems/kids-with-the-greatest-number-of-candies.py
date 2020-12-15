class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        output = []
        max_number_of_candies = max(candies)
        for candy in candies:
            possible_new_max = candy + extraCandies
            output.append(True if possible_new_max >= max_number_of_candies else False)
        return output
        

meow = Solution()

print(meow.kidsWithCandies([4,2,1,1,2], 1))