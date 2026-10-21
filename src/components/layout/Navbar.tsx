import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BrandMark } from '../ui/BrandMark';
import { Button } from '../ui/Button';

interface NavbarProps {
  whatsAppLink: string;
}

export const Navbar: React.FC<NavbarProps> = ({ whatsAppLink }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['contact', 'experience', 'portfolio', 'services', 'about', 'home'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-rose/15 shadow-soft py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a href="#home" className="group flex items-center" aria-label="Blessing Edoleyi Portfolio Home">
          <BrandMark />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-rose/15 shadow-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-rose font-semibold'
                    : 'text-charcoal-soft hover:text-charcoal hover:bg-blush/40'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-rose rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asLink
            href="#contact"
            variant="primary"
            size="sm"
            icon={<Sparkles className="w-3.5 h-3.5" />}
            className="shadow-sm font-semibold"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-charcoal hover:bg-blush focus:outline-none focus:ring-2 focus:ring-rose/40"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-rose" /> : <Menu className="w-6 h-6 text-charcoal" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-charcoal/30 backdrop-blur-sm z-40 transition-opacity">
          <div className="bg-ivory border-b border-rose/20 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-blush text-rose font-semibold'
                      : 'text-charcoal hover:bg-blush/40'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-rose/15 flex flex-col gap-2.5">
              <Button
                asLink
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={<Sparkles className="w-4 h-4" />}
              >
                Hire Me
              </Button>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-mauve hover:text-rose font-medium py-2"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
