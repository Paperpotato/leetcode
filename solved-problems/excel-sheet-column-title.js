/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n === 0) return null
    if (n < 27) return String.fromCharCode(64 + n)
    let output = ''

    while (n > 0) {
        let num = n % 26
        num = num == 0 ? 26: num
        output = String.fromCharCode(64 + num) + output
        n -= num
        n /= 26

    }

    return output
};

console.log(convertToTitle(701))