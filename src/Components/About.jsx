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
  CreditCard, 
  Database, 
  Terminal, 
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
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />

      {/* Header Section */}
      <div className="mb-12 md:mb-24 reveal-item">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none">
          Beyond the <span className="text-primary italic">Console.</span>
        </h2>
        <div className="text-lg sm:text-2xl md:text-3xl font-bold text-base-content/60 mt-4">
          {typeEffect}<Cursor cursorStyle="_" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        
        {/* FIXED SLIDER: Manifesto & Philosophy */}
        <div className="reveal-item col-span-1 md:col-span-7 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-base-100/5 backdrop-blur-3xl min-h-[350px] md:min-h-[480px] group">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="h-full w-full cursor-grab active:cursor-grabbing"
          >
            {[
              { id: "01", title: "Discipline creates momentum.", accent: "text-primary", border: "border-primary/20", icon: <Target className="text-primary" size={40} />, text: `"I do not rely on motivation; I rely on discipline. Discipline creates consistent momentum, and momentum fuels progress."` },
              { id: "02", title: "Production-Ready Architectures.", accent: "text-accent", border: "border-accent/20", icon: <Terminal className="text-accent" size={40} />, text: `Engineering production-ready solutions by moving beyond basic tutorials, focusing on secure and scalable web applications.` },
              { id: "03", title: "Full-Stack Excellence.", accent: "text-secondary", border: "border-secondary/20", icon: <Activity className="text-secondary" size={40} />, text: `Dedicated MERN stack development for high-impact projects, utilizing an agile mindset and clean code principles.` }
            ].map((slide) => (
              <SwiperSlide key={slide.id} className="p-6 sm:p-10 md:p-12 flex flex-col justify-center bg-transparent">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="scale-75 md:scale-100 origin-left">{slide.icon}</div>
                  <span className="text-[10px] font-black opacity-30 tracking-[0.3em]">{slide.id} / PHILOSOPHY</span>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight md:leading-none mb-4 md:mb-6">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <span className={slide.accent}>{slide.title.split(' ').pop()}</span>
                </h3>
                <p className={`text-base sm:text-xl opacity-60 leading-relaxed ${slide.id === "01" ? `font-serif italic border-l-4 ${slide.border} pl-4 md:pl-6` : ""}`}>
                  {slide.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SECURITY: Expanded with Detailed Stack */}
        <div className="reveal-item col-span-1 md:col-span-5 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 flex flex-col justify-between group relative overflow-hidden min-h-[400px]">
          <div className="flex justify-between items-start relative z-10">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 md:p-5 rounded-2xl bg-base-100 shadow-2xl">
              <Key className="text-primary" size={24} md:size={28} />
            </motion.div>
            <CreditCard className="text-primary/10 -mt-4 -mr-4 md:-mt-8 md:-mr-8 scale-75 md:scale-100" size={140} />
          </div>
          
          <div className="space-y-4 md:space-y-6 relative z-10 mt-8 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
              Secure Core <ShieldCheck className="text-primary" size={20} md:size={24} />
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                { text: "Firebase Auth + JWT", desc: "Multi-factor authentication & verified token exchange." },
                { text: "Granular RBAC", desc: "Defined access levels for Admin, Staff, and Citizens." },
                { text: "Financial Security", desc: "Integrated Stripe gateway for secure payment processing." },
                { text: "Environment Protection", desc: "Rigorous use of .env for secrets and API protection." }
              ].map((item, i) => (
                <li key={i} className="group/item">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-90">{item.text}</span>
                  </div>
                  <p className="text-[9px] md:text-[10px] opacity-40 ml-3.5 md:ml-4.5">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SCALABILITY: Animated Stack Icons */}
        <div className="reveal-item col-span-1 md:col-span-12 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[4rem] bg-base-100/10 backdrop-blur-3xl border border-white/10 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4 text-primary">
                <Server size={30} md:size={40} className="animate-pulse" />
                <h3 className="text-xl md:text-3xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Scalability</h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold opacity-80 leading-tight">
                Engineering <span className="text-primary italic">Scalable Database Architectures</span> using Mongoose and React Query for real-time synchronization.
              </p>
              <div className="flex flex-wrap gap-2">
                 {["TanStack Query", "Mongoose", "Recharts"].map(tag => (
                   <span key={tag} className="badge badge-outline p-3 md:p-4 font-bold opacity-50 uppercase text-[8px] md:text-[10px]">{tag}</span>
                 ))}
              </div>
            </div>

            {/* Icon Field: Motion Integrated - Optimized Grid for Mobile */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                    y: -10, 
                    scale: 1.05, 
                    rotate: 5,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
                  className={`aspect-square rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl backdrop-blur-md cursor-pointer ${item.color} shadow-xl relative group/icon`}
                >
                  {item.icon}
                  <span className="absolute -bottom-5 md:-bottom-6 text-[7px] md:text-[8px] font-black uppercase opacity-0 group-hover/icon:opacity-50 transition-opacity">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <Database className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 text-[15rem] md:text-[25rem] opacity-[0.02] -z-10 group-hover:rotate-12 transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default About;