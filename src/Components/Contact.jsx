import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Added Phone to lucide-react imports
import { Send, Mail, MapPin, Phone, Linkedin, Github, Facebook, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const form = useRef();
    const container = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
            }
        });
    }, { scope: container });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setIsSending(false);
            setShowModal(true);
            form.current.reset();
        }, (error) => {
            console.error("EmailJS Error:", error);
            setIsSending(false);
            alert("Transmission failed.");
        });
    };

    return (
        <section id="contact" ref={container} className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative min-h-screen overflow-hidden">
            
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-base-300/80 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-base-100 border border-base-content/10 shadow-2xl text-center space-y-6"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Signal Received</h3>
                            <p className="opacity-70 leading-relaxed font-medium text-sm md:text-base text-base-content">
                                Your message has been successfully transmitted. I will review the payload and respond shortly.
                            </p>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="btn btn-primary btn-block rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                            >
                                Acknowledge
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="mb-12 md:mb-20 contact-reveal text-center lg:text-left">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-base-content">
                    Let's <span className="text-primary italic">Connect.</span>
                </h2>
                <p className="text-sm md:text-xl opacity-50 mt-4 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold italic">Engineering Professional Networks</p>
            </div>

            <div className="contact-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 rounded-[2.5rem] md:rounded-[4rem] bg-base-200/30 backdrop-blur-3xl border border-base-content/10 p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden">
                
                <div className="space-y-10 md:space-y-12 order-2 lg:order-1">
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-black text-base-content">Professional Inquiries</h3>
                        <p className="text-base md:text-lg opacity-70 leading-relaxed max-w-md mx-auto lg:mx-0 text-base-content">
                            Ready to apply my MERN expertise and disciplined engineering to high-impact projects.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {/* Mail Item */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 group cursor-pointer text-center sm:text-left">
                            <div className="p-3 md:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <Mail size={22} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Primary Signal</p>
                                <p className="text-base md:text-lg font-bold text-base-content break-all">arafin23103@gmail.com</p>
                            </div>
                        </div>

                        {/* ADDED: Phone / WhatsApp Item */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 group cursor-pointer text-center sm:text-left">
                            <div className="p-3 md:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <Phone size={22} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Voice / WhatsApp</p>
                                <a href="tel:+8801979817736" className="text-base md:text-lg font-bold text-base-content hover:text-primary transition-colors">+8801979817736</a>
                            </div>
                        </div>

                        {/* Location Item */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 group cursor-pointer text-center sm:text-left">
                            <div className="p-3 md:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <MapPin size={22} className="md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Base Location</p>
                                <p className="text-base md:text-lg font-bold text-base-content">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start gap-3 md:gap-4">
                        {[
                            { icon: <Linkedin size={22} />, link: "https://linkedin.com/in/sultanul-arafin" },
                            { icon: <Github size={22} />, link: "https://github.com/S-Arafin" },
                            { icon: <Facebook size={22} />, link: "https://www.facebook.com/profile.php?id=61577959433561" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.link} 
                                target="_blank" 
                                className="p-4 md:p-5 rounded-2xl md:rounded-3xl bg-base-content/5 border border-base-content/10 hover:bg-primary hover:text-white transition-all duration-500"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6 order-1 lg:order-2">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">Full Name</label>
                        <input 
                            type="text" name="name" required
                            className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl md:rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 placeholder:opacity-30 text-sm md:text-base"
                            placeholder="John Doe"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">Return Signal</label>
                        <input 
                            type="email" name="email" required
                            className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl md:rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 placeholder:opacity-30 text-sm md:text-base"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">The Payload</label>
                        <textarea 
                            name="message" required rows="4"
                            className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-2xl md:rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 resize-none placeholder:opacity-30 text-sm md:text-base"
                            placeholder="Engineering requirement details..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSending}
                        className="w-full py-4 md:py-5 rounded-2xl md:rounded-3xl bg-primary text-primary-content font-black text-base md:text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                        {isSending ? 'Transmitting...' : 'Send Message'}
                        <Send size={18} className="md:w-5 md:h-5" />
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;