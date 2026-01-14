import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MARKETING', href: '#social-media-marketing' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-5 md:px-12 lg:px-20 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-1 group uppercase">
            <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
              HARISH M
            </span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.4em] text-gray-400 hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-white text-black text-[10px] font-black tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              HIRE ME
            </a>
          </div>

          {/* Hamburger Menu Button (Mobile & Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-all group relative z-[120]"
          >
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col p-8 md:p-16 lg:hidden"
          >
            {/* Top Row in Menu */}
            <div className="flex justify-between items-center mb-20">
              <div className="text-xl font-black tracking-tighter uppercase">
                HARISH M <span className="text-blue-500">•</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-6">
              {[{ name: 'HOME', href: '#home' }, ...navLinks].map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl sm:text-7xl font-black tracking-tighter hover:text-blue-600 transition-colors uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA in Mobile Menu */}
            <div className="mt-auto pb-10">
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="inline-block px-10 py-5 bg-white text-black text-xs font-black tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                HIRE ME NOW
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;