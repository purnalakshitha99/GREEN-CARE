import React from 'react'
import BackGroundSlider from './BackGroundSlider'
import AjBody from './AjBody'
import Footer from '../Footer/Footer'
import NavBar from '../../layouts/navbar'


function AjHome() {
  return (
    <>
    <NavBar />
    <div>
      <BackGroundSlider />
      
      <div className='p-4'>
      <AjBody />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default AjHome
