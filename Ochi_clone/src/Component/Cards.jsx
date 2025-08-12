import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
           <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
             <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className='bottom-10 left-10 border-2 rounded-full py-1 px-5 absolute'>&copy:2025
               </button>
             </div>
           </div>

        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
           <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
             <img className='w-32'
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className='bottom-10 left-10 border-2 rounded-full py-1 px-5 absolute'>&copy:2025</button>
           </div>
           <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
             <img className='w-32'
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className='bottom-10 left-10 border-2 rounded-full py-1 px-5 absolute'>&copy:2025</button>
           </div>

        </div>
      
    </div>
  )
}

export default Cards
