import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/hero video/intro.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Force autoplay on load (browsers require muted for autoplay)
  useEffect(() => {
    if (videoLoaded && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [videoLoaded]);

  // Listen for first user interaction to unmute the video
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current && isMuted && isPlaying) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    };
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('keydown', handleUserInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isMuted, isPlaying]);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - AI Generated Intro */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading indicator while video loads */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-5 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-2 border-[#6C63FF] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm <br /> <span className="gradient-text text-4xl md:text-6xl">Pratham Verma</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            Aspiring Software Engineer & Data Science enthusiast skilled in Machine Learning, Backend Development, and AI systems.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a href="#projects
            " className="btn-primary text-xs md:text-base px-4 md:px-6 py-2 md:py-2.5">
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a href="#contact" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play/Pause + Sound Controls */}
        <div className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-3 md:gap-3 self-start md:self-auto">
          
          {/* Sound Toggle Button */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="500"
            className="flex flex-row md:flex-col items-center gap-2 md:gap-2 cursor-pointer group self-start md:self-auto"
            onClick={toggleMute}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
              {isMuted ? (
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              {isMuted ? "Muted" : "Sound"}
            </span>
          </div>

          {/* Play/Pause Button */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-row md:flex-col items-center gap-2 md:gap-2 cursor-pointer group self-start md:self-auto"
            onClick={toggleVideo}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#6C63FF] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(108,99,255,0.6)]">
              {!isPlaying || isMuted ? (
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? "Play" : "Pause"}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;