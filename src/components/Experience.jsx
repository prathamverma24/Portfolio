import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const experiences = [
  {
    number: "01",
    title: "Data Science Intern",
    company: "CertED × Haridwar University",
    dateLabel: "2024",
    description: "Built ML systems for real-world applications using deep learning and recommendation algorithms.",
    points: [
      "Built Music Recommendation System using collaborative & content-based filtering",
      "Developed Weapon Detection System using CNN-based deep learning models",
      "Applied computer vision techniques with TensorFlow/Keras and PyTorch"
    ],
    align: "left"
  },

  {
    number: "03",
    title: "Open Source Contributor",
    company: "GitHub",
    dateLabel: "2023 – Present",
    description: "Active contributor to ML and data science open source projects.",
    points: [
      "Contributed to model optimization and documentation improvements",
      "Developed reusable ML pipeline components",
      "Collaborated on research-oriented deep learning experiments"
    ],
    align: "right"
  },
  {
    number: "04",
    title: "Hackathon Participant",
    company: "Various Events",
    dateLabel: "",
    description: "Participated in multiple hackathons building AI-powered solutions under time constraints.",
    points: [
      "Built AI flood forecasting system achieving 86.5% accuracy",
      "Developed real-time analytics dashboards",
      "Won recognition for innovative ML solutions"
    ],
    align: "left"
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });

  return (
    <section 
      id="experience"
      ref={containerRef}
      className="section-padding w-full relative overflow-hidden bg-[#0F0F1A]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="section-badge">Experience</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[#8A8AA0] text-base md:text-lg max-w-xl font-medium leading-relaxed">
            From internships to freelance — here's my career roadmap in building data-driven solutions and scalable systems.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Desktop: Timeline line in center */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-[#2A2A4A]"></div>
            <motion.div 
              className="absolute top-0 left-0 w-full origin-top bg-gradient-to-b from-[#6C63FF] via-[#FF6B6B] to-[#4ECDC4]"
              style={{ scaleY }}
            />
          </div>

          {experiences.map((exp, index) => {
            const isLeft = exp.align === "left";
            
            return (
              <div key={index} className="relative mb-12 md:mb-20 last:mb-0">
                <div className={`md:flex md:items-start ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Desktop: Date column (left or right side) */}
                  <div className="hidden md:block md:w-[42%] md:pt-8">
                    <div className={`${isLeft ? 'text-right pr-10' : 'text-left pl-10'}`}>
                      <span className="inline-block text-4xl lg:text-5xl font-black text-white bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(108,99,255,0.3)] select-none">
                        {exp.dateLabel}
                      </span>
                    </div>
                  </div>

                  {/* Desktop: Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-5 h-5 rounded-full bg-[#6C63FF] border-4 border-[#0F0F1A] shadow-[0_0_20px_rgba(108,99,255,0.5)]"
                    >
                      <div className="absolute inset-0 rounded-full bg-[#6C63FF]/30 animate-ping"></div>
                    </motion.div>
                  </div>

                  {/* Card (desktop: opposite side of date) */}
                  <div className="md:w-[42%]">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={`relative rounded-2xl bg-[#1A1A2E] border border-[#2A2A4A] overflow-hidden hover:border-[#6C63FF]/40 transition-all duration-500`}>
                        {/* Top gradient line */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] opacity-60"></div>
                        
                        <div className="p-6 md:p-7">
                          {/* Number + Mobile date */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold font-mono text-[#6C63FF]/60">{exp.number}</span>
                            <span className="md:hidden text-[10px] font-bold text-[#8A8AA0] bg-[#2A2A4A] px-2.5 py-1 rounded-full">
                              {exp.dateLabel}
                            </span>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight">{exp.title}</h3>
                          <p className="text-sm font-semibold text-[#6C63FF] mb-4">{exp.company}</p>
                          <p className="text-sm text-[#8A8AA0] leading-relaxed mb-4">{exp.description}</p>

                          <ul className="space-y-2">
                            {exp.points.map((point, i) => (
                              <li key={i} className="text-xs text-[#6A6A80] leading-relaxed pl-5 relative">
                                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#6C63FF]/40"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* End marker */}
          <div data-aos="fade-up" className="hidden md:block text-center mt-16">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#6C63FF]">
              <span className="w-8 h-px bg-[#6C63FF]/40"></span>
              Continue on LinkedIn
              <span className="w-8 h-px bg-[#6C63FF]/40"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;