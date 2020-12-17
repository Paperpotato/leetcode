class Solution(object):
    def subtractProductAndSum(self, n):
        """
        :type n: int
        :rtype: int
        """
        product = 1
        sums = 0
        for val in [int(num) for num in str(n)]:
            product *= val
            sums += val
        return product - sums

meow = Solution()
print(meow.subtractProductAndSum(234))