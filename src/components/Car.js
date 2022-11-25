import React from 'react'
import '../components/Car.css'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

function Car({imgSrc,model,testDrive}) {
  return (
    <div className='car'>
        <div className='car-image'>
            <img src={imgSrc} alt="car" />
        </div>
        <h2 className='car-model'>{model}</h2>
        <div className='car-action'>
            <ButtonPrimary name='order' />
            {testDrive && <ButtonSecondary  name='test drive' />}
        </div>
        <p className='car-info'>
            <span>Request a Call</span> to speak with a product specialist, value
            your trade-in or apply for leasing
        </p>
    </div>
  )
}

export default Car