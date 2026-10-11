import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState(initialService || 'web-design');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('R5,000 - R10,000');
  const [timeline, setTimeline] = useState('Within 2-3 weeks');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hi Flamingo Designs SA!%0A%0A*Name:* ${encodeURIComponent(name || 'Client')}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A*Company:* ${encodeURIComponent(company || 'N/A')}%0A*Service:* ${encodeURIComponent(selectedService)}%0A*Budget:* ${encodeURIComponent(budget)}%0A*Timeline:* ${encodeURIComponent(timeline)}%0A*Details:* ${encodeURIComponent(notes || 'Requesting a quote')}`;
    window.open(`https://wa.me/27833374954?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 p-6 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Free Consultation & Proposal
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Let's Build Your Website</h3>
            <p className="text-xs text-purple-200">Edenvale: Van Riebeeck Ave | Estcourt: Harding St | 📞 083 337 4954</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Quote Request Received!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                Thank you, <span className="font-semibold text-purple-700">{name || 'valued client'}</span>! Our senior web strategist will review your requirements and reach out within 2 hours.
              </p>
              
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 max-w-md mx-auto text-left text-xs space-y-1.5">
                <p><strong className="text-slate-700">Service:</strong> {SERVICES_LIST.find(s => s.id === selectedService)?.title || selectedService}</p>
                <p><strong className="text-slate-700">Estimated Budget:</strong> {budget}</p>
                <p><strong className="text-slate-700">Direct Contact:</strong> 083 337 4954 | info@flamingodesignssa.co.za</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp for Instant Reply</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Required Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-2.5 rounded-xl border text-left transition text-xs flex flex-col justify-between ${
                        selectedService === srv.id
                          ? 'border-purple-600 bg-purple-50/80 text-purple-900 font-bold ring-2 ring-purple-600/20'
                          : 'border-slate-200 hover:border-purple-300 text-slate-700'
                      }`}
                    >
                      <span className="truncate">{srv.title}</span>
                      <span className="text-[10px] text-slate-400 mt-1">From {srv.priceStartingAt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lerato Ndlovu"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="083 ... or 072 ..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@business.co.za"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Project Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Edenvale Enterprises"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Budget (ZAR)</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                  >
                    <option value="Under R5,000">Under R5,000 (Starter)</option>
                    <option value="R5,000 - R10,000">R5,000 - R10,000 (Growth Pro)</option>
                    <option value="R10,000 - R20,000">R10,000 - R20,000 (E-Commerce)</option>
                    <option value="R20,000+">R20,000+ (Custom Enterprise)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Launch Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                  >
                    <option value="As soon as possible">As soon as possible (Urgent)</option>
                    <option value="Within 1 - 2 weeks">Within 1 - 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Flexible / Planning stage">Flexible / Planning stage</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tell us about your project or current website
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your goals, desired features, or reference websites..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-extrabold rounded-full shadow-lg shadow-purple-700/25 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free Proposal</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 We respect your privacy. No spam. You will speak directly with our senior designers.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
