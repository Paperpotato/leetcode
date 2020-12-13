var isPalindrome = function(x) {
    y = x.toString().split('').reverse().join("")
    console.log(y)
    console.log(x)
    return x.toString() === y
    
    
};

console.log(isPalindrome(10))