import React, {memo} from 'react'

const Grid = memo(props => {
    const grid = []

    for(let i = 0; i < props.cols; i++){
        const newColumn = []
        for(let j  = 0; j < props.rows; j++){
            newColumn.push(<div></div>)
        }
        grid.push(newColumn)
    }

    const style = {
        gridTemplateColumns: `repeat(${props.rows}, 10px)`,
        gridTemplateRows: `repeat(${props.cols}, 10px)`
    }
    return (
        <div className="snake-board" style={style}>
            {grid}
        </div>
    )
})

export default Grid
