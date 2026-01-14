import React from 'react';

const SkillBadge: React.FC<{ name: string; icon?: string; outline?: boolean }> = ({ name, icon, outline }) => (
  <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
    <span className={`text-5xl md:text-7xl font-black tracking-tighter uppercase select-none ${outline ? 'text-outline' : 'text-blue-500'}`}>
      {name}
    </span>
    {icon && (
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg p-2 overflow-hidden">
        <img src={icon} className="w-full h-full object-contain" alt={name} />
      </div>
    )}
  </div>
);

const Skills: React.FC = () => {
  // Line 1 Content (Scrolling Left)
  const line1 = [
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', outline: false },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', outline: true },
    { name: 'MCP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg', outline: false },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', outline: true },
    { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', outline: false },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', outline: true },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', outline: false },
    { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg', outline: true },
  ];

  // Line 2 Content (Scrolling Right)
  const line2 = [
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', outline: true },
    { name: 'EmailJS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/emailjs.svg', outline: false },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', outline: true },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', outline: false },
    { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', outline: true },
    { name: 'Netlify', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg', outline: false },
    { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', outline: true },
    { name: 'Tailwind', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg', outline: false },
  ];

  return (
    <section className="py-20 overflow-hidden bg-black border-t border-white/5">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-500/50"></span>
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-blue-500 uppercase opacity-80">
            Tech Stack & Expertise
          </h2>
        </div>
      </div>

      <div className="space-y-12 md:space-y-20">
        {/* ROW 1: Scrolling Left */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex items-center gap-12 md:gap-24 animate-marquee whitespace-nowrap will-change-transform">
            {line1.map((tech, i) => <SkillBadge key={`l1-s1-${i}`} {...tech} />)}
            {line1.map((tech, i) => <SkillBadge key={`l1-s2-${i}`} {...tech} />)}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex items-center gap-12 md:gap-24 animate-marquee-reverse whitespace-nowrap will-change-transform">
            {line2.map((tech, i) => <SkillBadge key={`l2-s1-${i}`} {...tech} />)}
            {line2.map((tech, i) => <SkillBadge key={`l2-s2-${i}`} {...tech} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }

        /* Pauses the scroll when user hovers */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px #3b82f6;
        }

        @media (max-width: 768px) {
          .text-outline {
            -webkit-text-stroke: 1px #3b82f6;
          }
          .animate-marquee, .animate-marquee-reverse {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;