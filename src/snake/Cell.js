import React from 'react'

export default React.memo(function Cell(props) {
    const style = {}
    switch(props.cellType) {
        case "tail":
            style.backgroundColor = "black"
            break;
        case "head":
            style.backgroundColor = "red"
            break;
        case "food":
            style.backgroundColor = "pink"
            break
        default:
            style.backgroundColor = "white"
      } 
    return (
        <div style={style} className='cell'>
        </div>
    )
})
