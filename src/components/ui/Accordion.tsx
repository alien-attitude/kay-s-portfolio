import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-300 ${
              isOpen
                ? 'bg-white border-rose/40 shadow-soft-lg'
                : 'bg-white/70 hover:bg-white border-rose/15 shadow-sm'
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 rounded-2xl"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blush text-rose font-medium text-xs shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-serif font-semibold text-charcoal text-base sm:text-lg">
                    {item.question}
                  </span>
                </span>
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-blush-50 text-rose transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-rose text-white' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`px-5 sm:px-6 pb-5 pt-1 text-mauve text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <div className="pl-9 border-l-2 border-blush-200">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
