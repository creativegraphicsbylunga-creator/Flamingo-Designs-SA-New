import React, { useState } from 'react';
import { PRICING_PLANS, FAQS, AGENCY_INFO } from '../data/agencyData';
import { Check, X, ArrowRight, Sparkles, Calculator, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { ContactPillStrip } from '../components/ContactPillStrip';

interface PricingPageProps {
  onOpenQuoteModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuoteModal }) => {
  // Interactive Calculator State
  const [pageCount, setPageCount] = useState<number>(5);
  const [needsEcommerce, setNeedsEcommerce] = useState<boolean>(false);
  const [productCount, setProductCount] = useState<number>(15);
  const [seoTier, setSeoTier] = useState<'basic' | 'advanced' | 'aggressive'>('advanced');
  const [needsCopywriting, setNeedsCopywriting] = useState<boolean>(false);
  const [needsHosting, setNeedsHosting] = useState<boolean>(true);
  const [needsMaintenance, setNeedsMaintenance] = useState<boolean>(false);

  // Dynamic cost calculation logic
  const calculateTotal = () => {
    let base = 2800; // Base architecture & setup
    // Page cost
    base += pageCount * 450;
    
    // E-commerce
    if (needsEcommerce) {
      base += 3500;
      if (productCount > 30) base += 1500;
    }

    // SEO
    if (seoTier === 'advanced') base += 1200;
    if (seoTier === 'aggressive') base += 2500;

    // Copywriting
    if (needsCopywriting) base += pageCount * 250;

    // Domain & Hosting
    if (needsHosting) base += 690;

    return base;
  };

  const calculatedTotal = calculateTotal();

  const getEstimatedDays = () => {
    if (needsEcommerce) return '10 - 15 business days';
    if (pageCount > 8) return '7 - 12 business days';
    return '4 - 6 business days';
  };

  return (
    <div className="w-full pb-20">
      
      {/* Pricing Header */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-purple-100/40 via-white to-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 100% Transparent South African Pricing
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Clear Packages. <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">No Hidden Fees.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a turnkey website package or use our interactive quote calculator below to customize an exact build for your business.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 to-indigo-950 text-white shadow-2xl shadow-purple-900/30 border-2 border-purple-500 scale-[1.02] z-10'
                  : 'bg-white text-slate-900 shadow-lg shadow-purple-900/5 border border-purple-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`text-lg font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-purple-200' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black">
                      R{plan.priceZAR.toLocaleString()}
                    </span>
                    <span className={`text-xs ${plan.popular ? 'text-purple-300' : 'text-slate-400'}`}>
                      once-off
                    </span>
                  </div>
                  <p className={`text-[11px] mt-1 font-semibold ${plan.popular ? 'text-purple-300' : 'text-purple-700'}`}>
                    ⚡ Ready in {plan.turnaround}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100/20 text-xs">
                  <p className={`text-[10px] uppercase tracking-wider font-extrabold ${plan.popular ? 'text-purple-300' : 'text-slate-400'}`}>
                    What's Included:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-purple-600'}`} />
                      <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-1.5 opacity-60">
                      {plan.notIncluded.map((notFeat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-400 line-through">
                          <X className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                          <span>{notFeat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100/20">
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white shadow-lg'
                      : 'bg-slate-900 hover:bg-purple-700 text-white'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE INSTANT PRICE ESTIMATOR / CALCULATOR
      ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-900/10 border-2 border-purple-100">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Interactive Tool
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Instant Website Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Customize your specific business needs and see an immediate transparent estimate in South African Rand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pages Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Number of Pages</span>
                  <span className="text-sm font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md">
                    {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                  className="w-full accent-purple-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 Page (Landing)</span>
                  <span>5 Pages (Standard SME)</span>
                  <span>15+ Pages (Extensive)</span>
                </div>
              </div>

              {/* E-Commerce Toggle */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-800">E-Commerce & Online Store</p>
                    <p className="text-[11px] text-slate-500">PayFast / Yoco checkout, product catalog, courier integration</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNeedsEcommerce(!needsEcommerce)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      needsEcommerce ? 'bg-purple-700' : 'bg-slate-300'
                    }`}
                  >
                    <span className={`block w-4 h-4 bg-white rounded-full transition-transform absolute top-1 ${
                      needsEcommerce ? 'right-1' : 'left-1'
                    }`} />
                  </button>
                </div>

                {needsEcommerce && (
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Initial Products Loaded:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setProductCount(15)}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                          productCount <= 15 ? 'bg-purple-700 text-white' : 'bg-white border text-slate-700'
                        }`}
                      >
                        Up to 20
                      </button>
                      <button
                        onClick={() => setProductCount(50)}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                          productCount > 15 ? 'bg-purple-700 text-white' : 'bg-white border text-slate-700'
                        }`}
                      >
                        50+ Products
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* SEO Tier Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">SEO & Visibility Strategy</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSeoTier('basic')}
                    className={`p-2.5 rounded-xl border text-center transition text-xs ${
                      seoTier === 'basic' ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <p className="font-bold">Basic</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Meta tags</p>
                  </button>
                  <button
                    onClick={() => setSeoTier('advanced')}
                    className={`p-2.5 rounded-xl border text-center transition text-xs ${
                      seoTier === 'advanced' ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <p className="font-bold">Local Maps</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Edenvale & KZN</p>
                  </button>
                  <button
                    onClick={() => setSeoTier('aggressive')}
                    className={`p-2.5 rounded-xl border text-center transition text-xs ${
                      seoTier === 'aggressive' ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <p className="font-bold">Aggressive</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">National SA</p>
                  </button>
                </div>
              </div>

              {/* Extra Addons Toggles */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold text-slate-700 block">Optional Addons</label>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="font-bold text-slate-800">Professional Copywriting</span>
                    <span className="text-[11px] text-slate-500 block">We write high-converting sales text for you</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needsCopywriting}
                    onChange={(e) => setNeedsCopywriting(e.target.checked)}
                    className="w-4 h-4 accent-purple-700 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="font-bold text-slate-800">1 Year .co.za Domain & SSD Cloud Hosting</span>
                    <span className="text-[11px] text-slate-500 block">Includes SSL and professional email mailboxes</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needsHosting}
                    onChange={(e) => setNeedsHosting(e.target.checked)}
                    className="w-4 h-4 accent-purple-700 cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-purple-300">
                  Estimated Project Investment
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    R{calculatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs text-purple-200">ZAR</span>
                </div>
                <p className="text-xs text-purple-300 mt-1">
                  Estimated Turnaround: <strong className="text-white">{getEstimatedDays()}</strong>
                </p>
              </div>

              {/* Estimate Summary */}
              <div className="space-y-2 text-xs border-t border-purple-800/80 pt-4 text-purple-200">
                <div className="flex justify-between">
                  <span>Pages ({pageCount})</span>
                  <span className="text-white font-semibold">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>E-Commerce Engine</span>
                  <span className="text-white font-semibold">{needsEcommerce ? 'Yes (Full Setup)' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Optimization</span>
                  <span className="text-white font-semibold uppercase">{seoTier}</span>
                </div>
                <div className="flex justify-between">
                  <span>Copywriting Service</span>
                  <span className="text-white font-semibold">{needsCopywriting ? 'Yes' : 'Supplied by Client'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Domain & Fast Cloud Hosting</span>
                  <span className="text-white font-semibold">{needsHosting ? 'Included (1 Year)' : 'Client Hosted'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-4 rounded-full bg-white hover:bg-purple-50 text-purple-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Book This Project Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-purple-300 mt-2">
                  Free consultation • No obligation • 50/50 payment split
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 mt-20 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Common Questions About Our Pricing
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Contact Strip */}
      <section className="mt-16">
        <ContactPillStrip onOpenQuoteModal={onOpenQuoteModal} />
      </section>

    </div>
  );
};
