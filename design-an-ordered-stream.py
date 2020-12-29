class OrderedStream(object):
    
    def __init__(self, n):
        """
        :type n: int
        """
        self.stream = [None] * (n + 2)
        self.ptr = 1
        

    def insert(self, id, value):
        """
        :type id: int
        :type value: str
        :rtype: List[str]
        """
        self.stream[id] = value
        if self.ptr == id:
            while self.stream[self.ptr] is not None:
                self.ptr += 1
            return self.stream[id:self.ptr]
        return []
        


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(id,value)