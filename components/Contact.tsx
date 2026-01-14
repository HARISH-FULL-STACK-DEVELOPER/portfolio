// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';

// const Contact: React.FC = () => {
//   const form = useRef<HTMLFormElement>(null);
//   const [isSending, setIsSending] = useState(false);
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.current) return;

//     setIsSending(true);
//     setStatus('idle');

//     // These values are pulled from your .env file
//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     emailjs.sendForm(serviceId, templateId, form.current, publicKey)
//       .then(() => {
//         setStatus('success');
//         setIsSending(false);
//         form.current?.reset();
//         setTimeout(() => setStatus('idle'), 5000);
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         setStatus('error');
//         setIsSending(false);
//         setTimeout(() => setStatus('idle'), 5000);
//       });
//   };

//   return (
//     <section className="px-6 md:px-12 lg:px-24 py-24 bg-black overflow-hidden border-t border-white/5">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
        
//         {/* --- LEFT COLUMN: INFO & SOCIALS --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col justify-start"
//         >
//           {/* Section Header */}
//           <div className="flex items-center gap-4 mb-8">
//             <div className="w-12 h-[2px] bg-blue-600"></div>
//             <span className="text-xs font-black tracking-[0.8em] text-gray-400 uppercase">
//               CONTACT
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.9] uppercase">
//             LET'S BUILD <br />
//             <span className="text-blue-500">SOMETHING</span> <br />
//             TOGETHER
//           </h2>
          
//           <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed font-medium">
//             Currently available for freelance projects and professional roles. 
//             Drop a message and let's turn your ideas into digital reality.
//           </p>

//           {/* Contact Details */}
//           <div className="space-y-8 mb-16">
//             {/* Email Link */}
//             <div className="flex items-center gap-6 group">
//               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all shadow-xl">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
//               </div>
//               <div>
//                 <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase block mb-1">EMAIL ME</span>
//                 <a href="mailto:harish2harish2004@gmail.com" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">
//                   harish2harish2004@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* WhatsApp Link */}
//             <div className="flex items-center gap-6 group">
//               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-green-500/50 transition-all shadow-xl">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
//               </div>
//               <div>
//                 <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase block mb-1">WHATSAPP ME</span>
//                 <a href="https://wa.me/918838973320" target="_blank" rel="noreferrer" className="text-xl font-bold text-white hover:text-green-500 transition-colors">
//                   +91 8838973320
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* --- RIGHT COLUMN: FORM --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
//         >
//           <form ref={form} onSubmit={sendEmail} className="space-y-8">
//             <div className="space-y-4">
//               <label className="text-xs font-black text-gray-300 uppercase tracking-widest block">Full Name</label>
//               <input 
//                 name="name" // Matches {{name}} in EmailJS
//                 required
//                 type="text" 
//                 placeholder="Your Name" 
//                 className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 outline-none focus:border-blue-500/50 transition-all text-white font-medium"
//               />
//             </div>

//             <div className="space-y-4">
//               <label className="text-xs font-black text-gray-300 uppercase tracking-widest block">Email Address</label>
//               <input 
//                 name="email" // Matches {{email}} in EmailJS
//                 required
//                 type="email" 
//                 placeholder="your@email.com" 
//                 className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 outline-none focus:border-blue-500/50 transition-all text-white font-medium"
//               />
//             </div>

//             <div className="space-y-4">
//               <label className="text-xs font-black text-gray-300 uppercase tracking-widest block">Message</label>
//               <textarea 
//                 name="message" // Ensure {{message}} is in your main template tab
//                 required
//                 placeholder="Tell me about your project..." 
//                 rows={4}
//                 className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 outline-none focus:border-blue-500/50 transition-all text-white font-medium resize-none"
//               ></textarea>
//             </div>
            
//             <button 
//               disabled={isSending}
//               type="submit"
//               className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.4em] transition-all duration-300 active:scale-95 shadow-xl
//                 ${status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-500'}
//                 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isSending ? 'Sending...' : status === 'success' ? 'SENT SUCCESSFULLY!' : status === 'error' ? 'TRY AGAIN' : 'SEND MESSAGE'}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;





import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  
  // States for revealing private info
  const [revealEmail, setRevealEmail] = useState(false);
  const [revealPhone, setRevealPhone] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const myWhatsAppNumber = "918838973320";

    const encodedMessage = encodeURIComponent(
      `*New Inquiry from Portfolio*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Message:* ${message}`
    );

    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodedMessage}`;
    
    setStatus('success');
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      form.current?.reset();
      setStatus('idle');
    }, 3000);
  };

  // Animation Variants for "Move and Come" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-black overflow-hidden border-t border-white/5">
      <motion.div 
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* --- LEFT COLUMN: INFO & SOCIALS --- */}
        <div className="flex flex-col justify-start">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <span className="text-xs font-black tracking-[0.8em] text-gray-400 uppercase">
              CONTACT
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.9] uppercase">
            LET'S BUILD <br />
            <span className="text-blue-500">SOMETHING</span> <br />
            TOGETHER
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed font-medium">
            Currently looking for new opportunities. Click below to reveal my direct contact details or use the form to send a quick brief.
          </motion.p>

          {/* Contact Details with Big Icons */}
          <div className="space-y-10 mb-16">
            
            {/* BIG EMAIL ICON & REVEAL */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 group cursor-pointer" onClick={() => setRevealEmail(true)}>
              <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase block mb-1">EMAIL ME</span>
                <AnimatePresence mode="wait">
                  {!revealEmail ? (
                    <motion.button 
                      key="hide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-lg font-bold text-blue-500/40 hover:text-blue-500 tracking-widest text-left uppercase"
                    >
                      Click to reveal
                    </motion.button>
                  ) : (
                    <motion.a 
                      key="show" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      href="mailto:harish2harish2004@gmail.com" 
                      className="text-xl md:text-2xl font-black text-white hover:text-blue-500 transition-colors break-all"
                    >
                      harish2harish2004@gmail.com
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* BIG PHONE DIALER ICON & REVEAL */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 group cursor-pointer" onClick={() => setRevealPhone(true)}>
              <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 group-hover:border-green-500/50 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase block mb-1">CALL ME DIRECT</span>
                <AnimatePresence mode="wait">
                  {!revealPhone ? (
                    <motion.button 
                      key="hide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-lg font-bold text-green-500/40 hover:text-green-500 tracking-widest text-left uppercase"
                    >
                      Click to reveal
                    </motion.button>
                  ) : (
                    <motion.a 
                      key="show" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      href="tel:+918838973320" 
                      className="text-xl md:text-2xl font-black text-white hover:text-green-500 transition-colors"
                    >
                      +91 8838973320
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: FORM --- */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-2xl h-fit relative"
        >
          {/* Subtle Glow behind form */}
          <div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10 rounded-full" />
          
          <form ref={form} onSubmit={handleSendMessage} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Full Name</label>
                <input 
                  name="name" required type="text" placeholder="John Doe" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Phone Number</label>
                <input 
                  name="phone" required type="tel" placeholder="+91" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Email Address</label>
              <input 
                name="email" required type="email" placeholder="hello@example.com" 
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Your Message</label>
              <textarea 
                name="message" required placeholder="How can I help you?" 
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-500/50 transition-all text-white font-medium resize-none placeholder:text-gray-700"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all duration-300 active:scale-95 shadow-2xl
                ${status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'}`}
            >
              {status === 'success' ? 'OPENING WHATSAPP...' : 'SEND INQUIRY IN WHATSAPP'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;