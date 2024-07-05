import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import detectionimg from "../assets/detection.jpeg"
import protectionimg from "../assets/protection.jpg"
import passive from "../assets/passive.jpg"
gsap.registerPlugin(ScrollTrigger)

function Services() {
    let content = useRef(null)
    useEffect(()=>{
        let ctx = gsap.context(()=>{
           const t1 = gsap.timeline({
            scrollTrigger:{
                trigger:".services"
            }
           })

           t1.fromTo([".service-1", ".service-2", ".service-3"],
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
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default'>Our Services</h1>
      <div className=' services font-spaceGrotesk md:flex md:flex-row flex flex-col items-center gap-4 my-[10vh]'>
        <div className='service-1 flex flex-col justify-center items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-lg w-[60vw] h-[27vh] md:w-[30vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
          <h1 className='md:text-xl text-[0.7rem] font-medium'>Detection System:-</h1>
          <img src={detectionimg} alt="" className='md:w-[8vw] w-[15vw]  border-2 border-black'/>
          <ul className=' md:text-[0.9rem] text-[0.5rem] my-[1vh]'>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Conventional Detection System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Addressable Detection System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Addressable Analogue Detection System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Intelligent Addressable Analogue Detection System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />CO 2 Flooding</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />FM 200 Flooding</li>
          </ul>
        </div>
        <div className='service-2 flex flex-col justify-center items-center  bg-red-500 border-black border-2 rounded-lg w-[60vw] h-[27vh] md:w-[30vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
           <h1 className='md:text-xl text-[0.7rem] font-medium'>Protection System:-</h1>
           <img src={protectionimg} alt="" className='md:w-[10vw] w-[15vw]  border-2 border-black'/>
           <ul className=' md:text-[0.9rem] text-[0.5rem]  my-[1vh]'>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Hydrant System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Automatic Sprinkler System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />High & Medium Velocity Water Sprinkler System</li>
            <li className="flex items-center gap-1"><IoCheckmarkDone />Water Mist System</li>
           </ul>
        </div>
        <div className='service-3 flex flex-col justify-center items-center  bg-red-500 border-black border-2 rounded-lg w-[60vw] h-[27vh] md:w-[30vw] md:h-[50vh] shadow-lg shadow-gray-500 '>
        <h1 className='md:text-xl text-[0.7rem] font-medium'>Passive Fire Protection System:-</h1>
        <img src={passive} alt="" className='md:w-[10vw] w-[15vw]  border-2 border-black'/>
        <ul className=' md:text-[0.9rem] text-[0.5rem]  my-[1vh]'>
        <li className="flex items-center gap-1"><IoCheckmarkDone />Mechanical Smoke Control</li>
        <li className="flex items-center gap-1"><IoCheckmarkDone />Sealing Materials</li>
        <li className="flex items-center gap-1"><IoCheckmarkDone />Fire Check Door</li>
        <li className="flex items-center gap-1"><IoCheckmarkDone />AHU Tripping</li>
        <li className="flex items-center gap-1"><IoCheckmarkDone />Staircase Pressurization</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
