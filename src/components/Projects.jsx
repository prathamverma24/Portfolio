import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Pravha – AI Flood Forecasting",
    description: "AI-powered flood prediction using XGBoost achieving 86.5% accuracy. Processes 20+ environmental features for real-time risk prediction with multi-channel alert system.",
    tags: ["XGBoost", "Python", "ML", "Real-time"],
    gradient: "from-[#6C63FF] to-[#4ECDC4]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 2,
    title: "Weapon Detection System",
    description: "Real-time weapon detection using deep learning CNN/YOLO. Implemented preprocessing, data augmentation, and model optimization for precision and recall.",
    tags: ["CNN", "YOLO", "Deep Learning", "Computer Vision"],
    gradient: "from-[#FF6B6B] to-[#FFA07A]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 3,
    title: "Spotify Music Recommendation",
    description: "Recommendation system using collaborative and content-based filtering with Pandas, NumPy, and Scikit-learn. Enhanced accuracy via feature engineering.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    gradient: "from-[#4ECDC4] to-[#44BD9E]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 4,
    title: "Backend APIs & Microservices",
    description: "Scalable backend APIs using FastAPI with MongoDB, REST APIs, and microservices architecture. Real-time data pipeline with sub-100ms inference latency.",
    tags: ["FastAPI", "MongoDB", "REST", "Microservices"],
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 5,
    title: "NLP Sentiment Analysis Engine",
    description: "Custom NLP pipeline for sentiment classification using transformer models. Supports multi-language text processing with high accuracy.",
    tags: ["NLP", "Transformers", "PyTorch", "BERT"],
    gradient: "from-[#A78BFA] to-[#6C63FF]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 6,
    title: "Real-time Data Dashboard",
    description: "Interactive dashboard for visualizing real-time data streams with dynamic charts, alerts, and export capabilities.",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    gradient: "from-[#F97316] to-[#FFD93D]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 7,
    title: "AI Chatbot Assistant",
    description: "Conversational AI assistant using LLM fine-tuning with RAG for domain-specific knowledge retrieval and response generation.",
    tags: ["LLM", "RAG", "LangChain", "Vector DB"],
    gradient: "from-[#06B6D4] to-[#0891B2]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 8,
    title: "Image Classification Pipeline",
    description: "End-to-end image classification system using transfer learning with ResNet and EfficientNet architectures.",
    tags: ["TensorFlow", "Keras", "ResNet", "Transfer Learning"],
    gradient: "from-[#22C55E] to-[#4ECDC4]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 9,
    title: "Anomaly Detection System",
    description: "Real-time anomaly detection for time-series data using Isolation Forest and Autoencoders with alerting mechanisms.",
    tags: ["Anomaly Detection", "Autoencoder", "Python", "MLOps"],
    gradient: "from-[#EC4899] to-[#A78BFA]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 10,
    title: "Web Scraping & Data Pipeline",
    description: "Distributed web scraping system with automated data extraction, cleaning, and storage pipeline for large-scale datasets.",
    tags: ["Scrapy", "PostgreSQL", "Airflow", "Docker"],
    gradient: "from-[#F43F5E] to-[#EC4899]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 11,
    title: "Stock Price Predictor",
    description: "LSTM-based stock price prediction model with technical indicators, market sentiment analysis, and backtesting framework.",
    tags: ["LSTM", "Time Series", "Finance", "TensorFlow"],
    gradient: "from-[#0EA5E9] to-[#06B6D4]",
    github: "https://github.com/PrathamVerma21",
    live: null
  },
  {
    id: 12,
    title: "Portfolio Optimization Tool",
    description: "Modern portfolio theory implementation with Monte Carlo simulation for optimal asset allocation and risk assessment.",
    tags: ["Python", "Finance", "Optimization", "Statistical"],
    gradient: "from-[#84CC16] to-[#22C55E]",
    github: "https://github.com/PrathamVerma21",
    live: null
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl h-full overflow-hidden">
        {/* Gradient accent top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
        
        <div className="p-6 h-full flex flex-col">
          {/* Gradient Icon */}
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 shadow-lg`}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <h3 className={`text-white font-bold text-lg mb-2 transition-all duration-300 bg-gradient-to-r ${project.gradient} bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px]`}>
            {project.title}
          </h3>

          <p className="text-[#8A8AA0] text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#1A1A2E] border border-[#2A2A4A] text-[#8A8AA0] group-hover:border-[#6C63FF]/30 group-hover:text-[#6C63FF] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#2A2A4A]">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#6C63FF] hover:text-white transition-colors group/link"
            >
              <svg className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects"
      className="section-padding w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #16213E 100%)"
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <div className="section-badge">Projects</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-[#8A8AA0] text-base md:text-lg max-w-xl font-medium leading-relaxed">
            A collection of ML, AI, and backend projects — from research prototypes to production-ready systems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Link */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <a 
            href="https://github.com/PrathamVerma21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;