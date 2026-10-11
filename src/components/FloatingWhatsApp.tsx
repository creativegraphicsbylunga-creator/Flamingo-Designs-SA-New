import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Friendly prompt bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3 shadow-xl border border-purple-100 max-w-xs animate-in slide-in-from-bottom-2 flex items-start gap-2 text-xs">
          <div className="min-w-0">
            <p className="font-bold text-slate-800">Need a quick website quote?</p>
            <p className="text-slate-500 text-[11px]">Chat with our Edenvale & Estcourt team directly on WhatsApp.</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={AGENCY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Flamingo Designs SA"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline-block font-extrabold text-sm tracking-wide">
          WhatsApp 083 337 4954
        </span>
      </a>
    </div>
  );
};
