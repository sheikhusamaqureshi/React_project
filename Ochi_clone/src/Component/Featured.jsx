import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React, { useState } from 'react'




function Featured  () {

  const cards = [useAnimation(), useAnimation()];


  const handleHover = (index) => {
    cards[index].start({y: "0"})
  };
  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  }

  return (
    <div className='w-full py-20'>
        <div className="w-ful px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className='text-6xl font-["Neue_Montreal" tracking-tight]'>Featured Projects</h1>
               </div>


          <div className="px-20">
             <div className="cards w-full flex gap-10 mt-10"> 
               <motion.div 
               onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
               
               className="cardcontainer relative w-1/2 h-[75vh]">
                  <div className=" w-full h-full  rounded-xl overflow-hidden">
                     <h1 className='text-8xl  flex overflow-hidden tracking-tight leading-none z-[9] top-1/2 -translate-y-1/2 -translate-x-1/2 left-full absolute text-[#CDEA68]'>
                     {"FYDE".split("").map((item,index) => (
                      <motion.span
                      initial={{y:"100%"}} 
                      animate={cards[0]}
                      transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                      className='inline-block'>
                        {item}
                        </motion.span>
                     ))}
                     </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                   </div>
                </motion.div>

              <motion.div
              onHoverStart={()=>handleHover(1)}
              onHoverEnd={()=>handleHoverEnd(1)}
              
              className="cardcontainer relative w-1/2 h-[75vh]">
                  <div className="card w-full h-full  rounded-xl overflow-hidden">
                     <h1 className='text-8xl flex overflow-hidden tracking-tight leading-none z-[9] top-1/2 -translate-y-1/2 translate-x-1/2 right-full absolute text-[#CDEA68]'>
                     {"VISE".split("").map((item,index) => (
                   <motion.span
                      initial={{y:"100%"}} 
                      animate={cards[1 ]}
                      transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                      className='inline-block'>
                        {item}
                        </motion.span>                     ))}
                     </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png" alt="" />

                  </div>
                </motion.div>

            </div>
        </div>
    </div> 
  )
}

export default Featured
