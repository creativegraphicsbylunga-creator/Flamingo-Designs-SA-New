import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Award, CheckCircle2, ArrowRight, Sparkles, Clock, Users, Globe2, Shield } from 'lucide-react';
import { ContactPillStrip } from '../components/ContactPillStrip';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="w-full pb-20">
      
      {/* About Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Our Story & Mission
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            We Create Websites That <br />
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">Propel Businesses Forward</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From our strategic studios in Edenvale (Gauteng) and Estcourt (KZN), we combine high-aesthetic visual design with high-performance web engineering.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-900/5 border border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-purple-700">500+</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Businesses Empowered</p>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-indigo-700">2 Hubs</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Edenvale & Estcourt</p>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-purple-700">99.8%</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Uptime & Reliability</p>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600">4.9 ★</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Average Client Rating</p>
          </div>
        </div>
      </section>

      {/* Dual Hub Presence Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700">Local Presence, National Reach</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Anchored in Gauteng & KwaZulu-Natal
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Flamingo Designs SA was established with a singular focus: giving South African businesses world-standard digital solutions without the slow timelines or exorbitant price tags typical of legacy agencies.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              With operational bases along <strong className="text-slate-900">Van Riebeeck Avenue in Edenvale</strong> and <strong className="text-slate-900">Harding Street in Estcourt</strong>, our team provides both in-person consultation for local enterprises and seamless remote delivery for clients worldwide.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <MapPin className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Gauteng Headquarters</h4>
                  <p className="text-xs text-slate-600">Van Riebeeck Ave, Edenvale, 1609</p>
                  <p className="text-[11px] text-purple-700 font-semibold mt-0.5">📞 083 337 4954 • info@flamingodesignssa.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <MapPin className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">KwaZulu-Natal Hub</h4>
                  <p className="text-xs text-slate-600">Harding Street, Estcourt, KZN</p>
                  <p className="text-[11px] text-purple-700 font-semibold mt-0.5">📞 083 337 4954 • info@flamingodesignssa.co.za</p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Creative collaborative team"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-purple-500/20">
              <p className="text-xs font-bold text-purple-300">100% Client Ownership</p>
              <p className="text-[11px] text-slate-300 mt-1">
                You own all code, domain, logins, and creative assets. No lock-in hostage contracts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our 5-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">How We Work</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            From Blueprint to Launch in 5 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Discovery', desc: 'We understand your goals, target clients, and competitor landscape.' },
            { step: '02', title: 'Wireframing', desc: 'We map user journeys, page layouts, and conversion triggers.' },
            { step: '03', title: 'Design & Code', desc: 'Crafting pixel-perfect, responsive interfaces with clean modern code.' },
            { step: '04', title: 'Speed & SEO', desc: 'Testing 90+ PageSpeed score, mobile responsiveness, and Google meta tags.' },
            { step: '05', title: 'Launch & Grow', desc: 'Live public deployment, training walkthrough, and ongoing maintenance.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm relative space-y-3">
              <span className="text-2xl font-black text-purple-200 block">{item.step}</span>
              <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Contact Strip */}
      <section className="mt-20">
        <ContactPillStrip onOpenQuoteModal={onOpenQuoteModal} />
      </section>

    </div>
  );
};
