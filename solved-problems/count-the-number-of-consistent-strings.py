####### Long answer

# class Solution(object):
#     def countConsistentStrings(self, allowed, words):
#         """
#         :type allowed: str
#         :type words: List[str]
#         :rtype: int
#         """
#         output = 0
#         for word in words:
#             to_add = True
#             for char in word:
#                 if char not in allowed:
#                     to_add = False
#             output += 1 if to_add else 0

#         return output


####### Short answer

class Solution(object):
    def countConsistentStrings(self, allowed, words):
        """
        :type allowed: str
        :type words: List[str]
        :rtype: int
        """
        return sum(all(c in allowed for c in w) for w in words)
        
meow = Solution()
print(meow.countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"]))