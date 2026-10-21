import React from 'react';
import { HelpCircle } from 'lucide-react';
import type { FAQItem } from '../../types/portfolio';
import { Accordion } from '../ui/Accordion';

interface FAQProps {
  faqs: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-gradient-to-b from-blush/20 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-full bg-blush text-rose">
              <HelpCircle className="w-4 h-4 text-rose" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose">
              Clear Expectations
            </span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-charcoal mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-mauve text-sm sm:text-base">
            Common questions regarding my working arrangement, communication process, and support scope.
          </p>
        </div>

        {/* Accessible Accordion */}
        <Accordion items={faqs} defaultOpenId={faqs[0]?.id} />

        {/* Still have questions prompt */}
        <div className="mt-10 text-center p-5 rounded-2xl bg-white/70 border border-rose/15 shadow-sm text-xs sm:text-sm text-mauve">
          Have a specific task or question not covered here?{' '}
          <a
            href="#contact"
            className="font-semibold text-rose hover:text-rose-dark underline underline-offset-2 ml-1"
          >
            Reach out directly for a personalized consultation
          </a>
          .
        </div>

      </div>
    </section>
  );
};
