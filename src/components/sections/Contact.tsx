import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Copy,
  Clock,
  Sparkles,
} from 'lucide-react';
import type { PersonalInfo, ServiceItem } from '../../types/portfolio';
import { Button } from '../ui/Button';

interface ContactProps {
  personalInfo: PersonalInfo;
  services: ServiceItem[];
}

export const Contact: React.FC<ContactProps> = ({ personalInfo, services }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about what you need assistance with.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters so Blessing can better assist you.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto URI to open user's email client cleanly without a fake API
    const subjectText = encodeURIComponent(
      `Inquiry from ${formData.name}: ${formData.service || 'Virtual Assistant Support'}`
    );
    const bodyText = encodeURIComponent(
      `Hello Blessing,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService of Interest: ${formData.service || 'General Support'}\n\nProject Details / Message:\n${formData.message}\n\nSent via Blessing Edoleyi's Portfolio`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectText}&body=${bodyText}`;

    // Trigger user's email application
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Direct WhatsApp message pre-fill
  const getWhatsAppPrefillUrl = () => {
    const text = encodeURIComponent(
      `Hello Blessing, I visited your virtual assistant portfolio and would like to discuss support for my business.`
    );
    return `${personalInfo.whatsAppLink}?text=${text}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-blush/30 to-blush/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-full bg-blush text-rose">
              <Sparkles className="w-4 h-4 text-rose" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose">
              Get In Touch
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[42px] text-charcoal leading-tight mb-4">
            Let's Make Your Day-to-Day Operations Easier
          </h2>
          <p className="text-mauve text-sm sm:text-base leading-relaxed">
            Need help managing customer enquiries, organizing your schedule, or keeping daily business tasks on track? I'd love to help you stay organized and provide reliable support for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-rose/20 shadow-soft space-y-6">
              <h3 className="font-serif font-bold text-xl text-charcoal">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-blush-50/70 border border-rose/15">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-mauve">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-semibold text-charcoal hover:text-rose transition-colors text-sm break-all block"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="text-[11px] text-rose hover:text-rose-dark inline-flex items-center gap-1 mt-1 font-medium cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}</span>
                    </button>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-blush-50/70 border border-rose/15">
                  <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-mauve">WhatsApp Direct</div>
                    <div className="font-semibold text-charcoal text-sm">
                      {personalInfo.whatsAppFormatted}
                    </div>
                    <a
                      href={getWhatsAppPrefillUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 mt-1"
                    >
                      <span>Open WhatsApp Chat →</span>
                    </a>
                  </div>
                </div>

                {/* Location & Remote Availability */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-blush-50/70 border border-rose/15">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-mauve">Location & Work Arrangement</div>
                    <div className="font-semibold text-charcoal text-sm">
                      {personalInfo.location}
                    </div>
                    <div className="text-xs text-mauve mt-0.5">
                      {personalInfo.workArrangement} (Nigeria & International)
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours & Turnaround Box */}
              <div className="p-4 rounded-2xl bg-ivory border border-rose/15 text-xs text-mauve space-y-2">
                <div className="flex items-center gap-2 text-charcoal font-semibold">
                  <Clock className="w-4 h-4 text-rose" />
                  <span>Working Hours & Engagement</span>
                </div>
                <p>
                  <strong className="text-charcoal font-medium">Schedule:</strong> {personalInfo.workingHours}
                </p>
                <p>
                  <strong className="text-charcoal font-medium">Pricing:</strong> {personalInfo.pricing}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-rose/20 shadow-soft relative">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-mauve mb-6">
                Fill in the details below. Submitting will prepare your message directly for dispatch via email to Blessing.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Inquiry Prepared!</span>
                    Your default email application was opened with this message addressed to <span className="font-semibold">{personalInfo.email}</span>. You can also contact Blessing directly on WhatsApp for an immediate response.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Your Name <span className="text-rose">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-ivory text-charcoal transition-colors focus:bg-white focus:outline-none ${
                      errors.name ? 'border-rose ring-1 ring-rose' : 'border-rose/20 focus:border-rose'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Your Email <span className="text-rose">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-ivory text-charcoal transition-colors focus:bg-white focus:outline-none ${
                      errors.email ? 'border-rose ring-1 ring-rose' : 'border-rose/20 focus:border-rose'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service of Interest */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-rose/20 text-sm bg-ivory text-charcoal focus:bg-white focus:border-rose focus:outline-none cursor-pointer"
                  >
                    <option value="">Select a service (optional)</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Custom Administrative Package">Custom Administrative Package</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    How Can Blessing Support You? <span className="text-rose">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your business, regular administrative tasks, schedule coordination needs, or customer service requirements..."
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-ivory text-charcoal transition-colors focus:bg-white focus:outline-none resize-y ${
                      errors.message ? 'border-rose ring-1 ring-rose' : 'border-rose/20 focus:border-rose'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                    className="w-full font-semibold"
                  >
                    Send Message Directly
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
