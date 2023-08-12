import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='block justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-16 text-white'>
          <h1 className='text-xl font-bold'>Welcome to BlackburnTutors!</h1>
          <br />
          <p>My name is Kobe Blackburn and I am an engineering student at the University of Ottawa. I grew up in a small town outside of Ottawa and am very familiar with the Ontario school system. In high school I took all the math and science courses and did well enough to get the highest entrance scholarship offered at the University of Ottawa. I am passionate about math, science, and technology and would like to share some of my tips and tricks to help future graduates get into the schools and programs they dream of.</p>
          <br />
          <p>This is why I created BlackburnTutors. Through BlackburnTutors, I offer private, online tutoring services to a few senior high school students in Ontario. I tutor all chemistry, physics, and math subjects; SCH3U, SPH3U, MCR3U, SCH4U, SPH4U, MHF4U, and MCV4U.</p>
          <br />
          <p className='pb-24'>These services are offered through zoom on the weekends.</p>
          <Footer />
        </div>
    </div>
  )
}

export default Home