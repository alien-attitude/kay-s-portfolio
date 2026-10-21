import React, { useState } from 'react';
import {
  FolderKanban,
  GraduationCap,
  Globe,
  ArrowRight,
  Eye,
  FileSpreadsheet,
  CheckSquare,
  FileText,
  X,
  ShieldAlert,
} from 'lucide-react';
import type { PortfolioSample, EducationItem, TrainingItem } from '../../types/portfolio';
import { Button } from '../ui/Button';

interface PortfolioAndEducationProps {
  portfolioSamples: PortfolioSample[];
  education: EducationItem[];
  training: TrainingItem[];
  languages: string[];
}

export const PortfolioAndEducation: React.FC<PortfolioAndEducationProps> = ({
  portfolioSamples,
  education,
  training,
  languages,
}) => {
  const [selectedSample, setSelectedSample] = useState<PortfolioSample | null>(null);

  const getSampleIcon = (title: string) => {
    if (title.toLowerCase().includes('inquiry')) {
      return <FileSpreadsheet className="w-5 h-5 text-rose" />;
    }
    if (title.toLowerCase().includes('task') || title.toLowerCase().includes('planner')) {
      return <CheckSquare className="w-5 h-5 text-rose" />;
    }
    return <FileText className="w-5 h-5 text-rose" />;
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-blush/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Portfolio Samples Column (Left, spans 7 cols) */}
          <div className="lg:col-span-7 scroll-mt-24">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <FolderKanban className="w-4 h-4 text-rose" />
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
                  Portfolio Samples
                </h2>
              </div>
              <p className="text-mauve text-sm sm:text-base">
                Practical demonstrations of structured workflows and administrative documents. Created using fictional information for demonstration purposes.
              </p>
            </div>

            {/* Sample Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              {portfolioSamples.map((sample, idx) => {
                const isThird = idx === portfolioSamples.length - 1 && portfolioSamples.length % 2 !== 0;
                return (
                  <div
                    key={sample.id}
                    className={`bg-white rounded-2xl p-5 sm:p-6 border border-rose/20 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${
                      isThird ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div>
                      {/* Category & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-rose px-2.5 py-0.5 rounded-full bg-blush">
                          {sample.category}
                        </span>
                        <span className="text-[10px] text-mauve px-2 py-0.5 rounded-full bg-ivory border border-rose/10">
                          Sample Demonstration
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blush/80 flex items-center justify-center shrink-0">
                          {getSampleIcon(sample.title)}
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal leading-snug">
                            {sample.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-mauve leading-relaxed mb-4">
                        {sample.description}
                      </p>

                      {/* Highlights */}
                      {sample.keyFeatures && (
                        <ul className="space-y-1.5 mb-5 pl-1">
                          {sample.keyFeatures.map((feat, fIdx) => (
                            <li key={fIdx} className="text-xs text-charcoal-muted flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose/60" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Action trigger */}
                    <div className="pt-3 border-t border-rose/10 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedSample(sample)}
                        className="text-xs font-semibold text-rose hover:text-rose-dark inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Sample Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Training Column (Right, spans 5 cols) */}
          <div id="education" className="lg:col-span-5 scroll-mt-24 space-y-6">
            
            {/* Education & Training Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-rose/20 shadow-soft">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <GraduationCap className="w-4 h-4 text-rose" />
                </span>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-charcoal">
                  Education & Training
                </h2>
              </div>

              {/* Education section */}
              <div className="space-y-4 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                  Formal Degree
                </h3>
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl bg-blush-50 border border-rose/15 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white text-rose shrink-0 shadow-xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-charcoal">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-mauve mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Training section */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                  Professional VA Certification
                </h3>
                {training.map((trn) => (
                  <div key={trn.id} className="p-4 rounded-2xl bg-blush-50 border border-rose/15 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white text-rose shrink-0 shadow-xs">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-charcoal">
                        {trn.title}
                      </h4>
                      <p className="text-xs text-mauve mt-0.5">
                        {trn.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages Box */}
              <div className="pt-4 border-t border-rose/15">
                <div className="flex items-center gap-2.5 mb-2">
                  <Globe className="w-4 h-4 text-rose" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                    Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-ivory text-charcoal border border-rose/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Work Approach Note */}
            <div className="p-5 rounded-2xl bg-white/70 border border-rose/15 shadow-sm text-xs text-mauve leading-relaxed">
              <span className="font-semibold text-charcoal block mb-1">
                Continuous Professional Development:
              </span>
              Blessing continuously refines practical workflows in customer relationship management, digital collaboration, and administrative efficiency.
            </div>

          </div>

        </div>
      </div>

      {/* Modal for Sample Preview Details */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sample-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-rose/30 relative">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedSample(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-mauve hover:text-charcoal hover:bg-blush focus:outline-none focus:ring-2 focus:ring-rose/40"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Disclaimer pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush text-rose text-xs font-medium mb-4">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Demonstration Sample (Fictional Data)</span>
            </div>

            <h3 id="sample-modal-title" className="font-serif font-bold text-xl sm:text-2xl text-charcoal mb-1">
              {selectedSample.title}
            </h3>
            <p className="text-xs font-medium text-mauve mb-4">
              {selectedSample.subtitle} • {selectedSample.category}
            </p>

            <p className="text-sm text-charcoal-muted leading-relaxed mb-5">
              {selectedSample.description}
            </p>

            {selectedSample.keyFeatures && (
              <div className="mb-6 p-4 rounded-2xl bg-blush-50 border border-rose/15">
                <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-2.5">
                  Demonstrated Capabilities:
                </h4>
                <ul className="space-y-1.5 text-xs text-mauve">
                  {selectedSample.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-rose/15">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedSample(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="sm"
                onClick={() => setSelectedSample(null)}
                className="w-full sm:w-auto"
              >
                Request Custom Workflow
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
