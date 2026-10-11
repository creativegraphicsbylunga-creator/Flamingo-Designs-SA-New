import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { PageId } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing & Plans' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      {/* Top micro-bar with contact details */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a 
              href={AGENCY_INFO.phoneCall} 
              className="flex items-center gap-1.5 hover:text-purple-300 transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>{AGENCY_INFO.phoneDisplay}</span>
            </a>
            <a 
              href={AGENCY_INFO.emailLink} 
              className="hidden sm:flex items-center gap-1.5 hover:text-purple-300 transition font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>{AGENCY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-purple-200">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Edenvale (Van Riebeeck Ave, 1609) & Estcourt, KZN (Harding St)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a 
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold transition shadow-xs"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
            <span className="hidden md:inline-block text-[11px] text-purple-300">
              ⚡ Rapid SA Turnaround
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching flyer branding style */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left group"
          >
            {/* Gradient Logo Icon */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform flex items-center justify-center text-white">
              <div className="w-full h-full bg-slate-950/20 backdrop-blur-xs rounded-[14px] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-purple-700 transition">
                  Flamingo <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">Designs</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                  SA
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Grow Digital. Go Global.
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? 'text-purple-700 bg-purple-50 font-bold'
                      : 'text-slate-700 hover:text-purple-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-purple-700/25 hover:shadow-purple-700/40 transition hover:scale-[1.02] flex items-center gap-2"
            >
              <span>LET'S BUILD YOUR WEBSITE</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-slate-800 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                <span>{link.label}</span>
                {currentPage === link.id && <span className="w-2 h-2 rounded-full bg-purple-700" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>LET'S BUILD YOUR WEBSITE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-3 bg-purple-50/80 rounded-xl space-y-1 text-xs text-slate-700">
              <p className="font-bold text-purple-900 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-700" />
                <span>Direct Line: {AGENCY_INFO.phoneDisplay}</span>
              </p>
              <p className="text-slate-600 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-700" />
                <span>{AGENCY_INFO.email}</span>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                📍 Edenvale: Van Riebeeck Ave, 1609 | Estcourt: Harding St, KZN
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
