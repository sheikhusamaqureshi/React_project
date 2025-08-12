import React from 'react'

const About = () => {
  return (
    <div className='w-full -mt-[100px] p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[3vw]  tracking-tight">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
             peo­ple.
        </h1>

        <div className='w-full flex gap-60 border-t-[4px] mt-20 border-[#a1b562]'>
            <div className="w1/2 mt-5">
              <h1 className='text-5xl'>Our approach:</h1>
              <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className="w-2 h-2 mt-1 bg-zinc-100 rounded-full"> </div>
              </button>
            </div>
         <div
             className="w-1/2 h-[70vh] mt-5 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] bg-cover bg-center rounded-2xl">
</div>

             </div> 
         </div>
  );
};

export default About;
