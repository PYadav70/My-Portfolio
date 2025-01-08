import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='w-max flex items-center gap-2 mx-auto'>
         <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
         technoyadav1234@gmail.com
        </div>
        <div className='text-center sm-flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p>My Socila Media Links</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Pappu-Yadav70">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/pappu-kr-yadav-492b412b1/">LinkedIn</a></li>
                <li><a target='_blank' href="https://x.com/mr_yadav__70">Twitter</a></li>
                <li><a target='_blank' href="https://www.instagram.com/mr.yadav__70/?hl=en">Instagram</a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer