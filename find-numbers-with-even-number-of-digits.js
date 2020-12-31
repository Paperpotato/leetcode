/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i ++) {
        let el = nums[i].toString().split('')
        if (el.length % 2 == 0) {
            count ++
        }
    }
    return count
};

console.log(findNumbers([12,345,2,6,7896]))


//Python solutions
// class Solution(object):
//     def findNumbers(self, nums):
//         """
//         :type nums: List[int]
//         :rtype: int
//         """
//         output = 0
//         for num in nums:
//             output += 1 if len([c for c in str(num)]) % 2 == 0 else 0
//         return output

//Python one-liner
// class Solution(object):
// def findNumbers(self, nums):
//     """
//     :type nums: List[int]
//     :rtype: int
//     """
//     return sum([len([c for c in str(num)]) % 2 == 0 for num in nums])
        
        
            
            
            
        