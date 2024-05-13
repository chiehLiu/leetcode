/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {

    let curWealth = 0;
    let wealth = 0;

    for (let i = 0; i < accounts.length; i ++) {
        for (let j = 0; j < accounts[i].length; j ++) {
            curWealth = curWealth + accounts[i][j];
            wealth = wealth > curWealth ? wealth : curWealth;

            // 只有跑到最後一個 wealth 時，才把 curWealth 歸 0
            if (j === accounts[i].length - 1) {
                curWealth = 0;
            }
        }
    }

    return wealth;
};