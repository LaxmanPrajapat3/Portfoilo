


import laxman from "./assets/laxman.jpeg";
import MainLogo from "./assets/MainLogo.png";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Menu, X, Download } from 'lucide-react';

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed selection:bg-blue-500 selection:text-white">
      {/* --- Navigation --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider">Portfolio</h1>
          <nav className="hidden md:flex space-x-8">
            {sections.map(section => (
              <button key={section} onClick={() => scrollToSection(section)} className="capitalize text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {section}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* --- Mobile Menu --- */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900 pb-4"
          >
            <nav className="flex flex-col items-center space-y-4">
              {sections.map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="capitalize text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  {section}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Laxman Prajapat . All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Section Animation Wrapper ---
const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto px-6 py-20 md:py-28"
    >
      {children}
    </motion.section>
  );
};


// --- Hero Section ---
const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "A Creative Full Stack Developer.";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Hi, I'm Laxman Prajapat
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-400 font-mono h-8"
        >
          {text}
          <span className="animate-ping">|</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            View My Work <ArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => (
  <AnimatedSection id="about">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <motion.div 
        className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          <img 
            src="https://placehold.co/300x300/1e293b/ffffff?text=Laxman" 
            alt="Laxman Prajapat" 
            className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
          />
        </div>
      </motion.div>
      <div className="text-center md:text-left">
        <div className="text-lg text-gray-300 space-y-6">
          <p>
            I am a Bachelor of Computer Applications (BCA) student with a strong foundation in full-stack web development, utilizing React.js, Node.js, Express, and databases like MongoDB and MySQL. I have worked on projects such as StockUpNa, a stock learning and demo investment platform, and Homyway, a rental platform inspired by Airbnb, where I contributed to building scalable and user-friendly solutions.
          </p>
          <p>
            Alongside my technical expertise, I have taken on leadership roles in hackathons and team projects, which have strengthened my collaboration, problem-solving, and communication skills. Driven by a passion for technology and continuous learning, I am committed to contributing to innovative projects that create real-world impact and push the boundaries of modern software development.
          </p>
        </div>
        <motion.div
          className="mt-8 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/resume.pdf" 
            download
            className="bg-transparent border-2 border-blue-500 text-blue-400 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Download Resume <Download className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card relative bg-gray-800 rounded-lg overflow-hidden group h-full flex flex-col"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64 object-cover" 
        variants={itemVariants}
        style={{
            translateX: useTransform(x, [-100, 100], [-10, 10]),
            translateY: useTransform(y, [-100, 100], [-10, 10]),
        }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3 className="text-2xl font-bold mb-2 text-white" variants={itemVariants}>
          {project.title}
        </motion.h3>
        <motion.p className="text-gray-400 mb-4 flex-grow" variants={itemVariants}>
          {project.description}
        </motion.p>
        <motion.a href={project.link} className="text-blue-400 font-semibold inline-flex items-center self-start group-hover:text-blue-300" variants={itemVariants}>
          View Project <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};


// --- Projects Section (UPDATED with high-level animation) ---
const ProjectsSection = () => {
  const projects = [
    { title: 'StockUpna', description: 'StockUpNa is a learning platform that helps beginners practice stock market investing through a demo account and interactive chatbot guidance', image: 'https://placehold.co/600x400/1e293b/93c5fd?text=StockUpNa', link: 'https://stockupna-056b.onrender.com' },
    { title: 'HomyWay', description: 'HomyWay is a platform that connects travelers with affordable, home-like stays, offering a seamless and comfortable booking experience', image: 'https://placehold.co/600x400/1e293b/93c5fd?text=HomyWay', link: 'https://homyway-jb6q.onrender.com/posts' },
    { title: 'Project Three', description: 'A brief description of the project, its purpose, and the technologies used.', image: 'https://placehold.co/600x400/1e293b/93c5fd?text=Project+Three', link: '#' },
    { title: 'Project Four', description: 'A brief description of the project, its purpose, and the technologies used.', image: 'https://placehold.co/600x400/1e293b/93c5fd?text=Project+Four', link: '#' },
  ];

  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <AnimatedSection id="projects">
      <style jsx>{`
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 0.5rem; 
          border: 2px solid transparent;
          background: conic-gradient(from var(--angle), #1e293b, #38bdf8, #1e293b) border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          animation: rotate 4s linear infinite;
        }
        .project-card:hover::before {
          opacity: 1;
        }
        @keyframes rotate {
          100% {
            --angle: 360deg;
          }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
      
      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};


// --- Skills Section ---
const SkillsSection = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  ];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <AnimatedSection id="skills">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg"
            variants={skillCardVariants}
            whileHover={{ 
              y: -8,
              rotate: 2,
              scale: 1.1, 
              boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.3)",
              backgroundColor: '#1f2937',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <motion.img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              className="w-16 h-16 mb-4" 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
            <motion.p 
              className="text-lg font-medium text-gray-200 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

// --- Education Section ---
const EducationSection = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'University of Technology',
      years: '2022 - 2025',
      description: 'Focused on core computer science subjects including data structures, algorithms, web development, and database management.'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Govt. Sr. Sec. School, Nawa',
      years: '2020 - 2021',
      description: 'Completed studies in the Science-Math stream with a focus on Physics, Chemistry, and Mathematics.'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <AnimatedSection id="education">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {educationHistory.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <p className="text-blue-400 font-semibold">{edu.years}</p>
            </div>
            <p className="text-lg text-gray-300 mt-1">{edu.institution}</p>
            <p className="text-gray-400 mt-3">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};


// --- Contact Section ---
const ContactSection = () => (
  <AnimatedSection id="contact">
    <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
    <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
      I'm currently open to new opportunities and collaborations. Feel free to reach out!
    </p>
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input type="text" id="name" placeholder="Your Name" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" placeholder="Your Email" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" placeholder="Your Message" rows="5" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
        </div>
        <div className="text-center">
          <motion.button 
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </div>
  </AnimatedSection>
);
