import gsap from 'gsap';
import { useRef, useEffect, useState, useMemo } from 'react';
import Lenis from '@studio-freight/lenis'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import video from "../assets/video/5930452-uhd_3840_2160_30fps.mp4";
import { CiLocationArrow1 } from "react-icons/ci";
import isroimg from "../assets/isroimg.jpg"
import bmwimg from "../assets/bmwimg.jpg"
import hospiimg from "../assets/hospiimg.jpg"
import belurimg from "../assets/belurimg.jpg"
import reachimg from "../assets/reachimg.jpg"
import Marquee from "react-fast-marquee"
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

function Home() {

  // ---------Description Text ---------
  let description = useMemo(()=>{
    const des= "AKASS INFRASTUCTURE PVT LTD is an organization, which believes in “Innovation and Excellence”. AKASS is committed to offering the most flexible solution backed by the highest standard service excellence, latest technology and practical experiences. We are Distributors of TYCO safety products in Pan India basis. We are submitting this Letter of interest and are very keen to provide you the best service. Hope, we will get the opportunity from the esteem organization to serve you our service with your utmost satisfactory.";
    return des;
  },[])
  // --------Lenis For Smooth Scroll------

  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
requestAnimationFrame(raf)

// ----------GSAP Animation definition---------

  const component = useRef(null);
  useEffect(()=>{
    let ctx = gsap.context(()=>{
       const t1 = gsap.timeline();
       const t2 = gsap.timeline({
        scrollTrigger:{
          trigger: ".description"
        }
       });
       t1.fromTo([".para-animation1", ".para-animation2", ".para-animation3"],
       {
        y: -250,
        opacity: 0,   
       },
       {
        y:0,
        opacity:1,
        ease: "slow(0.9,2,false)",
        stagger: 0.7,
        duration: 1,
       });
       t1.fromTo(".highlight",{
        x: -250,
        opacity:0
       },{
        x:0,
        opacity:1,
        ease: "slow(0.9,2,false)",
        duration: 0.8,
       });
       t2.fromTo(".description",{
        x:-255,
        opacity:0
       },
      {
       x:0,
       opacity:1,
       ease: "elastic.out(1.75,0.3)",
       duration: 1
      });
      t2.fromTo(".des-animation",{
        y: -100,
        opacity: 0,
        rotate: -10
       },
       {
        y:0,
        opacity:1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 0.7,
        transformOrigin: "left top",
        stagger: {
          each: 0.007,
          from: 'random'
        }
    })
    }, component);
    return () => ctx.revert(); 
  },[]);


  //-------Getting Month Year Day-----
  const [estDate, setEstDate] = useState({
    month: 2,
    year: 2007.,
    date: 1
  });

  const memoizedVal =  useMemo(()=>{
    const date=()=>{
      const today = new Date();
      const month =  today. getMonth()+1;
      const year = today.getFullYear();
      const date = today. getDate();
      setEstDate({
        month: month -estDate.month,
        year:  year-estDate.year,
        date: date-estDate.date})
      setInterval(()=>{
        setEstDate({
          month: month -estDate.month,
          year:  year-estDate.year,
          date: date-estDate.date})
      }, 23*60*60*1000);
    }
    date();
  },[])


  return (
    <div ref={component}>
        <div className=' relative w-full bg-white font-spaceGrotesk'>
            <div className='flex items-center' >
                <p className=' pt-[25vh] px-[7.5vw] h-[70vh] text-xl md:text-7xl  leading-[10vh] w-[85vw] '><span className='para-animation1  my-[0.2vh] relative'><div className=' highlight w-[100%] h-[80%] absolute bg-red-500 -z-30'></div>Akass Infrastructure Pvt. Ltd.,</span> <span className='para-animation2 my-[0.2vh]'>Founded in 2007 with a </span><span className='para-animation3 my-[0.2vh]'>Mission to "Protect the Future". </span> </p>
            </div>
            <div className="video para-animation1 relative">
            <div className=' class w-[100%] absolute h-full bg-black/[.80]' ></div>
            <div className='absolute flex flex-col gap-2 left-[25vw] md:left-[20vw] top-[5vh] md:top-[40vh] text-white text-sm md:text-4xl'>
              <p>Protecting The Future for </p>
              <p className='font-lotaReg'><span className=' bg-red-500 px-[0.5vw]'>{estDate.year}</span> Years,</p>
              <p className='font-lotaReg'><span className=' bg-red-500 px-[0.5vw]'>{estDate.month}</span> Months, </p>
              <p className='font-lotaReg'><span className=' bg-red-500 px-[0.5vw]'>{estDate.date}</span> Days.</p>
            </div>
            <div className="card absolute invisible md:visible top-[40vh] right-[20vw] left-[50vw] text-white cursor-default ">
              <Marquee pauseOnHover >
              <div className=' cards p-1 mx-[15vw] h-[40vh] w-[20vw] bg-white/5 backdrop-blur-xl rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[0.5vw] rounded-tl-lg rounded-br-lg '>Clients</h1>
                 <h2>ISRO, Rajarhat,Kolkata</h2>
                 <img src={isroimg} width={200} alt="" />
                 <Link to="/clients"><div className='flex items-center gap-2 cursor-pointer'><p>Read More</p><CiLocationArrow1 className='mt-[0.5vh]'/></div></Link>
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh] w-[20vw] bg-white/5 backdrop-blur-xl rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[0.5vw] rounded-tl-lg rounded-br-lg '>Clients</h1>
                 <h2>Belur Math, Howrah</h2>
                 <img src={belurimg} width={100} alt="" />
                 <Link to="/clients"><div className='flex items-center gap-2 cursor-pointer'><p>Read More</p><CiLocationArrow1 className='mt-[0.5vh]'/></div></Link>
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh] w-[20vw] bg-white/5 backdrop-blur-xl rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[0.5vw] rounded-tl-lg rounded-br-lg '>Clients</h1>
                 <h2>Garden Reach Shipbuilders & Engineers Ltd.</h2>
                 <img src={reachimg} width={200} alt="" />
                 <Link to="/clients"><div className='flex items-center gap-2 cursor-pointer'><p>Read More</p><CiLocationArrow1 className='mt-[0.5vh]'/></div></Link>
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh] w-[20vw] bg-white/5 backdrop-blur-xl rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[0.5vw] rounded-tl-lg rounded-br-lg '>Clients</h1>
                 <h2>BMW Showroom, Kolkata</h2>
                 <img src={bmwimg} width={100} alt="" />
                 <Link to="/clients"><div className='flex items-center gap-2 cursor-pointer'><p>Read More</p><CiLocationArrow1 className='mt-[0.5vh]'/></div></Link>
               </div>
               <div className='cards p-1 mx-[15vw] h-[40vh] w-[20vw] bg-white/5 backdrop-blur-xl rounded-md border-white/5 border-2 flex flex-col items-center justify-center gap-3'>
                 <h1 className=' text-xl bg-red-500 px-[0.5vw] rounded-tl-lg rounded-br-lg '>Clients</h1>
                 <h2>Desun Hospital</h2>
                 <img src={hospiimg} width={200} alt="" />
                 <Link to="/clients"><div className='flex items-center gap-2 cursor-pointer'><p>Read More</p><CiLocationArrow1 className='mt-[0.5vh]'/></div></Link>
                 </div>
              </Marquee>
               

            </div>
            <video src={video} autoPlay loop muted></video>
            </div>

        
        </div>
        <div className=' w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-red-500'>
          <div className=' description w-[80vw] md:w-[50vw] font-spaceGrotesk h-[50vh] bg-white border-2 border-black rounded-lg shadow-2xl flex items-center justify-center'>
            <div className='p-[0.5rem] md:p-[2rem] text-red-500 text-sm md:text-xl'>
              {description.split(" ").map((word,index)=>(
                <span key={index}>
                            {word.split("").map((letter, i)=>(
                              <span key={i}
                              className={`des-animation inline-block opacity-0`}>
                                 {letter}
                              </span>
                         ))}
                         &nbsp;
                </span>

              ))}

            </div>

          </div>
        </div>
        {/* <div className="services">Our Services - This will contain the brief of the Services page.</div>
        <div className='fireext'>Fire Ext(with enquiry) - Only if the service is available.</div>
        <div className="industry">Industry Required.</div>
        <div className="overview">Overview</div>
        <div className="testimonials">Testimonias- If available</div> */}
    </div>
  )
}

export default Home
