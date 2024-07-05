import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { IoCheckmarkDone } from "react-icons/io5";
import homecar from "../assets/homecar.jpg";
import hospital from "../assets/hospital.jpg";
import electric from "../assets/electric.jpg";
import hotel from "../assets/hotel.jpg";
import office from "../assets/office.jpg";
import school from "../assets/school.jpg";
gsap.registerPlugin(ScrollTrigger)
function Industry() {
    let content = useRef(null)
    useEffect(()=>{
        let ctx = gsap.context(()=>{
           const t1 = gsap.timeline({
            scrollTrigger:{
                trigger:".services"
            }
           })

           t1.fromTo([".service-1", ".service-2", ".service-3",".service-4",".service-5",".service-6"],
           {
            x: -250,
            opacity: 0,   
           },
           {
            x:0,
            opacity:1,
            ease: "slow(0.9,2,false)",
            stagger: 0.7,
            duration: 1,
           });
        },content)
        return ()=> ctx.revert()
    },[])
  return (
    <div className=' px-[7.5vw] pt-[10vh]' ref={content}>
        <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default'>Industry Required</h1>
        <div className=' services font-spaceGrotesk md:flex md:flex-row md:flex-wrap flex flex-col items-center gap-4 my-[10vh]'>
        <div className='service-1 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={homecar} alt="" className='md:w-[20vw] md:h-[20vh] h-[10vh] w-[15vw] rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Home & Car</h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Powder Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Kitchen Types Extinguisher</li>
          </ul>
        </div>
        <div className='service-2 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={hospital} alt="" className='md:w-[20vw] md:h-[20vh] h-[10vh] w-[15vw] rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Hospital Sector </h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Foam Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Water Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Clean Agent Types Extinguisher</li>
          </ul>
        </div>
        <div className='service-3 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={electric} alt="" className='md:w-[20vw] w-[15vw] md:h-[20vh] h-[10vh] rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Electric Room & Panel</h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Clean Agent Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Foam Types Extinguisher</li>
          </ul>
        </div>
        <div className='service-4 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={hotel} alt="" className='md:w-[20vw] w-[15vw] md:h-[20vh] h-[10vh] rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Hotel & Restaurant Sector</h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
          <li className="flex items-center gap-1"><IoCheckmarkDone />Foam Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Water Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Clean Agent Types Extinguisher</li>
          </ul>
        </div>
        <div className='service-5 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={office} alt="" className='md:w-[20vw] md:h-[20vh] h-[10vh] w-[15vw] rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Offices Sector</h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
          <li className="flex items-center gap-1"><IoCheckmarkDone />Foam Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Water Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Clean Agent Types Extinguisher</li>
          </ul>
        </div>
        <div className='service-6 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[55vw] h-[27vh] md:w-[26.5vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <img src={school} alt="" className='md:w-[20vw] md:h-[20vh] h-[10vh] w-[15vw]  rounded-lg'/>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>School & Education Sector</h1>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
          <li className="flex items-center gap-1"><IoCheckmarkDone />Powder Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO2 Types Extinguisher</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Kitchen Types Extinguisher</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Industry
