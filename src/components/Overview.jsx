import React from 'react'
import { BiHappyBeaming } from "react-icons/bi";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
function Overview() {
  const [count, setCount] = React.useState(false)
  return (
    <ScrollTrigger onEnter={()=>{setCount(true)}} onExit={()=>{setCount(false)}}>
    <div className=' px-[7.5vw] pt-[10vh]'>
       <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default'>Overview</h1>
       <div className='my-[10vh]'>
        <div className='flex flex-col gap-5 md:flex-row'>
        <div className='service-2 flex flex-col gap-5 justify-center items-center  font-spaceGrotesk bg-white border-red-500 border-2 rounded-lg w-[50vw] h-[22vh] md:w-[21vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
          <div className='text-4xl text-red-500'><BiHappyBeaming/></div>
          <div className='text-5xl font-bold'>{count && <CountUp start={0} end={1000} duration={2} delay={0}/>}+</div>
          <div className='text-gray-500'>Happy Customers</div>
        </div>
        <div className='service-2 flex flex-col gap-5 justify-center items-center  font-spaceGrotesk bg-white border-red-500 border-2 rounded-lg w-[50vw] h-[22vh] md:w-[21vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
          <div className='text-4xl text-red-500'><FaFireExtinguisher/></div>
          <div className='text-5xl font-bold'>{count && <CountUp start={0} end={45000} duration={2} delay={0}/>}+</div>
          <div className='text-gray-500'>Items Installed</div>
        </div>
        <div className='service-2 flex flex-col gap-5 justify-center items-center  font-spaceGrotesk bg-white border-red-500 border-2 rounded-lg w-[50vw] h-[22vh] md:w-[21vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
          <div className='text-4xl text-red-500'><FaHandshake/></div>
          <div className='text-5xl font-bold'>{count && <CountUp start={0} end={100} duration={2} delay={0}/>}+</div>
          <div className='text-gray-500'>Projects Done</div>
        </div>
        <div className='service-2 flex flex-col gap-5 justify-center items-center  font-spaceGrotesk bg-white border-red-500 border-2 rounded-lg w-[50vw] h-[22vh] md:w-[21vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
          <div className='text-4xl text-red-500'><FaPeopleGroup/></div>
          <div className='text-5xl font-bold'>{count && <CountUp start={0} end={222} duration={2} delay={0}/>}+</div>
          <div className='text-gray-500'>Satisfied Corporate Customer</div>
        </div>
        </div>

       </div>



    </div>
    </ScrollTrigger>
  )
}

export default Overview
