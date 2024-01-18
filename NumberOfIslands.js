/**
 * @param {character[][]} grid
 * @return {number}
 */

 const getAdjacentNeighbors = (i, j, grid, visited) => {
     const adjacentNeighbors = [];
    
    if(i > 0 && !visited[i - 1][j]) adjacentNeighbors.push([i-1, j]);
    if(i < grid.length -1 && !visited[i + 1][j]) adjacentNeighbors.push

     return adjacentNeighbors;
 }

 const dFS = (i, j, grid, visited) => {
     const stack = [[i, j]];
     let islandSize = 0;

     while(stack.length) {
        let curNode = stack.pop();

        let [i, j] = curNode;

        //check is visited at i and j
        if (visited[i][j]) continue;
        visited[i][j] = true;

        //check if cell is part of an island
        if(grid[i][j] === '0') continue;
        islandSize++;

        let adjacentNeighbors = getAdjacentNeighbors(i, j, grid, visited);

        stack.push(...adjacentNeighbors);

    }
    return islandSIze > 0 ? true : false;

 };

var numIslands = function(grid) {
    //creating auxillary array for visited cells
    //carbon copy of grid with false values
    const visited = grid.map(row => row.map(cell => false));
    
    //number of times we are traversing through the grid
    let islandCount = 0;

    //traversing through the matrix
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (dFS(i, j, grid, visited)) islandCount++

        }
    }



    return islandCount;
};

//add solution