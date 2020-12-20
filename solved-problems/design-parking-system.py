class ParkingSystem(object):
    
    def __init__(self, big, medium, small):
        """
    :type big: int
    :type medium: int
    :type small: int
    """
    self.array = [big, medium, small]
        

    def addCar(self, carType):
        """
        :type carType: int
        :rtype: bool
        """
        self.array[carType - 1] -= 1
        return True if self.array[carType - 1] >= 0 else False
        


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)

meow = ParkingSystem(1, 1, 0)
print(meow.addCar(1))
print(meow.addCar(2))
print(meow.addCar(3))
print(meow.addCar(1))
