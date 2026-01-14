import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ExperienceItem: React.FC<{ 
  num: string; 
  date: string; 
  title: string; 
  company: string; 
  bullets: string[];
  index: number;
}> = ({ num, date, title, company, bullets, index }) => {
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-10 md:py-16 flex flex-col md:flex-row gap-6 md:gap-20"
    >
      {/* Background Number */}
      <div className="flex-shrink-0 relative overflow-hidden h-fit">
        <motion.span 
          whileHover={{ x: 10, scale: 1.05 }}
          className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-700 block select-none leading-none"
        >
          {num}
        </motion.span>
      </div>
      
      <div className="flex-grow">
        <div className="mb-6">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-500 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-2"
          >
            {date}
          </motion.span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-1 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 italic font-medium text-sm md:text-base">{company}</p>
        </div>
      </div>

      <div className="flex-grow max-w-2xl">
        <ul className="space-y-4">
          {bullets.map((bullet, i) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex gap-3 md:gap-4 text-gray-400 group-hover:text-gray-200 transition-colors"
            >
              <span className="text-blue-500 mt-1.5 flex-shrink-0 text-lg leading-none">•</span>
              <p className="text-sm md:text-base leading-relaxed">{bullet}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Journey: React.FC = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      num: "01",
      date: "2024 - PRESENT",
      title: "MERN Full Stack Developer",
      company: "Tech Vaseegrah",
      bullets: [
        "Developing high-performance web applications using Next.js, TypeScript, and Tailwind CSS.",
        "Architecting scalable backend systems and REST APIs with Node.js and Express.",
        "Managing complex data structures and database schemas using MongoDB for production environments."
      ]
    },
    {
      num: "02",
      date: "2024",
      title: "Full Stack Developer Intern",
      company: "SLA Institute",
      bullets: [
        "Completed intensive training in MERN Full Stack development (MongoDB, Express, React, Node.js).",
        "Developed a 'Hotel Booking Management' project to handle room reservations and user details.",
        "Mastered building responsive front-end interfaces and integrating them with backend services."
      ]
    }
  ];

  return (
    <div ref={containerRef} className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-black overflow-hidden">
      
      {/* Animated Background Gradient */}
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Moving Progress Line - Hidden on very small screens, shown from tablet up */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-0 md:left-[90px] top-48 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent origin-top hidden md:block"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-32 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-white">
              JOURNEY
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 max-w-sm font-medium uppercase tracking-widest text-[10px] md:text-sm md:text-right leading-relaxed"
          >
            Over the years, I've had the privilege of working with industry leaders and disruptive startups.
          </motion.p>
        </div>

        <div className="flex flex-col relative z-10">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              index={index}
              num={exp.num}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              bullets={exp.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;