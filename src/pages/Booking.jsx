import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Booking() {
  return (
    <div>
        <Navbar />
        <div className='block justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-16 text-white'>
          <h1 className='text-xl font-bold'>How to Book</h1>
          <br />
          <p className='pb-24'>Section explaining how to book!</p>
          <Footer />
        </div>
    </div>
  )
}

export default Booking