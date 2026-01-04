import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    // Set initial centers
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // The Dot: Moves instantly (Precision)
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "none" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "none" });

    // The Ring: Follows with a smooth lag (Fluidity)
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const moveCursor = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleHover = (e) => {
      const isHoverable = e.target.closest("button, a, .cursor-pointer, .project-card");
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Precision Dot - Always small and sharp */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full"
      />

      {/* Lagging Ring - Focus effect on hover */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-primary transition-all duration-300 ease-out ${
          isHovering 
          ? "w-6 h-6 opacity-100 border-2" // Shrinks and sharpens on hover
          : "w-10 h-10 opacity-30"         // Relaxed and large when moving
        }`}
      />
    </div>
  );
};

export default CustomCursor;