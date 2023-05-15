import React from 'react'
import Main from './Main'
import Accordion from './Accordion'
import Footer from './Footer'
import Navbar from '../Navbar'

export default function Hero() {
  return (
    <div className='w-full'>
      <Navbar />
       

        <div className='w-[90%] m-auto rounded-lg'>
         
            <img
          className='w-full h-[60vh] max-sm:h-[50vh] object-cover rounded-lg'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        /> 
         
       
        
        <div className=' text-white absolute top-[15%] p-16 w-[70%] max-sm:w-[80%] max-sm:top-[8%] max-sm:px-2 lg:mt-[40px]' >
            <h1 className=' text-6xl font-bold max-md:text-5xl lg:text-7xl max-sm:text-3xl'>Unlimited movies, TV shows, and more</h1>
            <p className='text-xl py-4 font-semibold'>Watch anywhere. Cancel anytime</p>
            <p className='text-xl font-semibold max-sm:text-[12px]'>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='flex w-[80%] mt-[30px] gap-4 max-md:w-[70%] max-sm:flex-col max-sm:w-full'>
                <input className='w-full max-md:w-full p-3 rounded-md bg-black/80 border' />
                <button className='bg-red-600 w-[180px] rounded-md p-3 max-md:w-[200px] max-sm:w-[150px]'>Get Started </button>
            </div>
           
        </div>
       
       
      </div>
      <Main />
      <Accordion />
      <Footer />
       
    </div>
  )
}
