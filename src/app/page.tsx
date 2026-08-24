import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Services } from '@/components/Services';
import { Workflow } from '@/components/Workflow';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <ProjectShowcase />
      <Services />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}
