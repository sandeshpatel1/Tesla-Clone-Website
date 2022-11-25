import React from 'react'
import "../components/MenuItem.css"

function MenuItem({title}) {
  return (
    <div className='menuItem'>
        <h4>{title}</h4>
    </div>
  )
}

export default MenuItem