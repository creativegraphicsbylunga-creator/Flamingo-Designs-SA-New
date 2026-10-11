import React from 'react';
import { PageId } from '../types';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0c2a] text-white pt-16 pb-8 border-t border-purple-950/60 relative overflow-hidden">
      {/* Subtle purple radial background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                <div className="w-full h-full bg-slate-950/30 rounded-[10px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-black tracking-tight text-white">
                  Flamingo <span className="text-purple-400">Designs</span> SA
                </h4>
                <p className="text-[10px] uppercase font-bold text-purple-300 tracking-wider">
                  Grow Digital. Go Global.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design modern, responsive and result-driven websites that help your business grow online. Proudly serving clients across South Africa & globally from Edenvale and Estcourt.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-full transition shadow-md"
              >
                <span>Get a Free Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={AGENCY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3 py-2 rounded-full transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs uppercase font-extrabold tracking-wider text-purple-300">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portfolio')} className="hover:text-white transition">
                  Portfolio / Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pricing')} className="hover:text-white transition">
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-extrabold tracking-wider text-purple-300">
              Our Services
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES_LIST.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleNavClick('services')} 
                    className="hover:text-white transition text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs uppercase font-extrabold tracking-wider text-purple-300">
              Our Offices & Contact
            </h5>
            
            <div className="space-y-3 text-xs text-slate-400">
              
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Edenvale Hub (Gauteng)</span>
                </p>
                <p className="text-slate-300 pl-5">Van Riebeeck Ave, Edenvale, 1609</p>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Estcourt Hub (KZN Midlands)</span>
                </p>
                <p className="text-slate-300 pl-5">Harding Street, Estcourt, KZN</p>
              </div>

              <div className="pt-1 space-y-1 pl-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <a href={AGENCY_INFO.phoneCall} className="text-white hover:text-purple-300 font-semibold transition">
                    {AGENCY_INFO.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <a href={AGENCY_INFO.emailLink} className="text-white hover:text-purple-300 transition">
                    {AGENCY_INFO.email}
                  </a>
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar matching flyer social layout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Flamingo Designs SA. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Empowering South African & global brands with modern digital architecture.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 font-semibold">Follow Us:</span>
            {/* Social Icons matching flyer (f, insta, in, twitter/x) */}
            <div className="flex items-center gap-2">
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-white flex items-center justify-center transition"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-white flex items-center justify-center transition"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-white flex items-center justify-center transition"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a 
                href="#x" 
                aria-label="Twitter/X"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-white flex items-center justify-center transition"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
