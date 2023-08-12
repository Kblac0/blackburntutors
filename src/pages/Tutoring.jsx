import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Tutoring() {
  return (
    <div>
        <Navbar />
        <div className='block justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-16 text-white'>
          <h1 className='text-xl font-bold'>Tutoring</h1>
          <br />

          <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4"></th>
              <th scope="col" class="px-6 py-4">Grade 11</th>
              <th scope="col" class="px-6 py-4">Grade 12</th>
              <th scope="col" class="px-6 py-4">Undergraduate</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-bold">Chemistry</td>
              <td class="whitespace-nowrap px-6 py-4">SCH3U</td>
              <td class="whitespace-nowrap px-6 py-4">SCH4U</td>
              <td class="whitespace-nowrap px-6 py-4">Principles of Chemistry [pending]</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-bold">Physics</td>
              <td class="whitespace-nowrap px-6 py-4">SPH3U</td>
              <td class="whitespace-nowrap px-6 py-4">SPH4U</td>
              <td class="whitespace-nowrap px-6 py-4">Physics I, II [pending]</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-bold">Pre-Calculus</td>
              <td class="whitespace-nowrap px-6 py-4">MCR3U</td>
              <td class="whitespace-nowrap px-6 py-4">MHF4U</td>
              <td class="whitespace-nowrap px-6 py-4">----------</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-bold">Calculus</td>
              <td class="whitespace-nowrap px-6 py-4">----------</td>
              <td class="whitespace-nowrap px-6 py-4">MCV4U</td>
              <td class="whitespace-nowrap px-6 py-4">Calculus I [pending]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          <br />
          <p className='pb-24'>These services are offered through zoom on the weekends.</p>
          <Footer />
        </div>
    </div>
  )
}

export default Tutoring