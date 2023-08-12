import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import headshot from '../images/Kobe_Headshot.jpg'

function About() {
  return (
    <div>
        <Navbar />
        <div className='block justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-16 text-white'>
          <h1 className='text-xl font-bold'>A little bit about myself...</h1>
          <br />
          <div className='mb-4'><br /><a href='https://www.linkedin.com/in/kobe-blackburn-2718281828459045235'><img src={headshot} alt="headshot" className='h-auto max-w-full rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 p-1.5'/></a></div>
          <br />
          <p>My name is Kobe Blackburn and I am an engineering student at the University of Ottawa. I grew up in a small town outside of Ottawa and am very familiar with the Ontario school system. In high school I took all the math and science courses and did well enough to get the highest entrance scholarship offered at the University of Ottawa. I am passionate about math, science, and technology and would like to share some of my tips and tricks to help future graduates get into the schools and programs they dream of.</p>
          <br />
          <p>I can provide a higher level of understanding for each of these topics. As shown below, I have taken many higher level courses which allow me to think about things with a better perspective. What is not shown in this table are the engineering courses I have taken which incorporates all of these subjects and furthered my understanding.</p>
          <br />
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Chemistry</th>
              <th scope="col" class="px-6 py-4">Physics</th>
              <th scope="col" class="px-6 py-4">Math</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">SCH3U</td>
              <td class="whitespace-nowrap px-6 py-4">SPH3U</td>
              <td class="whitespace-nowrap px-6 py-4">MCR3U</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">SCH4U</td>
              <td class="whitespace-nowrap px-6 py-4">SPH4U</td>
              <td class="whitespace-nowrap px-6 py-4">MHF4U, MCV4U</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">Principles of Chemistry</td>
              <td class="whitespace-nowrap px-6 py-4">Physics I, II</td>
              <td class="whitespace-nowrap px-6 py-4">Calculus I, II</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">Organic Chemistry I, II</td>
              <td class="whitespace-nowrap px-6 py-4">----------</td>
              <td class="whitespace-nowrap px-6 py-4">Linear Algebra, Numerical Methods</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">----------</td>
              <td class="whitespace-nowrap px-6 py-4">----------</td>
              <td class="whitespace-nowrap px-6 py-4">Differential Equations</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          <br className='pb-24'/>
          <Footer />
        </div>
    </div>
  )
}

export default About