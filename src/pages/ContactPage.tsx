import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { SendIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta(
    'Contact',
    "Book Milton for a keynote, strategic counsel, or partnership. Let's start a conversation."
  );
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', organisation: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Let's Start the Conversation"
        subtitle="A keynote, a strategy session, a workshop, a partnership. Tell Milton what you are working on and how he can help you move the needle."
        backgroundImage="/milton1.png"
      />

      <section className="py-section-sm md:py-section bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
                Get in Touch
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <MailIcon className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Email</p>
                    <a
                      href="mailto:booking@miltonkamwendo.com"
                      className="text-neutral-400 text-sm hover:text-white transition-colors"
                    >
                      booking@miltonkamwendo.com
                    </a>
                    <br />
                    <a
                      href="mailto:info@miltonkamwendo.com"
                      className="text-neutral-400 text-sm hover:text-white transition-colors"
                    >
                      info@miltonkamwendo.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPinIcon className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Location</p>
                    <p className="text-neutral-400 text-sm">
                      Available globally for keynotes and consulting
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8">
                <p className="text-neutral-600 text-sm font-serif italic">
                  "The best time to act is now. The second best time is also now."
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-white/5 bg-primary-light">
                  <SendIcon className="w-8 h-8 text-gold mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    Message Sent
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Thank you. Milton's team will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-700"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formState.organisation}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-700"
                      placeholder="Your company or organisation"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white text-sm focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-neutral-700"
                      placeholder="Tell us about your event, goals, or how Milton can help..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary bg-gold hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
