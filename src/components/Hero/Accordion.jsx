import React from 'react'
import AccordionData from './AccordionStyle';
import {data} from '../../Data'

export default function Accordion() {

   
   
  return (
    <div className='w-[90%] m-auto py-16 px-8'>
        <h1 className='font-bold text-4xl py-5'>Frequently Asked Question</h1>

        <div className=" w-[full] m-auto">
          {data.map(({title, content, id})=>( 
            <div>
                 <AccordionData key={id} title={title} content={content} /> 
            </div>
          
            
          ))}
         </div>


         <div className='mt-16'>
            <p className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
         <div className='flex  mt-[30px] gap-4 max-sm:flex-col '>
                <input className='w-[40%] p-3 rounded-md bg-black/80 border max-sm:w-full' placeholder='Enter Your email' />
                <button className='bg-red-600 w-[180px] rounded-lg p-3 max-sm:w-[150px]'>Get Started </button>
            </div>
         </div>

    </div>
  )
}
