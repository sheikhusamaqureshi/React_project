import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scr0ll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20">
            {["We Create","Eye Opening","Presentation"].map((item, index) => {
                return (
                <div className="masker">
                   <div className="w-fit flex item-end">
                    {index === 1 && (
                      <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1],duration:1}}  className='mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.3vw] relative bg-[url("D:\github_repo\React_project\Ochi_clone\src\assets\content-image01.jpg")] bg-cover '></motion.div>)}
                       <h1 className=" pt-[0.1vw]  items-center uppercase text-[8vw] h-full leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-bold ">
                    {item}
                   </h1>
                 </div>
                </div>
            );
            })}
            </div>

             <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">             
            {[
            "For Public and Private companies",
            "From the First pitch to IPO",
            ].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>

            ))}


            <div className=' start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-4xl '>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                 <span className='rotate-[45deg]'>
               <FaArrowUp />
                   </span>
                 </div>
              </div>
         </div>
     </div>
  );
}
export default LandingPage;     
        
