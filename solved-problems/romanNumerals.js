/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let rA = s.split('')
    let nA = []
    let total = 0
    rA.forEach( letter => {
        if( letter === 'I' ) {
            nA.push(1)
        } else if (letter === 'V') {
            nA.push(5)
        } else if (letter === 'X') {
            nA.push(10)
        } else if (letter === 'L') {
            nA.push(50)
        } else if (letter === 'C') {
            nA.push(100)
        } else if (letter === 'D') {
            nA.push(500)
        } else if (letter === 'M') {
            nA.push(1000)
        }
        
    })

    // nA.forEach( n => {
    //     total += n
    // })

    let p = 0

    for (let i = 0; i < nA.length; i ++) {
        if (nA[i] > nA[i + 1]) {
            total += nA[i]
            total += p 
            p = 0
            console.log(total)
        } else if (nA[i] === nA[i + 1]) {
            p += nA[i] + nA[i + 1]
        } else if (nA[i] < nA[i + 1]) {
            total += nA[i + 1] - p
            p = 0
        } 
    }

    
    // let p = 0
    
    // for (let i = 0; i < 5; i ++) {
        
    //     // if (p )
        
    //     if (nA[i] > nA[i + 1]) {
    //         total += nA[i]
    //     } 
    //     // else if (nA[i] === nA[i + 1]) {
    //     //     p += nA[i] + nA[i + 1]
    //     // }
    // }
    return total
};

console.log(romanToInt('XXXVI'))
console.log(romanToInt('MMXII'))
console.log(romanToInt('MCMXCVI'))