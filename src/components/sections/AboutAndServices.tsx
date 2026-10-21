import React from 'react';
import {
  Heart,
  Headphones,
  Share2,
  Calendar,
  Plane,
  Database,
  ArrowRight,
  Check,
  Info,
} from 'lucide-react';
import type { AboutInfo, ServiceItem } from '../../types/portfolio';
import { Button } from '../ui/Button';

interface AboutAndServicesProps {
  about: AboutInfo;
  services: ServiceItem[];
}

export const AboutAndServices: React.FC<AboutAndServicesProps> = ({ about, services }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-rose" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-rose" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-rose" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-rose" />;
      case 'Database':
      default:
        return <Database className="w-5 h-5 text-rose" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-blush/30 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* About Column (Left, spans 5 cols) */}
          <div id="about" className="lg:col-span-5 scroll-mt-24">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-rose/20 shadow-soft relative overflow-hidden h-full flex flex-col justify-between">
              {/* Subtle top corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blush/60 rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="p-1.5 rounded-full bg-blush text-rose">
                    <Heart className="w-4 h-4 fill-rose text-rose" />
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
                    About Me
                  </h2>
                </div>

                <div className="space-y-4 text-mauve text-sm sm:text-base leading-relaxed mb-8">
                  {about.introduction.map((paragraph, index) => (
                    <p key={index} className="text-charcoal-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-rose/15">
                <Button
                  asLink
                  href="#experience"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  {about.callToActionText || 'Learn More About Me'}
                </Button>
              </div>
            </div>
          </div>

          {/* Services Column (Right, spans 7 cols) */}
          <div id="services" className="lg:col-span-7 scroll-mt-24">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <Heart className="w-4 h-4 fill-rose text-rose" />
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
                  Services
                </h2>
              </div>
              <p className="text-mauve text-sm sm:text-base">
                I offer a range of virtual assistance services to help you stay organized, connected, and productive.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              {services.map((service, index) => {
                const isFullWidth = index === services.length - 1 && services.length % 2 !== 0;
                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-2xl p-5 sm:p-6 border border-rose/20 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                      isFullWidth ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-start gap-3.5 mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-blush/80 border border-rose/20 flex items-center justify-center shrink-0">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal leading-snug pt-1">
                          {service.title}
                        </h3>
                      </div>

                      {/* Explicit Focus Note (especially for Social Media Page Management) */}
                      {service.focusNote && (
                        <div className="mb-3.5 px-3 py-2 rounded-xl bg-blush-50 border border-rose/20 text-xs text-charcoal-soft flex items-start gap-2">
                          <Info className="w-3.5 h-3.5 text-rose shrink-0 mt-0.5" />
                          <span className="leading-snug">{service.focusNote}</span>
                        </div>
                      )}

                      {/* Features List */}
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-xs sm:text-sm text-mauve flex items-start gap-2 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-rose shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-rose/10 flex justify-end">
                      <a
                        href="#contact"
                        className="text-xs font-semibold text-rose hover:text-rose-dark inline-flex items-center gap-1 group"
                      >
                        <span>Inquire About Service</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
