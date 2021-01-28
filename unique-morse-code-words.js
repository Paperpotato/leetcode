/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const wordArr = words.map(word => {
        return word.split('').map(char => {
            const i = alphabet.indexOf(char)
            return morseArr[i]
        }).join('')
    })

    return Array.from(new Set(wordArr)).length
};

console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]))