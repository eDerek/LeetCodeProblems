// 994

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let mins = 0;
    let lastRottens = 0
    let rottens = 0;
    let all = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] == 2){
                rottens++;
            }
            if(grid[i][j] != 0){
               all++;
            }
        }
    }
    if(rottens == all){
       return mins;
    }
    while(lastRottens != rottens){
        lastRottens = rottens;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j] == 2){
                    grid[i][j] == 3;
                    if(i-1>=0 && grid[i-1][j] == 1){
                       rottens++;
                        grid[i-1][j] = 4;
                    }
                    if(i+1<grid.length && grid[i+1][j] == 1){
                       rottens++;
                        grid[i+1][j] = 4;
                    }
                    if(j-1>=0 && grid[i][j-1] == 1){
                       rottens++;
                        grid[i][j-1] = 4;
                    }
                    if(j+1<grid[i].length && grid[i][j+1] == 1){
                       rottens++;
                        grid[i][j+1] = 4;
                    }
                }
            }
        }
        mins++;
        if(rottens == all){
           return mins;
        }
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j] == 4){
                   grid[i][j] = 2;
                   }
            }
        }
    }
    return -1;
};
