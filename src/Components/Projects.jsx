import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Image Imports
import CR_Home from "../assets/CityResolved/Home.png";
import CR_Dash from "../assets/CityResolved/Dashboard.png";
import CR_Feat from "../assets/CityResolved/Feature.png";

import CC_Home from "../assets/CleanAndConnect/Home.png";
import CC_Dash from "../assets/CleanAndConnect/Dashboard.png";
import CC_Feat from "../assets/CleanAndConnect/Feature.png";

// Icons & UI
import { ExternalLink, Github, ShieldCheck, Zap, BarChart3, Lock, CreditCard } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiStripe, SiTailwindcss, SiExpress } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "CityResolved",
    subtitle: "Public Infrastructure Reporting System",
    description: "A comprehensive digital platform bridging the gap between citizens and municipal authorities, enabling real-time infrastructure management.",
    live: "https://city-resolved.web.app/",
    clientRepo: "https://github.com/S-Arafin/City-Resolved",
    serverRepo: "https://github.com/S-Arafin/City-Resolved-Backend",
    images: [CR_Home, CR_Dash, CR_Feat],
    architecture: [
      { icon: <Lock size={16}/>, label: "JWT RBAC", detail: "Three distinct dashboards secured via JWT." },
      { icon: <CreditCard size={16}/>, label: "Stripe", detail: "Integrated Stripe Payment Gateway for 'Boost' functionality." },
      { icon: <BarChart3 size={16}/>, label: "Recharts", detail: "Dashboards featuring graphical charts (Recharts) to visualize stats." },
    ],
    stack: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />, <SiFirebase />, <SiStripe />],
    accent: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "CleanConnect",
    subtitle: "Community Issue Tracker & Crowdfunding",
    description: "A professional full-stack MERN application designed to bridge the gap between community environmental problems and collective solutions.",
    live: "https://clean-and-connect.web.app/",
    clientRepo: "https://github.com/S-Arafin/clean-and-connect",
    serverRepo: "https://github.com/S-Arafin/clean-and-connect-server",
    images: [CC_Home, CC_Dash, CC_Feat],
    architecture: [
      { icon: <Zap size={16}/>, label: "Automation", detail: "Smart status updates triggered when contribution goals match the budget." },
      { icon: <ShieldCheck size={16}/>, label: "TanStack", detail: "React Query for optimized server-side state synchronization." },
      { icon: <BarChart3 size={16}/>, label: "Recharts", detail: "Visualized impact metrics using Recharts." },
    ],
    stack: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiTailwindcss />, <SiFirebase />],
    accent: "from-emerald-500/20 to-teal-500/20"
  }
];

// Helper Component for Shuffling Images
const ShufflingGallery = ({ images }) => {
  const [imgList, setImgList] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgList((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first]; // Move front image to back
      });
    }, 4000); // Shuffles every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {imgList.map((src, index) => {
          // Define positions based on current index in the shuffled array
          const isFront = index === 0;
          const isMiddle = index === 1;
          const isBack = index === 2;

          return (
            <motion.div
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isFront ? 1 : isMiddle ? 0.6 : 0.3,
                scale: isFront ? 1 : isMiddle ? 0.9 : 0.8,
                zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                rotate: isFront ? 0 : isMiddle ? 8 : -12,
                x: isFront ? 0 : isMiddle ? 40 : -40,
                y: isFront ? 0 : isMiddle ? -20 : 20,
              }}
              exit={{ opacity: 0, scale: 0.5, x: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`absolute w-[85%] md:w-[90%] aspect-video rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-md cursor-pointer`}
            >
              <img src={src} alt="Project Screenshot" className="w-full h-full object-cover" />
              {!isFront && <div className="absolute inset-0 bg-base-100/40 backdrop-blur-sm" />}
              {isFront && <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const container = useRef();
  const [typeEffect] = useTypewriter({
    words: ["Industry-Grade Solutions.", "Scalable Architectures.", "Impactful Engineering."],
    loop: 1,
    typeSpeed: 70,
  });

  useGSAP(() => {
    gsap.from(".project-card", {
      rotateX: -15,
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 75%",
      },
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="py-32 px-6 md:px-12 max-w-7xl mx-auto perspective-2000">
      <div className="mb-24 space-y-4">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Featured <span className="text-primary italic">Systems.</span>
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-base-content/60">
          {typeEffect}<Cursor />
        </div>
      </div>

      <div className="project-grid grid grid-cols-1 gap-40">
        {projectData.map((project, idx) => (
          <motion.div 
            key={idx}
            className={`project-card p-8 md:p-16 rounded-[4rem] bg-gradient-to-br ${project.accent} border border-white/10 backdrop-blur-3xl shadow-2xl relative group`}
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center relative z-10">
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">{project.title}</h3>
                  <p className="text-lg font-bold text-primary tracking-widest uppercase opacity-80">{project.subtitle}</p>
                </div>

                <p className="text-xl leading-relaxed opacity-70 italic">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.architecture.map((arch, i) => (
                    <div key={i} className="p-5 rounded-3xl bg-base-100/40 border border-white/5 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        {arch.icon}
                        <span className="text-[11px] font-black uppercase tracking-widest">{arch.label}</span>
                      </div>
                      <p className="text-[12px] font-medium opacity-60 leading-snug">{arch.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary rounded-full px-10 shadow-xl shadow-primary/30">
                    Live Demo <ExternalLink size={18}/>
                  </a>
                  <a href={project.clientRepo} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full px-10">
                    Source Code <Github size={18}/>
                  </a>
                </div>
              </div>

              {/* Shuffling Image Gallery Column */}
              <div className="order-1 lg:order-2">
                <ShufflingGallery images={project.images} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;