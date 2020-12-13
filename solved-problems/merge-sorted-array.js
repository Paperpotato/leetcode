let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3


// var merge = function(nums1, m, nums2, n) {
//     while (n) {
//         if (m && nums1[m - 1] > nums2[n - 1]) {
//             nums1[m + n - 1] = nums1[m - 1]
//             m -= 1
//         } else {
//             nums1[m + n - 1] = nums2[n - 1]
//             n -= 1
//         }
//     }
// };

var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.slice(0, m).concat(nums2).sort()
    console.log(nums1)
};

merge(nums1, m, nums2, n)
