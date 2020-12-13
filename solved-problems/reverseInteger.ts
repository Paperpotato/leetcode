function reverse(x: number): number {
    let output = Math.abs(parseInt(x.toString().split('').reverse().join('')))
    return output >= -(2 ** 31) && output <= (2 ** 31 - 1) ? output * Math.sign(x) : 0
};

console.log(reverse(1534236469))