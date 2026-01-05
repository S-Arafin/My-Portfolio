import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook, ArrowUp, Code2, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        /* RESPONSIVE FIX: Reduced top margin and padding for mobile (mt-10 pt-10) */
        <footer className="relative mt-10 md:mt-20 pt-10 md:pt-20 pb-6 md:pb-10 px-6 md:px-12 overflow-hidden">
            {/* Background Structural Glass */}
            <div className="absolute inset-0 bg-base-300/50 backdrop-blur-[100px] border-t border-white/10 -z-10" />
            
            {/* Decorative Background Glows - Scaled down for mobile */}
            <div className="absolute top-0 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />
            <div className="absolute top-0 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-secondary/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-10 md:pb-16 border-b border-base-content/10">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-4 md:space-y-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                                <Code2 size={24} className="md:w-7 md:h-7" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-base-content uppercase">
                                Sultanul <span className="text-primary italic">Arafin</span>
                            </h2>
                        </div>
                        <p className="text-sm md:text-lg opacity-70 max-w-sm mx-auto md:mx-0 leading-relaxed text-base-content">
                            Engineering discipline-driven MERN applications with a focus on security, scalability, and impact.
                        </p>
                    </div>

                    {/* Navigation/Quick Links Section - FIX: 2 columns on mobile */}
                    <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left">
                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40 text-base-content">Navigation</h3>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 font-bold text-sm md:text-base text-base-content">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Base Terminal</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">The Manifesto</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Engineered Systems</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Secure Connection</a></li>
                        </ul>
                    </div>

                    {/* Newsletter/Action Section */}
                    <div className="md:col-span-4 space-y-4 md:space-y-6 text-center md:text-left">
                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40 text-base-content">Connect Signal</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                            {[
                                { icon: <Github size={20} />, link: "https://github.com/S-Arafin", label: "Github" },
                                { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/sultanul-arafin", label: "LinkedIn" },
                                { icon: <Facebook size={20} />, link: "https://www.facebook.com/profile.php?id=61577959433561", label: "Facebook" },
                                { icon: <Mail size={20} />, link: "mailto:arafin23103@gmail.com", label: "Email" }
                            ].map((item, i) => (
                                <motion.a 
                                    key={i} 
                                    href={item.link} 
                                    target="_blank"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-base-content/5 border border-base-content/10 hover:border-primary/50 text-base-content hover:text-primary transition-all shadow-xl"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>
                        <div className="pt-2 md:pt-4">
                            <button 
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-primary hover:gap-5 transition-all group"
                            >
                                Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform md:w-4 md:h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Final Attribution - FIX: Tighter gap on mobile */}
                <div className="pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 opacity-40 text-base-content">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                        © 2026 Designed & Engineered by Sultanul Arafin
                    </p>
                    <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
                        Built with <Heart size={10} className="text-red-500 fill-red-500" /> & Discipline
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;