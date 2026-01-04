import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DynamicBG = () => {
    const container = useRef();
    const parallaxLayer = useRef();

    useGSAP(() => {
        // LAYER 1: Base Blobs (Static Ambient mood)
        gsap.to(".base-blob", {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            duration: "random(15, 25)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // LAYER 2: 50% Scroll Speed Parallax Layer
        gsap.to(parallaxLayer.current, {
            y: "-35vh", 
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.2,
            }
        });

        // Slow Rotation for the Nodes
        gsap.to(".floating-node", {
            rotate: 360,
            duration: 60,
            repeat: -1,
            ease: "none"
        });
    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-0 overflow-hidden bg-base-100 pointer-events-none transition-colors duration-1000">
            
            {/* BOTTOM LAYER (STATIC GLOWS) */}
            {/* We use 'dark:opacity-20 opacity-40' to make them visible in light mode */}
            <div className="base-blob absolute top-[-10%] left-[-10%] w-[900px] h-[900px] bg-primary/30 dark:opacity-20 opacity-40 rounded-full blur-[140px]" />
            <div className="base-blob absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] bg-secondary/20 dark:opacity-10 opacity-30 rounded-full blur-[120px]" />

            {/* MIDDLE LAYER (SCROLLS AT 50% SPEED) */}
            <div ref={parallaxLayer} className="absolute inset-0 w-full h-[150vh] z-10">
                
                {/* 5-Node Architecture (Extra boxes added) */}
                <div className="floating-node absolute top-[10%] left-[5%] w-64 h-64 border-2 border-primary/20 rounded-[4rem] rotate-45" />
                <div className="floating-node absolute top-[30%] right-[10%] w-96 h-96 border border-secondary/20 rounded-full" />
                <div className="floating-node absolute top-[55%] left-[15%] w-80 h-40 border-2 border-accent/20 rounded-3xl -rotate-12" />
                <div className="floating-node absolute top-[75%] right-[20%] w-56 h-56 border border-primary/10 rounded-full" />
                <div className="floating-node absolute top-[85%] left-[30%] w-40 h-40 border-2 border-secondary/15 rounded-[2rem] rotate-[30deg]" />
                
                {/* Dot Grid Layer - Improved Visibility for Light Mode */}
                <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]" 
                     style={{ 
                         backgroundImage: 'radial-gradient(currentColor 1px, transparent 0)', 
                         backgroundSize: '80px 80px',
                         color: 'var(--color-primary)' 
                     }} 
                />
            </div>

            {/* TOP OVERLAY: Heavy Noise for Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-noise z-20 mix-blend-multiply dark:mix-blend-overlay" />
        </div>
    );
};

export default DynamicBG;