import React, { useState, useEffect } from "react";
import { Megaphone, TrendingUp, Users, Instagram, Heart, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SocialMediaMarketing: React.FC = () => {
  // YOUR INSTAGRAM LINKS
  const reels = [
    "https://www.instagram.com/reel/DQcBl7yk08s/",
    "https://www.instagram.com/reel/DQe4V8xkwU7/",
    "https://www.instagram.com/reel/DQhNqlZE0Px/",
    "https://www.instagram.com/reel/DQmZ4smk9rm/",
    "https://www.instagram.com/reel/DRNDfWwk5lo/",
    "https://www.instagram.com/reel/DRPnqC2E12f/"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoaded(false); // Reset loading state when moving to next reel
      setCurrentIndex((prev) => (prev + 1) % reels.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [reels.length]);

  return (
    <div className="bg-black text-white min-h-screen font-sans py-12 md:py-20 overflow-hidden relative">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black leading-tight tracking-tighter mb-6">
            Social Media <br /> 
            <span className="text-neutral-500 italic">Marketing.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Strategic content creation for <span className="text-white font-semibold">Tech Vaseegrah</span> designed to capture attention and build authority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Phone Section */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[320px] h-[500px] bg-blue-600/40 rounded-full blur-[90px] opacity-60"></div>
            </div>

            {/* Phone Frame */}
            <div className="relative w-[280px] md:w-[340px] h-[580px] md:h-[680px] border-[10px] md:border-[12px] border-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden bg-black ring-1 ring-white/10">
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-neutral-900 rounded-b-3xl z-50 flex items-center justify-center">
                <div className="w-8 md:w-10 h-1 bg-neutral-800 rounded-full"></div>
              </div>

              {/* Transition Container */}
              <div className="relative w-full h-full bg-black">
                
                {/* LOADING PLACEHOLDER (Shows during the black screen) */}
                {!isLoaded && (
                    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black">
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] mb-4"
                        >
                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Tech Vaseegrah</p>
                    </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Instagram Embed Iframe */}
                    <iframe
                      src={`${reels[currentIndex]}embed/`}
                      className={`w-full h-full border-none transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      scrolling="no"
                      allowTransparency={true}
                      allow="encrypted-media"
                      onLoad={() => setIsLoaded(true)}
                    ></iframe>
                  </motion.div>
                </AnimatePresence>

                {/* Optional UI Overlay (Instagram Style) */}
                <div className="absolute bottom-10 left-6 z-50 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[10px] font-bold">TV</div>
                        </div>
                        <span className="text-sm font-bold shadow-lg">techvaseegrah</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
               {reels.map((_, idx) => (
                 <div 
                  key={idx} 
                  className={`w-1 h-4 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-blue-500 h-10' : 'bg-neutral-800'}`}
                 />
               ))}
            </div>
          </div>

          {/* Text Cards */}
          <div className="space-y-6">
            <ServiceCard 
                icon={<Megaphone className="w-6 h-6 text-blue-500" />} 
                title="Viral Production" 
                desc="High-retention video editing optimized for modern social algorithms."
                color="hover:border-blue-500/50"
            />
            <ServiceCard 
                icon={<TrendingUp className="w-6 h-6 text-green-500" />} 
                title="Organic Growth" 
                desc="Strategic planning to ensure content reaches the maximum audience."
                color="hover:border-green-500/50"
            />
            <ServiceCard 
                icon={<Users className="w-6 h-6 text-purple-500" />} 
                title="Brand Authority" 
                desc="Building a trusted identity through consistent, high-value visual storytelling."
                color="hover:border-purple-500/50"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

// Sub-component for clean code
const ServiceCard = ({ icon, title, desc, color }: any) => (
    <div className={`group flex gap-6 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-neutral-900/30 border border-neutral-800 ${color} transition-all duration-500 backdrop-blur-xl`}>
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </div>
);

export default SocialMediaMarketing;