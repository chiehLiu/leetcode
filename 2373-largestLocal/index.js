var largestLocal = function(grid) {
    // becase the output matrix length is (n - 2) x ()n - 2)
    const matrixLength = grid.length - 2;
    let maxLocal = Array(matrixLength).fill().map(() => Array(matrixLength).fill(0));

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            maxLocal[i][j] = Math.max(
                grid[i][j], grid[i + 1][j], grid[i + 2][j],
                grid[i][j + 1], grid[i + 1][j + 1], grid[i + 2][j + 1],
                grid[i][j + 2], grid[i + 1][j + 2], grid[i + 2][j + 2]
            );
        }
    }

    return maxLocal;
};

// var largestLocal = function(grid) {
//   let final = []
//   for(let  r= 0;r<grid.length-2;r++){
//     let result = []
//     for(let  c= 0;c<grid.length-2;c++){
    
//       result.push(Math.max(grid[r][c],grid[r][c+1],grid[r][c+2],
//       grid[r+1][c],grid[r+1][c+1],grid[r+1][c+2],
//       grid[r+2][c],grid[r+2][c+1],grid[r+2][c+2]))
//     }
//     final.push(result)
//   }
// return final
// }