var numberOfSteps  = function(num) {
    let steps = 0
    for (let i = 0; num !== 0; i ++) {
        if (num % 2 === 0) {
            num = num / 2
            steps ++
        } else {
            num = num - 1
            steps ++
        }
    }

    console.log(steps)
};

numberOfSteps(14)