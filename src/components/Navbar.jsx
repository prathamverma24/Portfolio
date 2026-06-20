import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#1A1A2E]/98 py-3' 
          : isScrolled 
            ? 'bg-[#0F0F1A]/80 backdrop-blur-lg py-3' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-black tracking-tight">
            Pratham<span className="gradient-text">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-white font-medium relative group transition-colors duration-300 text-sm tracking-wide"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#5A52D5] text-white font-semibold hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span className={`block absolute h-0.5 w-6 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] transform transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] transform transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-[600px] opacity-100 py-4' 
            : 'max-h-0 opacity-0 py-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)',
          borderBottom: isOpen ? '1px solid rgba(108,99,255,0.15)' : 'none'
        }}
      >
        <div className="flex flex-col px-6 space-y-1">
          {navLinks.map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white font-semibold text-base transition-all duration-300 hover:bg-[#6C63FF]/10 hover:border-[#6C63FF]/20 border border-transparent"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {/* Link indicator dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]/40 group-hover:bg-[#6C63FF] transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
              {link}
            </a>
          ))}
          <div className="pt-4 pb-3 px-4">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#5A52D5] text-white font-bold hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] transition-all duration-300 w-full text-center"
            >
              Hire Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;