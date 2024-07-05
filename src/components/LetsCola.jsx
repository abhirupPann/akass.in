import {useRef, useState, useEffect} from 'react'
import gsap from 'gsap';
import emailjs from "@emailjs/browser"
import { FiChevronsRight } from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function LetsCola() {
  const form = useRef();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  
  const component = useRef(null);
  useEffect(()=>{
    let ctx = gsap.context(()=>{
       const t2 = gsap.timeline({
        scrollTrigger:{
          trigger: ".letscolab"
        }
       });
       
       t2.fromTo(".letscolab",{
        y:-255,
        opacity:0
       },
      {
       y:0,
       opacity:1,
       ease: "slow(0.9,2,false)",
       duration: 1
      });
     
    }, component);
    return () => ctx.revert(); 
  },[]);
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_bxh5zsu', 'template_zwrj105', form.current, {
        publicKey: 'vFMU0Sp9Nc7jdm96k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const notify = () => toast("Email Received Successfully!!📨");
  return (
    <div className=' px-[7.5vw] pt-[10vh]' ref={component}>
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default '>Quick Enquiry</h1>
      <p className='font-spaceGrotesk my-[10vh] text-sm'>AKASS INFRASTUCTURE PVT LTD is dedicated to "Innovation and Excellence" in all aspects of our service. With a firm belief in delivering flexible solutions, backed by superior service excellence, cutting-edge technology, and practical experience, we stand as distributors of TYCO safety products across Pan India.

     With nearly two decades of experience, formerly under the name DAKS Fire & Safety Corporation since 2007, we have consistently demonstrated our commitment to innovation, technological leadership, and the highest standards of product quality and support. Our track record speaks for itself, showcasing our ability to analyze, develop, and deliver solutions that exceed expectations.

    As we transition to AKASS INFRASTUCTURE PVT LTD, effective from 01/06/2013, we reaffirm our dedication to providing cost-effective solutions tailored to your specific needs. <span className=' hidden sm:block'> Our team of well-trained and experienced professionals is poised to deliver the highest level of service, ensuring your utmost satisfaction.
  
    We are eager to serve you and are confident that our services will meet and exceed your expectations. We look forward to the opportunity to discuss how AKASS INFRASTUCTURE PVT LTD can support your organization's safety and infrastructure needs</span>.</p>
      <div className="email">
        
      <form ref={form} onSubmit={sendEmail} className=' letscolab flex flex-col gap-4 font-spaceGrotesk rounded-bl-3xl rounded-br-3xl bg-red-500 h-[65vh] justify-center pl-[40vw] pr-[10vw] shadow-md border-black border-2 relative'>
      <div className="text absolute left-5 md:left-20 w-[30vw] text-sm md:text-3xl leading-5 md:leading-[7vh]"><span className='bg-white p-[0.3rem]'>Let's get this conversation started !</span> Tell us a bit about yourself and we'll get in touch as soon as we can.</div>
      <input type="text" name="from_name" placeholder='Your Name' className='bg-red-400 placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh]'onChange={(e)=>{setName(e.target.value)}}/>
      <input type="email" name="from_email" placeholder='Your Email' className='bg-red-400 placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh] ' onChange={(e)=>{setEmail(e.target.value)}}/>
      <textarea name="message" placeholder='Message' className='bg-red-400 placeholder:text-[#6e3636] h-[20vh] rounded-md px-[2vw] py-[2vh]'/>
      
      <button type="submit" className='w-full border-2 px-[2vw] py-[2vh] h-[7vh] flex justify-between rounded-md border-[#6e3636] hover:bg-[#6e3636] transition-all ease-in-out hover:text-white disabled:hover:bg-transparent disabled:hover:text-black' onClick={notify} disabled={!name || !email}><div>Submit</div><div className=' text-2xl'><FiChevronsRight/></div></button>
      <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition= "Bounce"
  />
      {/* Same as */}
      <ToastContainer />
      </form>
      </div>
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default my-[10vh]'>Customer Support</h1>
      <div className='flex flex-col md:flex-row gap-5 font-spaceGrotesk'>
      <div className='flex flex-col justify-center gap-4 items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <FaPhone className='text-base sm:text-3xl'/>
      
        <h1 className='text-base sm:text-3xl'>Phone</h1>
        <p className='bg-white px-4 text-sm sm:text-base'>Call Us - 9830844624</p>
    

      </div>
      <div className=' flex flex-col justify-center gap-4 items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <MdEmail className='text-base sm:text-3xl'/>
    
        <h1 className='text-base sm:text-3xl'>Email</h1>
        <p className='bg-white px-4 text-sm sm:text-base'>Email Us- info@akass.in</p>
   

      </div>
      <div className=' flex flex-col justify-center gap-4  items-center  font-spaceGrotesk bg-red-500 border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <FaLocationDot className='text-base sm:text-3xl'/>
        <h1 className='text-base sm:text-3xl'>Address</h1>
        <p className='bg-white px-4 text-sm sm:text-base'>40A/1 J. K. Mitra Road, Kolkata - 700037</p>
      </div>
      </div>
      <h1 className=' font-lotaReg text-2xl font-medium underline underline-offset-[2vh] decoration-red-500 cursor-default my-[10vh]'>Google Maps</h1>
      <div className='my-[10vh] h-[80vh]'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4061851789907!2d88.28717407519771!3d22.563906679497922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027854a7d7390d%3A0xdf5af48ab788bbf!2sShalimar%2C%20Howrah%2C%20West%20Bengal%20711103!5e0!3m2!1sen!2sin!4v1715015242635!5m2!1sen!2sin" width="100%" height="100%"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

    </div>
  )
}
