import React from 'react';

const Footer: React.FC = () => {
  // Get current year dynamically or keep as per your preference
  const currentYear = 2026; 

  return (
    <footer className="px-6 md:px-12 py-16 md:py-24 border-t border-white/5 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative">
        
        {/* BACKGROUND TEXT: "DEVELOPER" (Watermark style) */}
        {/* Adjusted size for mobile (text-[70px]) to prevent overflow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="text-[70px] sm:text-[120px] md:text-[200px] lg:text-[250px] font-black italic uppercase tracking-tighter text-white/[0.03] whitespace-nowrap">
            DEVELOPER
          </span>
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 flex flex-col items-center cursor-default">
          
          {/* HARISH: Moves up and down automatically */}
          <div className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none animate-float drop-shadow-2xl">
            HARISH
          </div>
          
          {/* M & ICON: M glows automatically */}
          <div className="relative flex items-center mt-2">
            <div className="text-7xl sm:text-8xl md:text-9xl font-black italic tracking-tighter uppercase leading-none text-outline-blue animate-glow-pulse">
              M
            </div>
            
            {/* The Blue Icon - Slightly scaled for mobile */}
            <div className="ml-3 md:ml-4 w-12 h-12 md:w-20 md:h-20 bg-blue-600 rounded-xl md:rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)]">
               <span className="text-white text-xl md:text-4xl font-bold">{"<>"}</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Bottom Divider */}
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-12 md:mt-16"></div>

        {/* Minimal Copyright Text - Wrapped for small screens */}
        <p className="mt-8 text-gray-600 text-[8px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase opacity-40 px-4">
          © {currentYear} HARISH M PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </div>

      <style>{`
        /* 1. The Blue Outline Style for "M" */
        .text-outline-blue {
          color: transparent;
          -webkit-text-stroke: 1px #2563eb;
        }
        @media (min-width: 768px) {
          .text-outline-blue {
            -webkit-text-stroke: 2px #2563eb;
          }
        }

        /* 2. Floating Animation for "HARISH" */
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* 3. Automatic Glow Animation for "M" */
        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { 
            -webkit-text-stroke: 1px #2563eb;
            text-shadow: 0 0 0px rgba(37, 99, 235, 0);
          }
          50% { 
            -webkit-text-stroke: 1px #60a5fa;
            text-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
          }
        }

        /* Responsive stroke update for desktop glow */
        @media (min-width: 768px) {
            @keyframes glowPulse {
              0%, 100% { 
                -webkit-text-stroke: 2px #2563eb;
                text-shadow: 0 0 0px rgba(37, 99, 235, 0);
              }
              50% { 
                -webkit-text-stroke: 2px #60a5fa;
                text-shadow: 0 0 30px rgba(37, 99, 235, 0.6);
              }
            }
        }

        .tracking-tighter {
          letter-spacing: -0.06em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;