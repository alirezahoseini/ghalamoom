import React from 'react'


// Components
import StarterBaner from './StarterBaner.js/StarterBaner'

export default function Home() {
  return (
    <>
      <div id='home-page' className='mx-auto container' >
        {/* Starter Baner  */}
        <section>
          <StarterBaner />
        </section>
        {/* End of Starter Baner  */}
      </div>
    </>
  )
}