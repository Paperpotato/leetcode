/**
 * @param {string} str
 * @return {string}
 */
// var toLowerCase = function(str) {
//     const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
//     let output = []
//     for (let i = 0; i < str.length; i ++) {
//         let code = str[i].charCodeAt(0)
//         if (code < 91 && code > 64 ) {
//             output.push(String.fromCharCode(code + diff))
//         } else {
//             output.push(str[i])
//         }
//     }
//     return output.join('')
// };

var toLowerCase = function(str) {
    return str.split('').map(ch => (ch >= 'A' && ch <= 'Z') ? String.fromCharCode(ch.charCodeAt(0) + ('a'.charCodeAt(0) - 'A'.charCodeAt(0))) : ch).join('')
};


console.log(toLowerCase('al&phaBet'))