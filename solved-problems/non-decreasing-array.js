/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length - 1; i ++) {
        // count += nums[i] > nums[i + 1] ? 1 : 0
        if (nums[i] > nums[i + 1]) {
            if (i < nums.length - 2 && nums[i + 2] < nums[i] && i - 1 >= 0 && nums[i - 1] > nums[i + 1]) {
                return false
            }
            console.log(`Added: ${nums[i - 1]} ${nums[i]} ${nums[i+1]}`)
            count ++
        }
    }
    return count > 1 ? false : true
};

console.log(checkPossibility([3,4,2,3]))