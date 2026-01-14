import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Monitor } from 'lucide-react';

const ProjectCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  url: string; 
  index: number;
  points: string[];
}> = ({ title, subtitle, url, index, points }) => {
  
  // Static Desktop Screenshot Logic (1280x800)
  const screenshotUrl = `https://s0.wp.com/mshots/v1/https%3A%2F%2F${url}?w=1280&h=800`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative border-b border-white/10 py-24 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-700 px-4 md:px-12 bg-black overflow-hidden min-h-[650px]"
    >
      
      {/* --- Left Content: Details --- */}
      <div className="z-10 flex-1 lg:pr-12">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold text-blue-500 tracking-[0.4em] uppercase block mb-4"
        >
          PROJECT 0{index + 1}
        </motion.span>
        
        <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase group-hover:text-blue-500 transition-all duration-500 leading-none">
          {title}
        </h3>
        
        <p className="text-gray-400 mt-6 font-bold uppercase tracking-widest text-sm max-w-md italic">
          {subtitle}
        </p>
        
        <div className="mt-8 space-y-4">
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="flex items-center gap-3 text-gray-200 text-sm font-semibold"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
              {point}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a 
            href={`https://${url}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-xl text-[11px] font-black tracking-widest text-white hover:bg-blue-600 hover:border-blue-600 transition-all uppercase"
          >
            Live Preview <ExternalLink className="w-4 h-4" />
          </a>

          <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
            <Monitor className="w-4 h-4 text-blue-500" />
            System View
          </div>
        </div>
      </div>

      {/* --- Right Content: System Desktop Frame --- */}
      <div className="mt-16 lg:mt-0 flex flex-col items-center lg:items-end flex-1 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[680px] aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-900 shadow-[0_0_80px_rgba(37,99,235,0.15)] ring-1 ring-white/10">
            {/* Browser Window Header */}
            <div className="h-10 bg-neutral-900 w-full flex items-center px-5 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
                <div className="ml-4 px-4 py-1 bg-black/40 rounded-md text-[10px] text-gray-500 font-mono flex-1 text-center truncate border border-white/5 uppercase tracking-tighter">
                    {url}
                </div>
            </div>
            
            {/* Screenshot Content */}
            <img 
              src={screenshotUrl} 
              alt={`${title} Preview`} 
              className="w-full h-full object-cover object-top transition-all duration-1000 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Big Number Decoration */}
      <div className="absolute -right-16 bottom-0 text-[22rem] font-black text-white/[0.02] pointer-events-none select-none -z-0">
        0{index + 1}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { 
      title: 'BILLZZY', 
      subtitle: 'Enterprise Billing & Logistics Ecosystem',
      url: 'billzzy.com',
      points: [
        "Cloud-based Inventory & GST Billing",
        "WhatsApp API Business Integration",
        "Automated Packing Slip Generation"
      ]
    },
    { 
      title: 'BILLZZY LITE', 
      subtitle: 'High-Speed Inventory & Sales Solution',
      url: 'lite.billzzy.com',
      points: [
        "Cloud Management System",
        "Real-time Stock Barcode Scanning",
        "One-tap Digital Bill Sharing"
      ]
    },
  ];

  return (
    <section className="bg-black text-white py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-6 mb-28 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-14 bg-blue-600"></div>
                    <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-gray-500">
                        Selected Projects
                    </h2>
                </div>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                   PROD<span className="text-blue-600">UCTS.</span>
                </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-xs text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed border-l-2 border-blue-600 pl-6"
            >
                Building scalable digital products with a focus on business automation and modern user interfaces.
            </motion.p>
        </div>
        
        {/* Project List */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((proj, idx) => (
            <ProjectCard 
              key={idx} 
              title={proj.title} 
              subtitle={proj.subtitle} 
              url={proj.url}
              index={idx} 
              points={proj.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;