import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GithubSection from '../components/Github';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

export default function Page() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Navbar />
      <section id="hero" style={{ marginTop: 24 }}>
        <AnimatedSection delay={0.1}>
          <Hero />
        </AnimatedSection>
      </section>
      <section id="about" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <About />
        </AnimatedSection>
      </section>
      <section id="skills" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Skills />
        </AnimatedSection>
      </section>
      <section id="projects" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Projects />
        </AnimatedSection>
      </section>
      {/* <section id="github" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <GithubSection />
        </AnimatedSection>
      </section> */}
      {/* <section id="experience" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Experience />
        </AnimatedSection>
      </section> */}
      <section id="education" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Education />
        </AnimatedSection>
      </section>
      {/* <section id="certificates" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Certificates />
        </AnimatedSection>
      </section> */}
      {/* <section id="achievements" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Achievements />
        </AnimatedSection>
      </section> */}
      <section id="contact" style={{ marginTop: 48 }}>
        <AnimatedSection delay={0.2}>
          <Contact />
        </AnimatedSection>
      </section>
      <Footer />
    </main>
  );
}
