import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <button className='text-3xl bg-fuchsia-300 border-2 border-white' onClick={onClick}>
        {value}
    </button>

  )
}

export default Square