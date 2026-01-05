import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileImg from "../assets/profileimg.jpg";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const stackData = [
  { name: "React.js", icon: <SiReact size={18} />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs size={18} />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb size={18} />, color: "#47A248" },
  { name: "Express.js", icon: <SiExpress size={18} />, color: "#607d8b" },
  { name: "Tailwind", icon: <SiTailwindcss size={18} />, color: "#06B6D4" },
  { name: "Firebase", icon: <SiFirebase size={18} />, color: "#FFCA28" },
];

const Hero = () => {
  const container = useRef();
  
  const [typeEffect] = useTypewriter({
    words: [
      "Software Engineer",
      "MERN Stack Developer",
      "Full-Stack Architect",
      "CSE Student @ UIU",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.05,
      y: -5,
      duration: 0.2,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1.2, 0.4)",
      overwrite: true,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const textUpVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" ref={container} className="min-h-screen flex items-center justify-center overflow-hidden relative py-20 lg:py-0">
      
      {/* Background Blobs - Hidden on mobile to increase performance */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/10 rounded-full blur-[100px] lg:blur-[140px] -z-20 animate-pulse" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-secondary/10 rounded-full blur-[100px] lg:blur-[140px] -z-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center z-10">
        
        {/* Profile Image - Top on Mobile, Right on Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-4 md:border-[6px] border-white/20 bg-base-100/10 backdrop-blur-3xl shadow-2xl z-20">
              <img
                src={ProfileImg}
                alt="Sultanul Arafin"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="absolute inset-0 w-full h-full rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-primary/10 backdrop-blur-xl -z-10 rotate-3 md:rotate-6 scale-[1.02] md:scale-[1.05] group-hover:rotate-4 md:group-hover:rotate-8 transition-all duration-700" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p variants={textUpVariants} className="text-sm md:text-xl text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Sultanul Arafin
          </motion.p>

          <motion.h1 variants={textUpVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight lg:leading-none">
             Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Engineer.</span>
          </motion.h1>

          <motion.h2 variants={textUpVariants} className="text-lg sm:text-2xl md:text-4xl font-bold h-[30px] md:h-[40px] text-base-content/80">
            <span>{typeEffect}</span>
            <Cursor />
          </motion.h2>

          {/* Tech Stack - Responsive Grid Fix */}
          <motion.div variants={textUpVariants} className="pt-2 md:pt-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Mastered Technologies</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {stackData.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  style={{ '--hover-clr': item.color }}
                  className="flex items-center gap-2 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/5 bg-base-100/10 backdrop-blur-2xl shadow-lg cursor-pointer group transition-all duration-300 hover:border-[var(--hover-clr)] hover:shadow-[0_0_15px_-5px_var(--hover-clr)]"
                >
                  <span className="group-hover:text-[var(--hover-clr)] transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="font-bold text-[11px] md:text-base tracking-tight group-hover:text-[var(--hover-clr)] transition-colors duration-300 truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Buttons - Mobile Responsive Wrap */}
          <motion.div variants={textUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 md:pt-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden px-8 md:px-12 py-4 md:py-5 rounded-full bg-gradient-to-br from-primary via-primary to-accent text-primary-content text-base md:text-lg font-black shadow-2xl text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">View Featured Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 md:px-12 py-4 md:py-5 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-md text-base-content text-base md:text-lg font-black shadow-xl hover:border-primary/40 transition-all duration-300 text-center"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;