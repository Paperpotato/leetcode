class Solution(object):
    def balancedStringSplit(self, s):
        """
        :type s: str
        :rtype: int
        """
        l_count = r_count = 0
        balanced_count = 0
        for c in s:
            l_count += 1 if c == 'L' else 0
            r_count += 1 if c == 'R' else 0
            if l_count == r_count:
                balanced_count += 1
                l_count = r_count = 0
        return balanced_count
        