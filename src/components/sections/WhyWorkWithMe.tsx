import React from 'react';
import { Sparkles, MessageSquareHeart, FolderHeart, Eye, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import type { ValuePropositionItem } from '../../types/portfolio';

interface WhyWorkWithMeProps {
  heading: string;
  introduction: string;
  strengths: ValuePropositionItem[];
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({
  heading,
  introduction,
  strengths,
}) => {
  const getStrengthIcon = (id: string) => {
    switch (id) {
      case 'communication':
        return <MessageSquareHeart className="w-5 h-5 text-rose" />;
      case 'organization':
        return <FolderHeart className="w-5 h-5 text-rose" />;
      case 'attention-to-detail':
        return <Eye className="w-5 h-5 text-rose" />;
      case 'reliable-follow-up':
        return <CheckCircle2 className="w-5 h-5 text-rose" />;
      case 'recordkeeping':
        return <BookOpen className="w-5 h-5 text-rose" />;
      case 'adaptability':
      default:
        return <Compass className="w-5 h-5 text-rose" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-full bg-blush text-rose">
              <Sparkles className="w-4 h-4 text-rose" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose">
              Work Ethic & Values
            </span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-charcoal mb-3">
            {heading}
          </h2>
          <p className="text-mauve text-sm sm:text-base leading-relaxed">
            {introduction}
          </p>
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-rose/20 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-start"
            >
              <div className="w-11 h-11 rounded-2xl bg-blush/80 flex items-center justify-center mb-4 shrink-0">
                {getStrengthIcon(item.id)}
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-mauve leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
