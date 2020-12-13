/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let dict = alphabet.split('')
    console.log(dict)
    if (n === 0) return null
    if (n < 27) return String.fromCharCode(64 + n)
    let output = ''

    while (n > 0) {
        // let output = ''
        let num = n % 26
        num = num == 0 ? 26: num
        console.log(num)
        // if (num > 26) {
        //     n -= 26
        //     console.log(n)
        //     continue
        // }
        output = String.fromCharCode(64 + num) + output
        console.log('added', output)
        n -= num
        n /= 26

    }

    return output
};

console.log(convertToTitle(701))