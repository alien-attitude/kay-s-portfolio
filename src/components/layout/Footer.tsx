import React from 'react';
import { Heart, Mail, Phone, ArrowUp } from 'lucide-react';
import { BrandMark } from '../ui/BrandMark';
import type { PersonalInfo } from '../../types/portfolio';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-rose/20 pt-12 pb-8 text-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-rose/15 text-center md:text-left">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <a href="#home" aria-label="Blessing Edoleyi Portfolio Home">
              <BrandMark size="md" />
            </a>
            <p className="text-xs sm:text-sm text-mauve mt-3 leading-relaxed">
              Virtual Assistant specialized in Customer Support and Administrative Coordination. Delivering reliable, attentive, and organized operations.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-charcoal-muted hover:text-rose transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick contact */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-mauve">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-rose transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-rose" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-rose transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose" />
              <span>{personalInfo.whatsAppFormatted} (WhatsApp)</span>
            </a>
            <span className="text-[11px] text-mauve/80 mt-1">
              {personalInfo.location} • Available for Remote Work
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mauve">
          <div className="flex items-center gap-1">
            <span>© 2025 Blessing Iyekeretin Edoleyi. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px]">
              Crafted with <Heart className="w-3 h-3 text-rose fill-rose inline" /> for professional excellence
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blush text-rose hover:bg-blush-200 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
