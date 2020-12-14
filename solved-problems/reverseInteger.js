function reverse(x) {
    var numberArray = [];
    x.toString().split('').forEach(function (char) {
        numberArray.push(char);
    });
    console.log(numberArray);
    return 1;
}
;
reverse(123);
