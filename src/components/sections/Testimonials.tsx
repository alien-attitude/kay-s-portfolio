import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { TestimonialItem } from '../../types/portfolio';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only render if authentic, permission-approved testimonials exist
  const verifiedTestimonials = testimonials.filter((t) => t.hasPermission);
  if (!verifiedTestimonials.length) {
    return null;
  }

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? verifiedTestimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === verifiedTestimonials.length - 1 ? 0 : curr + 1));
  };

  const current = verifiedTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-rose mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-rose text-rose" />
            ))}
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
            What Clients Say
          </h2>
        </div>

        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-rose/20 shadow-soft text-center">
          <Quote className="w-10 h-10 text-rose/30 mx-auto mb-4" />
          <p className="font-serif italic text-base sm:text-lg text-charcoal-muted leading-relaxed mb-6">
            "{current.testimonial}"
          </p>

          <div>
            <div className="font-serif font-bold text-charcoal text-base">
              {current.clientName}
            </div>
            {(current.clientRole || current.company) && (
              <div className="text-xs text-mauve">
                {[current.clientRole, current.company].filter(Boolean).join(' • ')}
              </div>
            )}
          </div>

          {verifiedTestimonials.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={prev}
                className="p-2 rounded-full border border-rose/20 text-charcoal hover:bg-blush"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-mauve">
                {currentIndex + 1} / {verifiedTestimonials.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="p-2 rounded-full border border-rose/20 text-charcoal hover:bg-blush"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
