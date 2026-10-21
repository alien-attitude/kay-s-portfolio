import React from 'react';
import { Award, HeartHandshake } from 'lucide-react';
import type { AchievementItem, VolunteerItem } from '../../types/portfolio';

interface AchievementsProps {
  achievements?: AchievementItem[];
  volunteerExperiences?: VolunteerItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements = [],
  volunteerExperiences = [],
}) => {
  // If no authentic achievements or volunteer records have been supplied, do not render empty placeholders
  if (!achievements.length && !volunteerExperiences.length) {
    return null;
  }

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal">
            Achievements & Community Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose/20 shadow-soft">
              <div className="flex items-center gap-2 mb-4 text-rose">
                <Award className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-charcoal">Key Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((item) => (
                  <li key={item.id} className="border-b border-rose/10 pb-3 last:border-0">
                    <h4 className="font-semibold text-sm text-charcoal">{item.title}</h4>
                    <p className="text-xs text-mauve mt-1">{item.description}</p>
                    {item.date && <span className="text-[11px] text-rose mt-1 block">{item.date}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {volunteerExperiences.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose/20 shadow-soft">
              <div className="flex items-center gap-2 mb-4 text-rose">
                <HeartHandshake className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-charcoal">Volunteer Experience</h3>
              </div>
              <ul className="space-y-4">
                {volunteerExperiences.map((vol) => (
                  <li key={vol.id} className="border-b border-rose/10 pb-3 last:border-0">
                    <h4 className="font-semibold text-sm text-charcoal">{vol.role} — {vol.organization}</h4>
                    <p className="text-xs text-mauve mt-1">{vol.description}</p>
                    <span className="text-[11px] text-rose mt-1 block">{vol.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
