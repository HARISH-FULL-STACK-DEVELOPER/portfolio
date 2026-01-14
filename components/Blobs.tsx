
import React from 'react';

const Blobs: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Top Left Magenta Blob - Matching screenshot */}
      <div 
        className="blob absolute -top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full"
        style={{ 
          backgroundColor: '#ff0080', 
          opacity: 0.2,
          transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)` 
        }}
      ></div>
      
      {/* Top Right Massive Blue Blob */}
      <div 
        className="blob absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full"
        style={{ 
          backgroundColor: '#0047ab',
          opacity: 0.35,
          transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.03}px)` 
        }}
      ></div>
      
      {/* Middle Left Purple/Violet Blob */}
      <div 
        className="blob absolute top-[40%] left-[-15%] w-[45vw] h-[45vw] rounded-full"
        style={{ 
          backgroundColor: '#5d3fd3',
          opacity: 0.25,
          transform: `translate(${scrollY * 0.06}px, ${scrollY * -0.05}px)` 
        }}
      ></div>
      
      {/* Subtle Star Particle Simulation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random()
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Blobs;
