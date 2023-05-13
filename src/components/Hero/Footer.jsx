import React from 'react'
import { Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='w-[90%] m-auto p-8 '>
        <p className='py-16'>Question? contact Us</p>
        <div className=' m-auto grid grid-cols-4'>

            <div>
            <ul >
                <li className='py-4'><Link to='/'>FAQ</Link></li>
                <li className='py-4'>Investor relations</li>
                <li className='py-4'>Privacy</li>
                <li className='py-4'>Speedy Test</li>
                
            </ul>
        </div>
        <div>
            <ul>
                <li className='py-4'>FQA</li>
                <li className='py-4'>Investor relations</li>
                <li className='py-4'>Privacy</li>
                <li className='py-4'>Speedy Test</li>
                
            </ul>
        </div>
        <div>
            <ul>
                <li className='py-4'>FQA</li>
                <li className='py-4'>Investor relations</li>
                <li className='py-4'>Privacy</li>
                <li className='py-4'>Speedy Test</li>
                
            </ul>
        </div>
        <div>
            <ul>
                <li className='py-4'>FQA</li>
                <li className='py-4'>Investor relations</li>
                <li className='py-4'>Privacy</li>
                <li className='py-4'>Speedy Test</li>
                
            </ul>
        </div> </div>
        
    </div>
  )
}
