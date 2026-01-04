import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Added Facebook from lucide-react
import { Send, Mail, MapPin, Linkedin, Github, Facebook, CheckCircle2, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const form = useRef();
    const container = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
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
        <section id="contact" ref={container} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative min-h-screen">
            
            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-base-300/60 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md p-10 rounded-[3rem] bg-base-100 border border-base-content/10 shadow-2xl text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 size={48} />
                            </div>
                            <h3 className="text-3xl font-black tracking-tight">Signal Received</h3>
                            <p className="opacity-70 leading-relaxed font-medium text-base-content">
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

            <div className="mb-20 contact-reveal">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-base-content">
                    Let's <span className="text-primary italic">Connect.</span>
                </h2>
                <p className="text-xl opacity-50 mt-4 uppercase tracking-[0.3em] font-bold italic">Engineering Professional Networks</p>
            </div>

            <div className="contact-reveal grid lg:grid-cols-2 gap-12 rounded-[4rem] bg-base-200/30 backdrop-blur-3xl border border-base-content/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
                
                {/* Info Side */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black text-base-content">Professional Inquiries</h3>
                        <p className="text-lg opacity-70 leading-relaxed max-w-sm text-base-content">
                            Ready to apply my MERN expertise and disciplined engineering to high-impact projects.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Primary Signal</p>
                                <p className="text-lg font-bold text-base-content">arafin23103@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">Base Location</p>
                                <p className="text-lg font-bold text-base-content">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links with Facebook */}
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/sultanul-arafin" target="_blank" className="p-5 rounded-3xl bg-base-content/5 border border-base-content/10 hover:bg-primary hover:text-white transition-all duration-500">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/S-Arafin" target="_blank" className="p-5 rounded-3xl bg-base-content/5 border border-base-content/10 hover:bg-primary hover:text-white transition-all duration-500">
                            <Github size={24} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577959433561" target="_blank" className="p-5 rounded-3xl bg-base-content/5 border border-base-content/10 hover:bg-primary hover:text-white transition-all duration-500">
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Form Side - FIXED VISIBILITY FOR LIGHT MODE */}
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">Full Name {"{{name}}"}</label>
                        <input 
                            type="text" name="name" required
                            className="w-full px-6 py-4 rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 placeholder:opacity-30"
                            placeholder="John Doe"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">Return Signal {"{{email}}"}</label>
                        <input 
                            type="email" name="email" required
                            className="w-full px-6 py-4 rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 placeholder:opacity-30"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-4 text-base-content">The Payload {"{{message}}"}</label>
                        <textarea 
                            name="message" required rows="5"
                            className="w-full px-6 py-4 rounded-3xl bg-base-content/5 border border-base-content/10 text-base-content focus:border-primary/50 focus:bg-base-content/10 focus:outline-none transition-all duration-300 resize-none placeholder:opacity-30"
                            placeholder="Engineering requirement details..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSending}
                        className="w-full py-5 rounded-3xl bg-primary text-primary-content font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                        {isSending ? 'Transmitting Signal...' : 'Send Message'}
                        <Send size={20} />
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;