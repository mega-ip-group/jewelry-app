import { Container } from '@mui/system'
import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner-container'>
        <Container>
        <p className='fs-6'>  WOMEN'S JEWELLERY </p>
                <h1 className='fw-normal fs-1'>FAMILY <span>JEWELLERY</span><br /> COLLECTION</h1>
                <p>Follow your true passion, let your jewelry guide you.</p>
                <button className='btn-regular'>Shop Now</button>
        </Container>
    </div>
  )
}

export default Banner