import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Lucide Icons
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Lock, 
  CreditCard, 
  Database, 
  Terminal, 
  Layers, 
  Activity,
  Server,
  Key
} from "lucide-react";

import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiFirebase, 
  SiStripe, 
  SiJsonwebtokens 
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const [typeEffect] = useTypewriter({
    words: ["Engineering Production-Ready Systems."],
    loop: 1,
    typeSpeed: 70,
  });

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

      {/* Header Section */}
      <div className="mb-24 reveal-item">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          Beyond the <span className="text-primary italic">Console.</span>
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-base-content/60 mt-4">
          {typeEffect}<Cursor cursorStyle="_" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* FIXED SLIDER: Manifesto & Philosophy */}
        <div className="reveal-item md:col-span-7 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-base-100/5 backdrop-blur-3xl min-h-[480px] group">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }} // CRITICAL FIX: Prevents slide overlay stacking
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-full w-full cursor-grab active:cursor-grabbing"
          >
            <SwiperSlide className="p-12 flex flex-col justify-center bg-transparent">
              <div className="flex justify-between items-start mb-8">
                <Target className="text-primary" size={50} />
                <span className="text-xs font-black opacity-30 tracking-[0.3em]">01 / PHILOSOPHY</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-6">
                Discipline creates <span className="text-primary">momentum.</span>
              </h3>
              <p className="text-xl opacity-60 leading-relaxed font-serif italic border-l-4 border-primary/20 pl-6">
                "I do not rely on motivation; I rely on discipline. Discipline creates consistent momentum, and momentum fuels progress."
              </p>
            </SwiperSlide>
            
            <SwiperSlide className="p-12 flex flex-col justify-center bg-transparent">
              <div className="flex justify-between items-start mb-8">
                <Terminal className="text-accent" size={50} />
                <span className="text-xs font-black opacity-30 tracking-[0.3em]">02 / METHODOLOGY</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-6">
                Production-Ready <span className="text-accent">Architectures.</span>
              </h3>
              <p className="text-xl opacity-60 leading-relaxed">
                Engineering production-ready solutions by moving beyond basic tutorials, focusing on secure and scalable web applications.
              </p>
            </SwiperSlide>

            <SwiperSlide className="p-12 flex flex-col justify-center bg-transparent">
              <div className="flex justify-between items-start mb-8">
                <Activity className="text-secondary" size={50} />
                <span className="text-xs font-black opacity-30 tracking-[0.3em]">03 / IMPACT</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-6">
                Full-Stack <span className="text-secondary">Excellence.</span>
              </h3>
              <p className="text-xl opacity-60 leading-relaxed">
                Dedicated MERN stack development for high-impact projects, utilizing an agile mindset and clean code principles.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* SECURITY: Expanded with Detailed Stack */}
        <div className="reveal-item md:col-span-5 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 flex flex-col justify-between group relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-5 rounded-2xl bg-base-100 shadow-2xl">
              <Key className="text-primary" size={28} />
            </motion.div>
            <CreditCard className="text-primary/10 -mt-8 -mr-8" size={140} />
          </div>
          
          <div className="space-y-6 relative z-10">
            <h3 className="text-3xl font-black tracking-tight flex items-center gap-2">
              Secure Core <ShieldCheck className="text-primary" size={24} />
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Firebase Auth + JWT", desc: "Multi-factor authentication & verified token exchange." },
                { text: "Granular RBAC", desc: "Defined access levels for Admin, Staff, and Citizens." },
                { text: "Financial Security", desc: "Integrated Stripe gateway for secure payment processing." },
                { text: "Environment Protection", desc: "Rigorous use of .env for secrets and API protection." }
              ].map((item, i) => (
                <li key={i} className="group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest opacity-90">{item.text}</span>
                  </div>
                  <p className="text-[10px] opacity-40 ml-4.5">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SCALABILITY: GSAP & Animated Stack Icons */}
        <div className="reveal-item md:col-span-12 p-12 rounded-[4rem] bg-base-100/10 backdrop-blur-3xl border border-white/10 relative overflow-hidden group">
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-primary">
                <Server size={40} className="animate-pulse" />
                <h3 className="text-3xl font-black uppercase tracking-[0.3em]">Scalability</h3>
              </div>
              <p className="text-3xl font-bold opacity-80 leading-tight">
                Engineering <span className="text-primary italic">Scalable Database Architectures</span> using Mongoose and React Query for real-time synchronization.
              </p>
              <div className="flex flex-wrap gap-3">
                 <span className="badge badge-outline p-4 font-bold opacity-50 uppercase text-[10px]">TanStack Query</span>
                 <span className="badge badge-outline p-4 font-bold opacity-50 uppercase text-[10px]">Mongoose</span>
                 <span className="badge badge-outline p-4 font-bold opacity-50 uppercase text-[10px]">Recharts</span>
              </div>
            </div>

            {/* Icon Field: Motion Integrated */}
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: <SiReact />, color: "text-[#61DAFB]", label: "React" },
                { icon: <SiNodedotjs />, color: "text-[#339933]", label: "Node" },
                { icon: <SiMongodb />, color: "text-[#47A248]", label: "MongoDB" },
                { icon: <SiTailwindcss />, color: "text-[#06B6D4]", label: "Tailwind" },
                { icon: <SiFirebase />, color: "text-[#FFCA28]", label: "Firebase" },
                { icon: <SiStripe />, color: "text-[#635BFF]", label: "Stripe" },
                { icon: <SiJsonwebtokens />, color: "text-base-content", label: "JWT" },
                { icon: <Database />, color: "text-primary", label: "NoSQL" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
                  className={`aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-4xl backdrop-blur-md cursor-pointer ${item.color} shadow-xl relative group/icon`}
                >
                  {item.icon}
                  <span className="absolute -bottom-6 text-[8px] font-black uppercase opacity-0 group-hover/icon:opacity-50 transition-opacity">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <Database className="absolute -bottom-20 -left-20 text-[25rem] opacity-[0.02] -z-10 group-hover:rotate-12 transition-transform duration-1000" />
        </div>

      </div>
    </section>
  );
};

export default About;