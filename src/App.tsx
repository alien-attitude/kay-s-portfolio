import React from 'react';
import { portfolioData } from './content/portfolio';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutAndServices } from './components/sections/AboutAndServices';
import { SkillsAndExperience } from './components/sections/SkillsAndExperience';
import { PortfolioAndEducation } from './components/sections/PortfolioAndEducation';
import { WhyWorkWithMe } from './components/sections/WhyWorkWithMe';
import { FAQ } from './components/sections/FAQ';
import { Testimonials } from './components/sections/Testimonials';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-blush-200 selection:text-charcoal">
      {/* Navigation */}
      <Navbar whatsAppLink={portfolioData.personalInfo.whatsAppLink} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero personalInfo={portfolioData.personalInfo} />

        {/* About & Services Section */}
        <AboutAndServices
          about={portfolioData.about}
          services={portfolioData.services}
        />

        {/* Skills & Experience Section */}
        <SkillsAndExperience
          tools={portfolioData.tools}
          softSkills={portfolioData.softSkills}
          experiences={portfolioData.experiences}
        />

        {/* Portfolio Samples & Education Section */}
        <PortfolioAndEducation
          portfolioSamples={portfolioData.portfolioSamples}
          education={portfolioData.education}
          training={portfolioData.training}
          languages={portfolioData.personalInfo.languages}
        />

        {/* Why Work With Me Section */}
        <WhyWorkWithMe
          heading={portfolioData.whyWorkWithMe.heading}
          introduction={portfolioData.whyWorkWithMe.introduction}
          strengths={portfolioData.whyWorkWithMe.strengths}
        />

        {/* FAQ Accordion Section */}
        <FAQ faqs={portfolioData.faqs} />

        {/* Optional Sections: Render only when verified data is available */}
        <Testimonials testimonials={portfolioData.testimonials} />
        <Achievements
          achievements={portfolioData.achievements}
          volunteerExperiences={portfolioData.volunteerExperiences}
        />

        {/* Contact Section */}
        <Contact
          personalInfo={portfolioData.personalInfo}
          services={portfolioData.services}
        />
      </main>

      {/* Footer */}
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
};

export default App;
