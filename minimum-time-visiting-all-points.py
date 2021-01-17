class Solution(object):
    def minTimeToVisitAllPoints(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        for i, point in enumerate(points):
            print(i)
            if points[i][0] == points[i + 1][0] or points[i + 1][1] == points[i + 1][1]:
                2
        return meow

            
        
meow = Solution()

print(meow.minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))