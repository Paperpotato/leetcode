class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        return address.replace('.', '[.]')
        
meow = Solution()

print(meow.defangIPaddr('1.1.1.1'))