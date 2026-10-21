import React from 'react';
import { Wrench, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import type { ToolItem, ExperienceItem } from '../../types/portfolio';

interface SkillsAndExperienceProps {
  tools: ToolItem[];
  softSkills: string[];
  experiences: ExperienceItem[];
}

export const SkillsAndExperience: React.FC<SkillsAndExperienceProps> = ({
  tools,
  softSkills,
  experiences,
}) => {
  // Brand SVG icons for tools
  const renderToolIcon = (iconType: string) => {
    switch (iconType) {
      case 'google':
        return (
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
            {/* Google Workspace multi-color M / Drive / Calendar inspired mark */}
            <path d="M44 24c0-1.63-.15-3.2-.43-4.71H24v8.92h11.23c-.49 2.62-1.97 4.84-4.2 6.32v5.26h6.8c3.98-3.66 6.17-9.05 6.17-15.79z" fill="#4285F4"/>
            <path d="M24 44c5.4 0 9.93-1.79 13.24-4.85l-6.8-5.26c-1.89 1.27-4.3 2.02-6.44 2.02-4.96 0-9.17-3.35-10.67-7.85H6.26v5.43C9.62 40.16 16.3 44 24 44z" fill="#34A853"/>
            <path d="M13.33 28.06c-.38-1.15-.6-2.38-.6-3.66s.22-2.51.6-3.66V15.3H6.26A20.02 20.02 0 0 0 4 24.4c0 3.23.77 6.29 2.26 8.99l7.07-5.33z" fill="#FBBC05"/>
            <path d="M24 12.09c2.93 0 5.57 1.01 7.64 2.99l5.73-5.73C33.93 6.09 29.4 4 24 4 16.3 4 9.62 7.84 6.26 14.53l7.07 5.43c1.5-4.5 5.71-7.87 10.67-7.87z" fill="#EA4335"/>
          </svg>
        );
      case 'hubspot':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <circle cx="16.5" cy="7.5" r="3.5" fill="#FF7A59"/>
            <circle cx="8" cy="14" r="3" fill="#FF7A59"/>
            <circle cx="17" cy="18" r="2" fill="#FF7A59"/>
            <path d="M10.5 13L13.5 9M10.5 15.5L15.5 17.5" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'monday':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="12" r="3" fill="#F65B62"/>
            <rect x="10.5" y="6" width="3.5" height="12" rx="1.75" fill="#FBBC2E"/>
            <rect x="15.5" y="9" width="3.5" height="9" rx="1.75" fill="#00CA72"/>
          </svg>
        );
      case 'microsoft':
      default:
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" fill="#F25022"/>
            <rect x="13" y="2" width="9" height="9" fill="#7FBA00"/>
            <rect x="2" y="13" width="9" height="9" fill="#00A4EF"/>
            <rect x="13" y="13" width="9" height="9" fill="#FFB900"/>
          </svg>
        );
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Skills & Tools Column (Left, spans 5 cols) */}
          <div id="skills" className="lg:col-span-5 scroll-mt-24">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <Wrench className="w-4 h-4 text-rose" />
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
                  Skills & Tools
                </h2>
              </div>
              <p className="text-mauve text-sm sm:text-base">
                Tools and practical competencies I use to deliver efficient and reliable support.
              </p>
            </div>

            {/* Software Tools 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-2xl p-4 sm:p-4.5 border border-rose/20 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {renderToolIcon(tool.iconType)}
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-charcoal mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-mauve leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Soft Skills Tags / Badges */}
            <div className="bg-white/80 rounded-2xl p-5 border border-rose/15 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose" />
                <span>Core Competencies & Soft Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blush text-charcoal border border-rose/20 hover:bg-blush-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Experience Column (Right, spans 7 cols) */}
          <div id="experience" className="lg:col-span-7 scroll-mt-24">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-full bg-blush text-rose">
                  <Briefcase className="w-4 h-4 text-rose" />
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
                  Professional Experience
                </h2>
              </div>
              <p className="text-mauve text-sm sm:text-base">
                Hands-on history demonstrating customer communication, scheduling, and operational diligence.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-rose/30">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative bg-white rounded-2xl p-5 sm:p-6 border border-rose/20 shadow-soft hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Timeline node marker */}
                  <div
                    className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white border-[3px] border-rose shadow-sm"
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal">
                        {exp.role} <span className="text-rose font-normal">|</span> {exp.organization}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-blush text-rose border border-rose/20">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="mt-3 space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs sm:text-sm text-mauve flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose shrink-0 mt-2" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
