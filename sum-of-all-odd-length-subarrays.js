/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let currentLength = 1
    let sum = 0
    while (currentLength <= arr.length) { //While length of subarray is less than or equal to length of array
        for (let i = 0; i < arr.length; i++) { //Loop through all elements in array
            if ((arr.length - currentLength) >= i) { //If index of subaray's start is less than or equal to length
                sum += arr.slice(i, i + currentLength).reduce((a, b) => a + b, 0) //Create subarray, reduce and add to sum
            }
        }
        currentLength += 2 //Go to next odd number
    }
    return sum
};


console.log(sumOddLengthSubarrays([1,4,2,5,3]))