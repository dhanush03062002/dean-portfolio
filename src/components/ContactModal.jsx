import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../assets/constants';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    budget: '$3k - $5k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-[32px] border border-neutral-200 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  Thanks for reaching out! I've received your inquiry and will reply to {formData.email || 'your email'} within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6 pr-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 block mb-1">
                    START A PROJECT
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                    Let's Build Something Great
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                    Tell me about your idea and I'll prepare a custom proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:outline-none text-sm bg-white"
                      >
                        <option>Web Design</option>
                        <option>Branding</option>
                        <option>Product Design</option>
                        <option>Graphics Design</option>
                        <option>Full Redesign Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:outline-none text-sm bg-white"
                      >
                        <option>$1.5k - $3k</option>
                        <option>$3k - $5k</option>
                        <option>$5k - $10k</option>
                        <option>$10k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1.5">
                      Project Details & Links
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Brief overview of goals, timeline, and reference sites..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:outline-none text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Send Project Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
