import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F1A] text-[#8A8AA0] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-[#2A2A4A]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Machine Learning & AI Development</p>
          <p>Backend Engineering, Data Science</p>
          <p>Full Stack Applications</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>1+ year of experience</p>
          <a href="#projects" className="text-[#6C63FF] hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>New Delhi, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-white/5 w-full text-center">
          pratham
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="text-[#6C63FF] hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-[#6A6A80] font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Pratham Verma | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:prathamverma7289@gmail.com" className="text-[#6C63FF] hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">prathamverma7289@gmail.com</a>
          <a href="tel:+917289831077" className="text-[#6C63FF] hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">+91 7289831077</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="https://github.com/PrathamVerma21" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
          <a href="https://linkedin.com/in/prathamverma21" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;