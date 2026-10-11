import React from 'react';
import { Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ContactPillStripProps {
  className?: string;
  onOpenQuoteModal?: () => void;
}

export const ContactPillStrip: React.FC<ContactPillStripProps> = ({ className = '', onOpenQuoteModal }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
      <div className="bg-white rounded-3xl md:rounded-full p-3 sm:p-4 shadow-xl shadow-purple-900/10 border border-purple-100 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* Call Us */}
        <a 
          href={AGENCY_INFO.phoneCall}
          className="flex items-center gap-4 px-4 py-2 hover:bg-purple-50/60 rounded-2xl md:rounded-full transition group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Call Us</p>
            <p className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-700 transition truncate">
              {AGENCY_INFO.phoneDisplay}
            </p>
          </div>
        </a>

        {/* Visit Our Offices */}
        <div className="flex items-center gap-4 px-4 py-2 hover:bg-purple-50/60 rounded-2xl md:rounded-full transition group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Our Branches</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1 group-hover:text-purple-700 transition">
              Edenvale, Gauteng & Estcourt, KZN
            </p>
            <p className="text-[11px] text-slate-500 truncate">
              Van Riebeeck Ave & Harding St
            </p>
          </div>
        </div>

        {/* Email Us */}
        <a 
          href={AGENCY_INFO.emailLink}
          className="flex items-center gap-4 px-4 py-2 hover:bg-purple-50/60 rounded-2xl md:rounded-full transition group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Us</p>
            <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition truncate">
              {AGENCY_INFO.email}
            </p>
            <p className="text-[11px] text-slate-500">24/7 fast quote inquiry</p>
          </div>
        </a>

      </div>
    </div>
  );
};
