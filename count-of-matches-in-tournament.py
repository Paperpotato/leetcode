# class Solution(object):
#     def numberOfMatches(self, n):
#         """
#         :type n: int
#         :rtype: int
#         """
#         output = 0
#         while n != 1:
#             if n % 2 == 0:
#                 output += n / 2
#                 n = n / 2
#             elif n % 2 == 1: 
#                 output += (n - 1) / 2
#                 n = int(n / 2) + 1
#         return int(output)


class Solution(object):
    def numberOfMatches(self, n):
        return n - 1

meow = Solution()
print(meow.numberOfMatches(7))
print(meow.numberOfMatches(14))
