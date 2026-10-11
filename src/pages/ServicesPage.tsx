import React, { useState } from 'react';
import { SERVICES_LIST, AGENCY_INFO } from '../data/agencyData';
import { PageId } from '../types';
import { 
  Monitor, 
  Search, 
  Megaphone, 
  Headset, 
  ShoppingCart, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { ContactPillStrip } from '../components/ContactPillStrip';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModalWithService: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModalWithService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'monitor': return <Monitor className="w-7 h-7" />;
      case 'search': return <Search className="w-7 h-7" />;
      case 'megaphone': return <Megaphone className="w-7 h-7" />;
      case 'headset': return <Headset className="w-7 h-7" />;
      case 'shopping-cart': return <ShoppingCart className="w-7 h-7" />;
      case 'palette': return <Palette className="w-7 h-7" />;
      default: return <Monitor className="w-7 h-7" />;
    }
  };

  return (
    <div className="w-full pb-20">
      
      {/* Services Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Digital Agency
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Our Digital <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">Capabilities</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything your business needs to establish authority, generate organic search traffic, and turn South African visitors into lifetime customers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => (
            <div 
              key={srv.id}
              className="bg-white rounded-3xl p-7 shadow-lg shadow-purple-900/5 border border-purple-100 flex flex-col justify-between hover:shadow-2xl hover:border-purple-300 transition duration-300 group"
            >
              <div className="space-y-5">
                {/* Icon & Starting Tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${srv.accentColor} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    Starts at <strong className="text-purple-700">{srv.priceStartingAt}</strong>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-700 mt-1">
                    {srv.shortDesc}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {srv.fullDesc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Included Features</p>
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100/80 space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-purple-900">Key Deliverables:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.deliverables.map((del, idx) => (
                      <span key={idx} className="text-[11px] bg-white px-2 py-0.5 rounded-md text-slate-700 border border-purple-100">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModalWithService(srv.id)}
                  className="w-full py-3 rounded-full bg-slate-900 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Request Quote for {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Modern Architecture</span>
            <h2 className="text-2xl sm:text-4xl font-black">Built with Modern Engineering</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We never use bloated, slow builders that crash or load slowly. We build using high-speed React, Vite, Tailwind CSS, robust Shopify e-commerce engines, and secure South African payment gateways like PayFast and Ozow.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold text-purple-200">
              <span className="px-3 py-1 rounded-full bg-white/10">⚡ 90+ Google PageSpeed Guarantee</span>
              <span className="px-3 py-1 rounded-full bg-white/10">🔒 SSL Encrypted & POPIA Compliant</span>
              <span className="px-3 py-1 rounded-full bg-white/10">📱 100% Mobile First UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Strip */}
      <section className="mt-16">
        <ContactPillStrip onOpenQuoteModal={() => onOpenQuoteModalWithService('web-design')} />
      </section>

    </div>
  );
};
