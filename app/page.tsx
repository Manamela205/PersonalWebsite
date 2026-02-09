"use client";

import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { SkillsSection } from "../components/skills-section";
import { ExperienceSection } from "../components/experience-section";
import { ProjectsSection } from "../components/projects-section";
import { EducationSection } from "../components/education-section";
import { CertificatesSection } from "../components/certificates-section";
import { InterestsSection } from "../components/interests-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
