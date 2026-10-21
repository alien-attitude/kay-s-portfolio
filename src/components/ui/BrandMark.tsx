import React from 'react';

interface BrandMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-xl',
    lg: 'w-14 h-14 text-2xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-tr from-blush to-blush-200 border border-rose/30 flex items-center justify-center shadow-sm text-rose font-serif italic font-bold select-none group-hover:scale-105 transition-transform duration-300`}
        aria-hidden="true"
      >
        BE
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif font-semibold text-charcoal tracking-tight text-base sm:text-lg leading-tight">
          Blessing Edoleyi
        </span>
        <span className="text-[11px] font-sans text-mauve tracking-wider uppercase font-medium">
          Virtual Assistant
        </span>
      </div>
    </div>
  );
};
