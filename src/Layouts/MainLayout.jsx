import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DynamicBG from "../Components/DynamicBG";
import CustomCursor from "../Components/CustomCursor";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-transparent selection:bg-primary selection:text-primary-content">
      {/* Global CSS to hide default cursor */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          body, a, button, * { 
            cursor: none !important; 
          }
        }
      `}} />

      <CustomCursor />
      <DynamicBG />
      
      <div className="relative z-10">
        <Navbar />
        <main>
           <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;