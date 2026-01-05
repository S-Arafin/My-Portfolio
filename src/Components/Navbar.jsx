import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "coffee");
    const [activeTab, setActiveTab] = useState("Home");
    const isScrolling = useRef(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "coffee" ? "nord" : "coffee"));
    };

    const navLinks = [
        { name: "Home", href: "#hero", id: "hero", icon: <Home size={16} /> },
        { name: "About", href: "#about", id: "about", icon: <User size={16} /> },
        { name: "Projects", href: "#projects", id: "projects", icon: <Briefcase size={16} /> },
        { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={16} /> },
    ];

    useEffect(() => {
        const handleScrollSpy = () => {
            if (isScrolling.current) return;
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveTab(link.name);
                    }
                }
            });
        };

        const observerOptions = { root: null, rootMargin: '-25% 0px -25% 0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            if (isScrolling.current) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const link = navLinks.find(l => l.id === entry.target.id);
                    if (link) setActiveTab(link.name);
                }
            });
        }, observerOptions);

        window.addEventListener('scroll', handleScrollSpy);
        navLinks.forEach(link => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScrollSpy);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (e, name, href) => {
        e.preventDefault();
        setActiveTab(name);
        isScrolling.current = true;
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        window.scrollTo({ top: elem?.offsetTop - 80, behavior: 'smooth' });
        setTimeout(() => { isScrolling.current = false; }, 800);
    };

    return (
        <div className="fixed top-4 md:top-6 w-full z-[100] flex justify-center items-center gap-2 md:gap-4 px-2 md:px-4">
            {/* Main Navigation Dock */}
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-1.5 py-1.5 md:px-2 md:py-2 rounded-full border border-white/10 bg-base-100/20 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
                <ul className="flex items-center relative">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            <a 
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.name, link.href)}
                                className={`relative z-10 px-3 md:px-6 py-2 flex items-center gap-2 font-semibold text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-widest transition-colors duration-500 ${
                                    activeTab === link.name ? "text-primary-content" : "text-base-content/60 hover:text-primary"
                                }`}
                            >
                                {/* Icon shows on mobile, Text hides on very small screens or shrinks */}
                                <span className="md:hidden">{link.icon}</span>
                                <span className="hidden sm:inline-block">{link.name}</span>
                            </a>

                            {activeTab === link.name && (
                                <motion.div 
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary rounded-full -z-0 shadow-lg"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </motion.nav>

            {/* Theme Toggle Button */}
            <motion.button
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 md:p-3 rounded-full border border-white/10 bg-base-100/20 backdrop-blur-xl shadow-2xl cursor-pointer text-primary"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {theme === "coffee" ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default Navbar;