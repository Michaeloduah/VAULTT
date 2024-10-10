import React from "react";
import Navbar from "@/components/Landing-Page/Navbar";
import HeroSection from "@/components/Landing-Page/Hero";
import Features from "@/components/Landing-Page/Features";
import Benefits from "@/components/Landing-Page/Benefits";
import FAQs from "@/components/Landing-Page/FAQs";
import About from "@/components/Landing-Page/About";
import Footer from "@/components/Landing-Page/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Benefits />
      <FAQs />
      <About />
      <Footer />
    </>
  );
}
