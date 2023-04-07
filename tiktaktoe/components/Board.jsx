import React from 'react'
import Square from './Square'

const Board = ({squares, onClick}) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("xdxd")}/>
      <Square value="2" onClick={() => onClick("xdxd")}/>
      <Square value="3" onClick={() => onClick("xdxd")}/>
      <Square value="4" onClick={() => onClick("xdxd")}/>
      <Square value="5" onClick={() => onClick("xdxd")}/>
      <Square value="6" onClick={() => onClick("xdxd")}/>
      <Square value="7" onClick={() => onClick("xdxd")}/>
      <Square value="8" onClick={() => onClick("xdxd")}/>
      <Square value="9" onClick={() => onClick("xdxd")}/>
    </div>
  )
}

export default Board