var duplicateZeros = function(arr) {
    let i = 0
    while (i < arr.length) {
        if(arr[i] == 0) {
            arr.splice(arr.indexOf(0, i), 0, 0)
            arr.pop()
            i ++
        }
        i ++
        console.log(arr)
    }
};

duplicateZeros([1,0,2,3,0,4,5,0])