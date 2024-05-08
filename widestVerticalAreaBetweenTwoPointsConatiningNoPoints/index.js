// /**
//  * @param {number[][]} points
//  * @return {number}
//  */

// the shit here is my version it is not passed
// const maxWidthOfVerticalArea = function(points) {
//   for (let i = 0; i < points.length; i++) {
//       for (let j = i + 1; j < points.length; j ++) {
//           if (points[i][0] > points[j][0]) {

//               let temp = points[i];

//               points[i] = points[j];
//               points[j] = temp;
//           }
//       }
//   }

//   let ans = 0;

//   // Iterate through points to find the maximum width between consecutive points
//   for (let i = 0; i < points.length - 1; i++) {
//       let curWidth = points[i + 1][0] - points[i][0];
//       if (curWidth > ans) {
//           ans = curWidth;
//       }
//   }

//   return ans;
// };


/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  points.sort((a, b) => a[0] - b[0]);
let ans = 0;
let px = points[0][0];
for (let [x, _] of points) {
  ans = Math.max(ans, x - px);
  px = x;
}
return ans;
};