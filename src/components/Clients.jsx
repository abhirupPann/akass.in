import React from 'react'
import { useState } from 'react';
import Marquee from "react-fast-marquee"
import belurimg from "../assets/belurimg.jpg"
import isroimg from "../assets/isroimg.jpg"
import reachimg from "../assets/reachimg.jpg"
import desunimg from "../assets/desunimg.jpg"
import abpimg from "../assets/abpimg.png"
import albertimg from "../assets/albertimg.jpg"
import belaniimg from "../assets/belaniimg.png"
import charnockimg from "../assets/charnockimg.jpg"
import britishimg from "../assets/britishimg.png"
import hindalcoimg from "../assets/hindalcoimg.jpeg"
import infrastrucimg from "../assets/infrastrucimg.jpeg"
import kmrclimg from "../assets/kmrclimg.jpg"
import lemonimg from "../assets/lemonimg.png"
import siddhaimg from "../assets/siddhaimg.png"
import dankuniimg from "../assets/dankuniimg.jpg"
import inkimg from "../assets/inkimg.jpg"
function Clients() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    
          <div className=" px-[7.5vw] pt-[10vh] h-full justify-center overflow-y-hidden" >
            
                <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default '>Clients</h1>
                
                {/* <Marquee pauseOnHover> */}
                <div className=' cards p-1 mx-[15vw] my-4 h-[40vh]  rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' my-4 text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Indian Space Research Organisation ,ISRO</h1>
                 <img src={isroimg} width={250} alt="" className='mb-[100px]' />
                 
                 
               </div>
                
                <div className=' cards p-1 mx-[15vw]  my-4 h-[40vh]  rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>P.N.Memorial Neuro Center &amp; Research Institute .DESUN HOSPITAL.</h1>
                 <img src={desunimg} width={250} alt="" className='mb-[100px]' />
       
                 
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Albert David Ltd. [Pharmaceutical Manufacturing Unit]</h1>
                 <img src={albertimg} width={250} alt="" />
                 
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>West Bengal Infrastructure Development Finance Corporation Ltd.</h1>
                 <img src={infrastrucimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>ITDC Jv For KMRCL</h1>
                 <img src={kmrclimg} width={250} alt="" />  
              
                 
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Garden Reach Ship Builders, Kolkata</h1>
                 <img src={reachimg} width={250} alt="" />
                 
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md  flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Belur Math Ramakrishna Misson, Howrah</h1>
                 <img src={belurimg} width={150}  alt="" />
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Dhanuka Dhanseri Foundation, Behala</h1>
                 <img src={dankuniimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>British Deputy High Commission.</h1>
                 <img src={britishimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Lemon Constructions Pvt Ltd.</h1>
                 <img src={lemonimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Charnock Hospital.</h1>
                 <img src={charnockimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Belani Group.</h1>
                 <img src={belaniimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Institute of Neurosciences ,Kolkata</h1>
                 <img src={inkimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>ABP Pvt Ltd.</h1>
                 <img src={abpimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Hindalco, Aditya Birla Group, Oddisha.</h1>
                 <img src={hindalcoimg} width={250} alt="" />  
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh]   rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[1vw] py-[2.5vh] w-full rounded-tl-lg rounded-br-lg '>Siddha Group ( Happy Ville , Glaxia, Suburbia, Esplanede.)</h1>
                 <img src={siddhaimg} width={250} alt="" />  
               </div>
               {/* </Marquee> */}
 


    </div>


  )
}

export default Clients
