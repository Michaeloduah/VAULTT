import React from "react";
import Navbar from "@/components/Landing-Page/Navbar";
import HeroSection from "@/components/Landing-Page/Hero";
import Features from "@/components/Landing-Page/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
    </>
  );
}
