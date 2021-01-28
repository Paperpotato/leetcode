class Solution(object):
    def oddCells(self, n, m, indices):
        """
        :type n: int
        :type m: int
        :type indices: List[List[int]]
        :rtype: int
        """
        matrix = [[0] * m for _ in range(n)]
        count = 0
        for index_index, index in enumerate(indices):
            row = index[0]
            col = index[1]
            for i in range(n):
                matrix[i][col] += 1
            for j in range(m):
                matrix[row][j] += 1

        for i in range(n):
            for j in range(m):
                if matrix[i][j] % 2 != 0:
                    count += 1
        return count


meow = Solution()

print(meow.oddCells(2, 3, [[0,1], [1,1]]))