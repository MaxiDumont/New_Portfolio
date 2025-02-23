"use client";

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Desplazar la ventana a la parte superior cuando el componente se monte
    window.scrollTo(0, 0);
    // Cambiar la URL a #home
    window.history.replaceState(null, "", "#home");
  }, []);

  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="tape">
        <TapeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}