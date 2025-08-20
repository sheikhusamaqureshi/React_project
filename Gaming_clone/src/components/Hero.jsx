import React, { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "/src/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const totalVideos = 3;
  const mainVideoRef = useRef(null);

  const handleMiniVdClicked = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalVideos ? 1 : prevIndex + 1
    );
  };



   

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  // Play new video whenever currentIndex changes
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.load();
      mainVideoRef.current.play().catch(() => {
        console.warn("Autoplay blocked until user clicks");
      });
    }
  }, [currentIndex]);

  const upcomingVideoIndex =
    currentIndex >= totalVideos ? 1 : currentIndex + 1;


    useGSAP(() => {
  if (hasClicked) {
    gsap.set('#next-video', { visibility: 'visible' });

    gsap.to('#next-video', {
      transformOrigin: 'center center',
      scale: 1,
      width: '100%',
      height: '100%',
      duration: 1,
      ease: 'power1.inOut',
      onStart: () => nextVideo.current.play(),
    });

    gsap.from('#current-video', {
      transformOrigin: 'center center',
      scale: 0,
      duration: 1.5,
      ease: 'power1.inOut'
    });
  }
}, { dependencies: [currentIndex], revertOnUpdate: true });


useGSAP(() => {
  gsap.set('#video-frame', {
    clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
    borderRadius: "0% 0% 40% 10%",
  });

  gsap.from('#video-frame', { 
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0% 0% 0% 0%",
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '#video-frame',
      start: 'center center',
      end: 'bottom center',
      scrub: true
    }
  });
});




  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
     { isLoading && (
      <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
       <div className="three-body">
        <div className="three__body"></div>
        <div className="three__body"></div>
        <div className="three__body"></div>

      </div>
      </div>
     )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
      
        <video
          ref={mainVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay={hasClicked}
          loop
          muted
          playsInline
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
          onLoadedData={() => setIsLoading(false)}
        />

       
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVdClicked}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              playsInline
              
              className="size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>

      
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 w-full h-full z-40">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redifi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the play Economy
            </p>
            
            <Button id="watch-trailer" 
            title="Watch Tralair"
             leftIcon={<TiLocationArrow />}
            containerClass="!bg-yellow-300 flex-center gap-1" />
          </div>
        </div>
      </div>

     
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black ">
          G<b>a</b>ming
        </h1>
    </div>
  );
};

export default Hero;
