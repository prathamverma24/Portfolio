import React from 'react';
import profileImage from '../assets/about/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-[#1A1A2E] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Ambient gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4ECDC4]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#2A2A4A] transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-[#3A3A5A] rounded border border-[#4A4A6A] transform -translate-x-1/2 z-10 shadow-lg"></div>
            
            {/* Badge Card */}
            <div className="bg-[#0F0F1A] w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_60px_rgba(108,99,255,0.2)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-[#2A2A4A]">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#0F0F1A] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-[#6C63FF]/30 rounded-full"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-[#6C63FF]/20 to-[#4ECDC4]/10 border border-[#2A2A4A] flex items-center justify-center">
                <img 
                  src={profileImage} 
                  alt="Pratham Verma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Hello!</span>
          </h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-[#B0B0C8]">
            Hi, my name is <span className="gradient-text text-xl font-black mx-1 tracking-wide uppercase">Pratham Verma</span>, an aspiring Software Engineer and Data Science enthusiast based in New Delhi, India. Passionate about solving real-world problems through data-driven solutions and system design.
          </p>

          {/* Experience Highlights */}
          <div className="mb-6 text-[#B0B0C8] text-base leading-relaxed font-medium">
            <p className="mb-2">
              <span className="text-[#6C63FF] font-black">Data Science Intern</span> at CertED in collaboration with Haridwar University
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2 text-[#8A8AA0]">
              <li>Built Music Recommendation System using collaborative & content-based filtering</li>
              <li>Developed Weapon Detection System using CNN-based deep learning models</li>
              <li>Applied computer vision techniques with TensorFlow/Keras and PyTorch</li>
            </ul>
          </div>

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">
            <span data-aos="zoom-in" data-aos-delay="300" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">Python</span>
            <span data-aos="zoom-in" data-aos-delay="400" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">FastAPI</span>
            <span data-aos="zoom-in" data-aos-delay="500" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">TensorFlow</span>
            <span data-aos="zoom-in" data-aos-delay="600" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">PyTorch</span>
            <span data-aos="zoom-in" data-aos-delay="700" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">XGBoost</span>
            <span data-aos="zoom-in" data-aos-delay="800" className="px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full text-[#6C63FF] text-xs font-bold hover:bg-[#6C63FF]/20 transition-all">MongoDB</span>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0F0F1A]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#6C63FF] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#4ECDC4] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;