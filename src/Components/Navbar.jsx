import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "coffee");
    const [activeTab, setActiveTab] = useState("Home");

    // Theme Logic
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "coffee" ? "nord" : "coffee"));
    };

    const navLinks = [
        { name: "Home", href: "#hero", id: "hero" },
        { name: "About", href: "#about", id: "about" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // Scroll-Spy Logic
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper-middle of screen
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const activeSection = navLinks.find(link => link.id === entry.target.id);
                    if (activeSection) {
                        setActiveTab(activeSection.name);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all section elements
        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed top-6 w-full z-[100] flex justify-center items-center gap-4 px-4">
            {/* Main Navigation Dock */}
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-2 py-2 rounded-full border border-white/10 bg-base-100/20 backdrop-blur-xl shadow-2xl"
            >
                <ul className="flex items-center relative">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            <a 
                                href={link.href}
                                onClick={() => setActiveTab(link.name)}
                                className={`relative z-10 px-6 py-2 block font-semibold text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 ${
                                    activeTab === link.name ? "text-primary-content" : "text-base-content/60 hover:text-primary"
                                }`}
                            >
                                {link.name}
                            </a>

                            {/* Sliding Selector Pill */}
                            {activeTab === link.name && (
                                <motion.div 
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary rounded-full -z-0 shadow-lg shadow-primary/20"
                                    transition={{ type: "spring", stiffness: 400, damping: 33 }}
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
                className="p-3 rounded-full border border-white/10 bg-base-100/20 backdrop-blur-xl shadow-2xl cursor-pointer text-primary"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {theme === "coffee" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default Navbar;