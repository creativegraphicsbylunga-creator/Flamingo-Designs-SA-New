import React, { useState } from 'react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { ContactPillStrip } from '../components/ContactPillStrip';

export const ContactPage: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'edenvale' | 'estcourt'>('edenvale');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Website Design');
  const [budget, setBudget] = useState('R5,000 - R10,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Flamingo Designs SA!%0A%0A*Name:* ${encodeURIComponent(name || 'Client')}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A*Service:* ${encodeURIComponent(service)}%0A*Budget:* ${encodeURIComponent(budget)}%0A*Branch:* ${selectedBranch === 'edenvale' ? 'Edenvale (Gauteng)' : 'Estcourt (KZN)'}%0A*Message:* ${encodeURIComponent(message || 'Inquiry from website')}`;
    window.open(`https://wa.me/27833374954?text=${text}`, '_blank');
  };

  return (
    <div className="w-full pb-20">
      
      {/* Contact Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Direct Communications
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">Flamingo Designs SA</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to upgrade your website or launch a high-impact digital campaign? Get in touch with our Edenvale or Estcourt team today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Branches & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold">Direct Channels</h3>
                <p className="text-xs text-purple-200 mt-1">Speak directly with our technical consultants.</p>
              </div>

              <div className="space-y-4 text-sm">
                <a 
                  href={AGENCY_INFO.phoneCall} 
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-purple-300 uppercase font-semibold">Direct Call</p>
                    <p className="text-base font-extrabold text-white group-hover:text-purple-200">{AGENCY_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a 
                  href={AGENCY_INFO.emailLink} 
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-purple-300 uppercase font-semibold">Direct Email</p>
                    <p className="text-sm font-bold text-white group-hover:text-purple-200 truncate">{AGENCY_INFO.email}</p>
                  </div>
                </a>

                <a 
                  href={AGENCY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/30 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-300 uppercase font-semibold">WhatsApp Chat</p>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-200">083 337 4954 (Instant Reply)</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Branches Selector */}
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-purple-900/5 border border-purple-100 space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
                Our Physical Office Locations
              </h4>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBranch('edenvale')}
                  className={`p-3 rounded-2xl text-left border transition text-xs ${
                    selectedBranch === 'edenvale'
                      ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold ring-2 ring-purple-600/20'
                      : 'border-slate-200 text-slate-700 hover:border-purple-300'
                  }`}
                >
                  <p className="font-bold">Edenvale Hub</p>
                  <p className="text-[10px] text-slate-500">Gauteng (1609)</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBranch('estcourt')}
                  className={`p-3 rounded-2xl text-left border transition text-xs ${
                    selectedBranch === 'estcourt'
                      ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold ring-2 ring-purple-600/20'
                      : 'border-slate-200 text-slate-700 hover:border-purple-300'
                  }`}
                >
                  <p className="font-bold">Estcourt Hub</p>
                  <p className="text-[10px] text-slate-500">KwaZulu-Natal</p>
                </button>
              </div>

              {/* Branch Detailed Card */}
              {selectedBranch === 'edenvale' ? (
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2 text-xs">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Van Riebeeck Ave, Edenvale, 1609</span>
                  </p>
                  <p className="text-slate-600 pl-5">Gauteng, South Africa</p>
                  <p className="text-slate-600 pl-5 flex items-center gap-1 text-[11px] pt-1">
                    <Clock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Mon - Fri: 08:30 - 17:30 | Sat: 09:00 - 13:00</span>
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Van+Riebeeck+Ave,+Edenvale,+1609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-purple-700 hover:underline inline-flex items-center gap-1"
                    >
                      Open in Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2 text-xs">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Harding Street, Estcourt</span>
                  </p>
                  <p className="text-slate-600 pl-5">KwaZulu-Natal Midlands, 3310, South Africa</p>
                  <p className="text-slate-600 pl-5 flex items-center gap-1 text-[11px] pt-1">
                    <Clock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Mon - Fri: 08:30 - 17:00 | Sat: 09:00 - 12:30</span>
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Harding+Street,+Estcourt,+KZN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-purple-700 hover:underline inline-flex items-center gap-1"
                    >
                      Open in Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Contact & Proposal Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-900/5 border border-purple-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Thank You, {name}!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your inquiry has been routed to our Edenvale & Estcourt client team. We will contact you at <strong className="text-purple-700">{phone || email}</strong> within 2 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Send Us a Message / Request a Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the form below and receive a detailed proposal within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sipho Sithole"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="083 337 4954"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.co.za"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Office Hub</label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                    >
                      <option value="edenvale">Edenvale Hub (Van Riebeeck Ave, 1609)</option>
                      <option value="estcourt">Estcourt Hub (Harding St, KZN)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Needed</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                    >
                      <option value="Website Design">Website Design & Development</option>
                      <option value="E-Commerce Store">E-Commerce Store (PayFast/Yoco)</option>
                      <option value="SEO Optimization">SEO Optimization (Google Maps & Organic)</option>
                      <option value="Digital Marketing">Digital Marketing & Ads</option>
                      <option value="Ongoing Support">Ongoing Support & Fast Hosting</option>
                      <option value="Graphic Design">Graphic Design & Logo Branding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                    >
                      <option value="Under R5,000">Under R5,000 (Starter)</option>
                      <option value="R5,000 - R10,000">R5,000 - R10,000 (Growth Pro)</option>
                      <option value="R10,000 - R20,000">R10,000 - R20,000 (E-Commerce)</option>
                      <option value="R20,000+">R20,000+ (Custom Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Details or Requirements</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what kind of website you need, reference sites you like, or questions you have..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-700/20 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Now</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Fast response: phone calls returned same day. WhatsApp responses within minutes during business hours.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Bottom Contact Strip */}
      <section className="mt-16">
        <ContactPillStrip />
      </section>

    </div>
  );
};
