import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blobs from './components/Blobs';
import Footer from './components/Footer';
import SocialMediaMarketing from "./components/SocialMediaMarketing";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-600 selection:text-white bg-black text-white">
      {/* Background blobs for visual depth */}
      <Blobs scrollY={scrollY} />
      
      <Navbar />

      <main>
        {/* HERO - Full screen height usually handled inside component */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT - Standardized Spacing */}
        <section id="about" className="py-24 md:py-32 border-t border-white/5">
          <About />
        </section>

        {/* JOURNEY - Removed grey background, kept clean black */}
        <section id="journey" className="py-24 md:py-32 border-t border-white/5">
          <Journey />
        </section>

        {/* WORK/PROJECTS - Standardized Spacing */}
        <section id="work" className="py-24 md:py-32 border-t border-white/5">
          <Projects />
        </section>

        {/* SKILLS - Fixed the spacing (changed pb-10 to py-32) */}
        <section id="skills" className="py-24 md:py-32 border-t border-white/5">
          <Skills />
        </section>
        
        {/* SOCIAL MEDIA MARKETING - Removed grey background, used border for separation */}
        <section id="social-media-marketing" className="py-24 md:py-32 border-t border-white/5">
          <SocialMediaMarketing />
        </section>

        {/* CONTACT - Standardized Spacing */}
        <section id="contact" className="py-24 md:py-32 border-t border-white/5">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Scroll to Top helper */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-500 hover:scale-110 transition-all z-50 ${
          scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } duration-500`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default App;