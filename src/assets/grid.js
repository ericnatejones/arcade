export function buildGrid(colsLength, rowsLength, numberOfMines, clickedX, clickedY){
    const grid = []

    for(let i = 0; i < colsLength; i++){
        grid.push([])
        for(let j = 0; j < rowsLength; j++){
            grid[i].push({isRevealed: false })
        }
    }
    
    while(numberOfMines > 0){
        const x = Math.floor(Math.random() * colsLength)
        const y = Math.floor(Math.random() * rowsLength)
        console.log(clickedX, x, clickedY, y)
        if(!grid[x][y].hasMine && !(clickedX === x && clickedY === y)){
            console.log("oops", x, y)
            grid[x][y].hasMine = true
            numberOfMines--
        } 
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            let totalMines = 0
            if(!grid[i][j].hasMine){
                grid[i][j].hasMine = false
            }
            if(grid[i][j + 1] && grid[i][j + 1].hasMine){
                totalMines++
            }
            if(grid[i][j - 1] && grid[i][j - 1].hasMine){
                totalMines++
            }
            if(grid[i + 1]){
                if(grid[i + 1][j].hasMine){
                    totalMines++
                }
                if(grid[i + 1][j + 1] && grid[i + 1][j + 1].hasMine){
                    totalMines++
                }
                if(grid[i + 1][j - 1] && grid[i + 1][j - 1].hasMine){
                    totalMines++
                }
            }
            if(grid[i - 1]){
                if(grid[i - 1][j].hasMine){
                    totalMines++
                }
                if(grid[i - 1][j + 1] && grid[i - 1][j + 1].hasMine){
                    totalMines++
                }
                if(grid[i - 1][j - 1] && grid[i - 1][j - 1].hasMine){
                    totalMines++
                }
            }
            grid[i][j].numberOfSurrounding = totalMines
        }
    }

    return grid
}

export function findEmpties(x, y, grid, setGrid){
    if(grid[x] === undefined) return
    if(grid[x][y] === undefined) return
    if(grid[x][y].isRevealed){
        return setGrid(grid)
    }
    if(grid[x][y].hasMine){
        return setGrid(grid)
    }
    grid[x][y].isRevealed = true
    if(grid[x][y].numberOfSurrounding > 0){
        return setGrid(grid)
    }
    findEmpties(x, y + 1, grid, setGrid)
    findEmpties(x, y - 1, grid, setGrid)
    findEmpties(x + 1, y, grid, setGrid)
    findEmpties(x + 1, y + 1, grid, setGrid)
    findEmpties(x + 1, y - 1, grid, setGrid)   
    findEmpties(x - 1, y, grid, setGrid)
    findEmpties(x - 1, y + 1, grid, setGrid)
    findEmpties(x - 1, y - 1, grid, setGrid)      
    setGrid(grid)
}