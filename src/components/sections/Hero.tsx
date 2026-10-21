import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import type { PersonalInfo } from '../../types/portfolio';
import { Button } from '../ui/Button';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Delicate background decorative accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blush/60 via-blush/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blush-100 rounded-full blur-2xl pointer-events-none -z-10 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Script Greeting */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-script text-2xl sm:text-3xl text-rose font-bold">
                Hello, I'm
              </span>
              <Heart className="w-5 h-5 text-rose fill-rose/20 animate-pulse inline" />
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-charcoal tracking-tight leading-[1.15] mb-4">
              {personalInfo.fullName}
            </h1>

            {/* Professional Title Subheading */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-blush/60 border border-rose/20 text-rose font-semibold text-xs sm:text-sm tracking-wide">
              <span>{personalInfo.professionalTitle}</span>
            </div>

            {/* Value Proposition */}
            <p className="text-mauve text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {personalInfo.tagline}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                asLink
                href="#services"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-rose" />}
                className="w-full sm:w-auto font-medium"
              >
                View My Services
              </Button>
            </div>

            {/* Quick Contact Bar */}
            <div className="w-full pt-6 border-t border-rose/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-charcoal">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-mauve hover:text-rose transition-colors duration-200"
                title="Send an email to Blessing"
              >
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium text-charcoal">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mauve hover:text-rose transition-colors duration-200"
                title="Contact via WhatsApp"
              >
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium text-charcoal">{personalInfo.whatsAppFormatted}</span>
              </a>

              <div className="inline-flex items-center gap-2 text-mauve">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium text-charcoal">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-center justify-center">
              
              {/* Soft organic blush backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-blush via-blush-100 to-blush-200 rounded-portrait shadow-soft-xl border-2 border-white/80 overflow-hidden">
                
                {personalInfo.profilePhoto ? (
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  /* Tasteful, intentional monogram & administrative silhouette art */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative select-none">
                    {/* Background subtle geometry */}
                    <div className="absolute w-64 h-64 rounded-full border border-rose/20 -top-10 -right-10" />
                    <div className="absolute w-48 h-48 rounded-full border border-rose/15 bottom-4 -left-10" />
                    
                    {/* Centered Monogram & Professional Icon Badge */}
                    <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/90 backdrop-blur-sm shadow-soft border border-rose/30 flex flex-col items-center justify-center mb-5 group">
                      <span className="font-serif italic font-bold text-4xl sm:text-5xl text-rose">
                        BE
                      </span>
                      <div className="flex items-center gap-1 text-[10px] uppercase font-sans tracking-widest text-mauve mt-1">
                        <Sparkles className="w-2.5 h-2.5 text-rose" />
                        <span>VA Studio</span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="font-serif font-bold text-xl text-charcoal">
                        Blessing Edoleyi
                      </h2>
                      <p className="text-xs text-mauve mt-1 max-w-[220px]">
                        Customer Support & Executive Administrative Assistant
                      </p>
                      
                      {/* Availability Tag */}
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-rose/25 text-[11px] font-medium text-charcoal shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                        <span>Available for Remote Work</span>
                      </div>
                    </div>

                    {/* Bottom Features pill */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 text-[11px] font-medium text-mauve bg-white/60 backdrop-blur-xs py-1.5 rounded-full border border-rose/15">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose shrink-0" />
                      <span>Dedicated • Organized • Prompt</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Playful script annotations matching design image */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-soft border border-rose/25 rotate-6 z-20 flex items-center gap-1.5">
                <span className="font-script text-xl font-bold text-rose">Organization</span>
                <Sparkles className="w-3.5 h-3.5 text-rose" />
              </div>

              <div className="absolute top-1/2 -right-5 sm:-right-8 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-soft border border-rose/25 -rotate-3 z-20 flex items-center gap-1.5">
                <span className="font-script text-xl font-bold text-charcoal">Support</span>
                <Heart className="w-3 h-3 text-rose fill-rose" />
              </div>

              <div className="absolute -bottom-3 right-6 sm:right-10 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-soft border border-rose/25 3 z-20 flex items-center gap-1.5">
                <span className="font-script text-xl font-bold text-rose">Success</span>
                <Sparkles className="w-3.5 h-3.5 text-rose" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
