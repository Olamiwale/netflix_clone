import React from 'react'
import { Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='w-[90%] m-auto  '>
        <p className='py- underline px-4'>Question? contact Us</p>
        <div className=''>

          
            <ul className='px-4 underline mt-16 grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2' >
                <li className='py-2 cursor-pointer'>FAQ</li>
                <li className='py-2 cursor-pointer'>Help Center</li>
                <li className='py-2 cursor-pointer'>Account</li>
                <li className='py-2 cursor-pointer'>Media Center</li>
                <li className='py-2 cursor-pointer'>Investor Relation</li>
                <li className='py-2 cursor-pointer'>Jobs</li>
                <li className='py-2 cursor-pointer'>Ways to Watch</li>
                <li className='py-2 cursor-pointer'>Terms of Use</li>
                <li className='py-2 cursor-pointer'>Privacy</li>
                <li className='py-2 cursor-pointer'>Cookies Preference</li>
                <li className='py-2 cursor-pointer'>Corporate Information</li>
                <li className='py-2 cursor-pointer'>Contact Us</li>
                <li className='py-2 cursor-pointer'>Speed Test</li>
                <li className='py-2 cursor-pointer'>Legal Notice</li>
                <li className='py-2 cursor-pointer'>Only on Netflix</li>     
            </ul>
            </div>

            <div className='py-16 px-4'>
                <select className='bg-black/5 border px-2'>
                    <option className='text-white'>English</option>
                </select>
            </div>

            <div>
                <p className='text-white px-4'>Netflix Nigeria</p>
            </div>

       
       
        
    </div>
  )
}
