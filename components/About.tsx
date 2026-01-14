import React from 'react';
import { motion } from 'framer-motion';

// Animated FeatureCard Component
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; colorClass: string }> = ({ icon, title, description, colorClass }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-start gap-4"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${colorClass}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-black uppercase tracking-tight mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Text Animation (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-[0.9]">
            ABOUT <br/><span className="text-blue-500">ME</span>
          </h2>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a passionate and ambitious <span className="text-white font-bold">B.Com Computer Application</span> graduate from <span className="text-white font-bold">Sri Vasavi College, Erode</span>, now dedicated to a professional career in software development.
            </p>
            <p>
              Currently working at <span className="text-white font-bold">Tech Vassegrah</span>, I specialize in modern web development with expertise in the MERN stack and various cutting-edge technologies. I'm dedicated to creating innovative solutions and building scalable applications.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Grid Animation (Cards stagger up) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15 // This makes cards appear one after another
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16"
        >
          <FeatureCard 
            colorClass="text-blue-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
            title="Full Stack Dev"
            description="Expertise in the MERN stack (MongoDB, Express, React, Node.js) for end-to-end development."
          />
          <FeatureCard 
            colorClass="text-purple-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>}
            title="Computer Application Background"
            description="Leveraging a strong foundation in computer applications and business logic for software solutions."
          />
          <FeatureCard 
            colorClass="text-pink-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>}
            title="Scalable Apps"
            description="Focused on building high-performance, future-proof applications that grow with your needs."
          />
          <FeatureCard 
            colorClass="text-green-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>}
            title="Innovation"
            description="Constantly learning and integrating cutting-edge technologies into production environments."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;