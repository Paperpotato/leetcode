/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    dict = {'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1}
    arr = s.split('').reverse()
    let p = 'I'
    let result = 0
    for (let i = 0; i < arr.length; i ++) {
        result = dict[arr[i]] < dict[p] ? result - dict[arr[i]] : result + dict[arr[i]]
        p = arr[i]
    } 
    return result
};

console.log(romanToInt('XXXVI'))
console.log(romanToInt('MMXII'))
console.log(romanToInt('MCMXCVI'))