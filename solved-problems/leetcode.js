/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let k
    output = ""
    while (n > 0) {
        output += alphabet[n % 26]
        n = Math.floor(n / 26)

    }
    console.log(output)
};

convertToTitle(52)
convertToTitle(53)
convertToTitle(702)
convertToTitle(703)