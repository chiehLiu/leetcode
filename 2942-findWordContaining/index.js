/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = function(words, x) {
    let ans = [];

    for (let i = 0; i < words.length; i ++) {
        for (let j = 0; j < words[i].length; j ++) {
            if (words[i][j] === x) {
                ans.push(i);
                break;
            }
        }
    }

    return ans;
};

// /**
//  * @param {string[]} words
//  * @param {character} x
//  * @return {number[]}
//  */
// var findWordsContaining = function (words, x) {
//     let arr = []
//     for (i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             arr.push(i)
//         }
//     }
//     return arr
// };