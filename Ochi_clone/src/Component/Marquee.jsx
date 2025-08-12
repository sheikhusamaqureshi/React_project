import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl mt-20 bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 5 }}  className='text-[13vw] leading-none font-[Founder_Grotesk_x-Condesed] uppercase pt-10 mb-6 font-semibold pr-20'>we  are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 5 }}  className='text-[13vw] leading-none font-[Founder_Grotesk_x-Condesed] uppercase pt-10 mb-6 font-semibold pr-20'>we  are ochi</motion.h1>


        </div>
      
    </div>
  )
}

export default Marquee
