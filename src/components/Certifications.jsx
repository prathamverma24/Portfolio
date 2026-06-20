import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford University / Coursera",
    date: "2024",
    credential: "Coursera Verified",
    description: "Comprehensive ML course covering supervised/unsupervised learning, neural networks, and best practices.",
    skills: ["Supervised Learning", "Neural Networks", "Unsupervised Learning"],
    color: "#6C63FF",
    bgGradient: "from-[#6C63FF]/20 to-[#4ECDC4]/10"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "deeplearning.ai / Coursera",
    date: "2024",
    credential: "Coursera Verified",
    description: "In-depth study of neural networks, CNNs, RNNs, LSTMs, transformers, and practical ML strategy.",
    skills: ["CNNs", "RNNs", "Transformers", "TensorFlow"],
    color: "#FF6B6B",
    bgGradient: "from-[#FF6B6B]/20 to-[#FFA07A]/10"
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    date: "2024",
    credential: "Google Certified",
    description: "Professional certification demonstrating proficiency in building and deploying TensorFlow models.",
    skills: ["TensorFlow", "Keras", "Model Deployment", "Computer Vision"],
    color: "#FFD93D",
    bgGradient: "from-[#FFD93D]/20 to-[#FF6B6B]/10"
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM / edX",
    date: "2023",
    credential: "IBM Certified",
    description: "Covered data analysis, visualization, pandas, numpy, and statistical methods for data science.",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
    color: "#4ECDC4",
    bgGradient: "from-[#4ECDC4]/20 to-[#44BD9E]/10"
  },
  {
    id: 5,
    title: "FastAPI & Backend Development",
    issuer: "Udemy",
    date: "2024",
    credential: "Course Completion",
    description: "Built RESTful APIs, integrated databases, authentication, and deployed production-ready applications.",
    skills: ["FastAPI", "MongoDB", "REST", "Deployment"],
    color: "#A78BFA",
    bgGradient: "from-[#A78BFA]/20 to-[#6C63FF]/10"
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2023",
    credential: "Proficient",
    description: "Mastered core DSA concepts including graphs, trees, dynamic programming, and system design fundamentals.",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
    color: "#F97316",
    bgGradient: "from-[#F97316]/20 to-[#FFD93D]/10"
  }
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card rounded-2xl h-full overflow-hidden relative">
        {/* Colored top accent */}
        <div 
          className="h-1.5 w-full" 
          style={{ background: cert.color }}
        ></div>
        
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        <div className="p-6 h-full flex flex-col relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${cert.color}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                {cert.title}
              </h3>
              <p className="text-[#8A8AA0] text-xs font-medium">{cert.issuer}</p>
            </div>
            
            {/* Badge / Icon */}
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-3"
              style={{ backgroundColor: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
            >
              <svg className="w-4 h-4" style={{ color: cert.color }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
              </svg>
            </div>
          </div>

          {/* Date & Credential */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono font-bold" style={{ color: cert.color }}>
              {cert.date}
            </span>
            <span className="text-[10px] text-[#6A6A80] font-medium">|</span>
            <span className="text-[10px] text-[#6A6A80] font-medium">{cert.credential}</span>
          </div>

          {/* Description */}
          <p className="text-[#8A8AA0] text-xs leading-relaxed mb-4 flex-1">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-full border"
                style={{ 
                  borderColor: `${cert.color}30`, 
                  color: cert.color,
                  backgroundColor: `${cert.color}10`
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Hover shine effect */}
          <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section 
      id="certifications"
      className="section-padding w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #16213E 0%, #0F0F1A 50%, #1A1A2E 100%)"
      }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <div className="section-badge">Certifications</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Verified{' '}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-[#8A8AA0] text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Professional certifications and verified courses in ML, AI, and software development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <div className="btn-secondary inline-flex cursor-default">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            10+ Certifications & Verified Credentials
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;