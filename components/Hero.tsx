import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const cycleWords = ["EAT", "CODE", "SLEEP", "REPEAT"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const textMoveX = useTransform(dx, [0, 1200], [-15, 15]);
  const textMoveY = useTransform(dy, [0, 800], [-15, 15]);
  const boxTiltX = useTransform(dy, [0, 800], [10, -10]);
  const boxTiltY = useTransform(dx, [0, 1200], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-[100svh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-[#050505] pt-32 pb-10 md:pt-20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
      </div>

      <motion.div 
        style={{ x: textMoveX, y: textMoveY }}
        className="absolute top-[10%] right-[-5%] md:right-[5%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-blue-600/10 blur-[80px] md:blur-[130px] rounded-full z-0"
      />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-6"
        >
          <span className="text-white text-base md:text-lg font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">Harish M</span>
          <div className="h-[1px] w-8 md:w-12 bg-blue-600"></div>
          
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full backdrop-blur-md">
            <motion.div 
               animate={{ scale: [1, 1.3, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[9px] md:text-[10px] font-black tracking-widest text-gray-400 uppercase"
              >
                {cycleWords[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Titles */}
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="overflow-hidden py-1">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-[0.9] font-black tracking-tighter text-white uppercase italic"
            >
              MERN FULL STACK
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[14vw] sm:text-[11vw] md:text-[9.5vw] leading-[0.85] font-black tracking-tighter text-outline uppercase"
            >
              DEVELOPER
            </motion.h1>

            <motion.div
              style={{ rotateX: boxTiltX, rotateY: boxTiltY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="relative w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl md:rounded-[2rem] flex items-center justify-center border-t border-white/30 border-l border-white/20 shadow-3d-glow group"
            >
               <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                 <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 animate-[shine_4s_infinite]" />
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16 relative z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translateZ(30px)" }}>
                 <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
               </svg>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <a href="#work" className="group relative px-8 py-4 md:px-10 md:py-4 bg-white text-black text-center font-black uppercase tracking-widest rounded-xl md:rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
              <span className="relative z-10 group-hover:text-white transition-colors">Portfolio</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            {/* THIS LINK NOW OPENS AND DOWNLOADS FROM THE PUBLIC FOLDER */}
            <a 
              href="/Harish_M_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Harish_M_Resume.pdf"
              className="px-8 py-4 md:px-10 md:py-4 border border-white/20 text-white text-center font-black uppercase tracking-widest rounded-xl md:rounded-full hover:bg-white hover:text-black transition-all cursor-pointer block"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden md:block h-px w-16 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em]">Available for projects</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .text-outline { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.15); transition: all 0.4s ease; }
        @media (min-width: 768px) { .text-outline { -webkit-text-stroke: 1.5px rgba(255,255,255,0.15); } }
        .text-outline:hover { -webkit-text-stroke: 1.5px #2563eb; color: rgba(37, 99, 235, 0.05); }
        .shadow-3d-glow { box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5), 0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 10px 40px rgba(37, 99, 235, 0.3), 0 20px 70px rgba(37, 99, 235, 0.15); }
        @keyframes shine { 0% { left: -100%; } 15% { left: 100%; } 100% { left: 100%; } }
      `}</style>
    </div>
  );
};

export default Hero;