"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Publications } from "@/components/Publications";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Connection } from "@/components/Connection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
          <Hero />
          <div id="content-container">
            <About />
            <Publications />
            <Experience />
            <Skills />
            <Connection />
          </div>
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
