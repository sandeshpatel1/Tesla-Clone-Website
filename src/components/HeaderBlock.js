import React from 'react'
import "../components/HeaderBlock.css"

function HeaderBlock() {
  return (
    <div className='headerBlock'>
        <div className='headerBlock-info'>
            <div className='headerBlock-info-text'>
                <h1>Model 3</h1>
                <h4>Order Online for <span>Touchless Dehlivery</span></h4>
            </div>
            <div className='headerBlock-action'>
                <button className='headerBlock-primary'>Custom Order</button>
                <button className='headerBlock-secondary'>Existing Inventory</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderBlock