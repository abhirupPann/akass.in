import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <div >
        <div className='px-[10vw] py-[10vh] bg-[#bd5a4b] h-auto w-full flex justify-between font-spaceGrotesk rounded-t-xl border-t-2 border-black overflow-y-hidden'>
        <div className='contactus flex flex-col gap-16 cursor-default'>
         <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-black text-white cursor-default'>Contact Us</h1>
         <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'><FaLocationDot/> J. K. Mitra Road, Kolkata - 700037</li>
            <li className='flex items-center gap-2'><FaPhone/>9830844624</li>
            <li className='flex items-center gap-2'><MdEmail/>info@akass.in</li>
         </ul>
         <div className='flex gap-5  text-2xl'>
           <FaInstagram className=' cursor-pointer'/>
           <FaFacebook className=' cursor-pointer'/>
           <MdEmail className=' cursor-pointer'/>
         </div>
      </div>
      <div className="quicklinks flex flex-col gap-16 cursor-default">
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-black text-white cursor-default'>Quick Links</h1>
         <ul className='flex flex-col gap-3'>
            <Link to="/"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Home</li></Link>
            <Link to="/clients"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Work</li></Link>
            <Link to="/industry"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Industry</li></Link>
            <Link to="/overview"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Overview</li></Link>
            <Link to="/services"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Services</li></Link>
            <Link to="/contactus"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Enquiry</li></Link>
         </ul>
      </div>
      <div className="services flex flex-col gap-16 cursor-default">
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-black text-white cursor-default'>Our Services</h1>
         <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>Detection System</li>
            <li className='flex items-center gap-2'>Protection System</li>
            <li className='flex items-center gap-2'>Passive Fire Protection System</li>
         </ul>
      </div>
        </div>
      <div className="h-[8vh] w-full bg-[#96483c] flex items-center gap-3 text-xl justify-center font-spaceGrotesk cursor-default"><FaRegCopyright /> 2024 Akass Infrastructure Pvt. Ltd. All rights reserved. Developed by Abhirup</div>
    </div>
    
  )
}
