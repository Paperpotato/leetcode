/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0
    for (let i = 0; i < accounts.length; i ++) {
        let ithAccount = 0
        for (let j = 0; j < accounts[i].length; j ++) {
            ithAccount += accounts[i][j]
        }
        maxWealth = ithAccount >= maxWealth ? ithAccount : maxWealth
    }
    return maxWealth
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))