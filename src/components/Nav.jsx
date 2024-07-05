import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/akasslogo.png"
import gsap from "gsap";
import Headroom from "react-headroom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import audio1 from "../assets/audio/1.mp3"
import audio2 from "../assets/audio/2.mp3"
import { Link, NavLink } from "react-router-dom";
function Nav() {

  const audio1ref = useRef(null)
	const audio2ref = useRef(null)

  //-------Fetching Scroll Position For GlassMorphism Effect------ 
  const [scrollPosition, setScrollposition] = useState(0);
  const handleScroll = ()=>{
     setScrollposition(window.scrollY);
  }
  const content = useRef(null)
  useEffect(()=>{
     window.addEventListener("scroll", handleScroll);
     let ctx = gsap.context(()=>{
         const t1  = gsap.timeline();
         t1.fromTo([".li-animation1",".li-animation2",".li-animation3",".li-animation4"],
        {
          x: -250,
          y: -100, 
          opacity: 0
        },
      {
        x: 0,
        y: 0, 
        opacity: 1,
        ease: "slow(0.9,2,false)",
        stagger: 0.5,
        duration: 0.8,
      })
     }, content)
     return ()=>ctx.revert();
  },[])  

  const [open, setOpen] = useState(false)
  function toggle(){
	if(open){
      setOpen(false)
	  audio2ref.current.play()
  
	}
	else{
      setOpen(true)
	  audio1ref.current.play()

	}
  }
  return (
    <Headroom style={{transition: 'all .5s ease-in-out'}}>
    <div className={`w-screen relative h-[10vh] px-[5vw] text-sm md:text-lg flex items-center justify-between font-lotaReg text-[#393939] bg-white  ${scrollPosition===0 ? "bg-white": "backdrop-blur-3xl bg-white/50"}`}>
      <div className="cursor-pointer ">
         <Link to="/"><img src={logo} alt="" className=" w-[100px] md:w-[250px] "/></Link>
      </div>
      <div ref={content} >
      <audio ref={audio1ref} src={audio1}/>
	    <audio ref={audio2ref} src={audio2}/>
        <div className="text-3xl  cursor-pointer md:invisible absolute top-4 right-4" onClick={toggle}>{open? <RxCross2 />: <RxHamburgerMenu />}</div>
        <ul className={`md:flex md:gap-20  h-[45vh] md:h-[10vh] tracking-wider md:text-xl text-sm items-center absolute md:static pl-5 left-[0.1vw] md:pl-0 md:z-auto z-[-1] w-full ${open ? "top-[10vh] ": "top-[-490px] "} md:bg-transparent bg-white`} >
        <NavLink to="/" className={({isActive})=> isActive?"underline underline-offset-8": ""}><li className='li-animation1 cursor-pointer no-underline hover:underline hover:underline-offset-8 md:my-0 my-7 '>Home</li></NavLink>
        <NavLink to="/clients" className={({isActive})=> isActive?"underline underline-offset-8": ""}><li className='li-animation1 cursor-pointer no-underline hover:underline hover:underline-offset-8 md:my-0 my-7 '>Works</li></NavLink>
        <NavLink to="/industry" className={({isActive})=> isActive?"underline underline-offset-8": ""}><li className='li-animation1 cursor-pointer no-underline hover:underline hover:underline-offset-8 md:my-0 my-7 '>Industry</li></NavLink>
        <NavLink to="/services" className={({isActive})=> isActive?"underline underline-offset-8": ""}><li className='li-animation1 cursor-pointer no-underline hover:underline hover:underline-offset-8 md:my-0 my-7 '>Services</li></NavLink>
        <NavLink to="/contactus" className={({isActive})=> isActive?"bg-red-500 li-animation4 cursor-pointer px-[2vw] py-[1vh] duration-500 w-[32vw] md:w-auto text-white md:my-0 my-7 rounded-full": "hover:bg-red-500 rounded-full bg-black/70 li-animation4 cursor-pointer px-[2vw] py-[1vh] duration-500 w-[32vw] md:w-auto   text-white md:my-0 my-7"}>Enquiry</NavLink>    
        </ul>
      </div>
    </div>
    </Headroom>
  )
}

export default Nav
