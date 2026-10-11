import React, { useState } from 'react';
import { Smartphone, Laptop, Monitor, Sparkles, ShoppingBag, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export const HeroDevicesMockup: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'furniture' | 'agency' | 'property'>('furniture');

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      
      {/* Background glowing purple curve backdrop from flyer */}
      <div className="absolute -top-10 -right-12 w-[120%] h-[120%] bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-transparent rounded-[4rem] filter blur-3xl -z-10 pointer-events-none" />
      
      {/* Decorative dot matrix pattern matching flyer */}
      <div className="absolute top-2 right-12 grid grid-cols-6 gap-2 opacity-30 pointer-events-none z-0">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-700" />
        ))}
      </div>

      {/* Interactive preview switch tab */}
      <div className="flex items-center justify-center lg:justify-end gap-2 mb-4 relative z-20">
        <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-purple-600" /> Live Preview:
        </span>
        <div className="inline-flex p-1 bg-white/90 backdrop-blur-md rounded-full border border-purple-200 shadow-sm text-xs">
          <button
            onClick={() => setActiveTheme('furniture')}
            className={`px-3 py-1 rounded-full font-medium transition ${
              activeTheme === 'furniture'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            E-Commerce
          </button>
          <button
            onClick={() => setActiveTheme('agency')}
            className={`px-3 py-1 rounded-full font-medium transition ${
              activeTheme === 'agency'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            Corporate
          </button>
          <button
            onClick={() => setActiveTheme('property')}
            className={`px-3 py-1 rounded-full font-medium transition ${
              activeTheme === 'property'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            Real Estate
          </button>
        </div>
      </div>

      {/* Main Composition Container */}
      <div className="relative pt-2 pb-6 px-2 sm:px-6">
        
        {/* Large Desktop iMac Monitor */}
        <div className="relative mx-auto max-w-lg lg:max-w-none ml-auto w-full lg:w-[94%] bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-purple-900/25 border-4 border-slate-200">
          
          {/* Monitor Screen Frame */}
          <div className="relative bg-white rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9.5] border border-slate-100 flex flex-col">
            
            {/* Top Browser Bar */}
            <div className="bg-slate-100/90 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-white px-3 py-0.5 rounded-md text-[10px] text-slate-500 font-mono border border-slate-200/80 flex items-center gap-1">
                <span className="text-emerald-600">https://</span>
                {activeTheme === 'furniture' && 'geoko-furniture.co.za'}
                {activeTheme === 'agency' && 'apex-digital.co.za'}
                {activeTheme === 'property' && 'horizon-properties.co.za'}
              </div>
              <div className="w-10" />
            </div>

            {/* Inner Web Page Content (Matches the "Modern Furniture For Your Home" screen from flyer) */}
            {activeTheme === 'furniture' && (
              <div className="relative flex-1 bg-gradient-to-b from-stone-50 to-white flex flex-col overflow-hidden">
                {/* Micro Header */}
                <div className="px-4 py-2 flex items-center justify-between border-b border-stone-100 text-[10px]">
                  <span className="font-extrabold tracking-widest text-slate-900">GEOKO</span>
                  <div className="hidden sm:flex items-center gap-3 text-slate-600 text-[9px] font-medium">
                    <span className="text-purple-700 font-semibold">Home</span>
                    <span>Shop</span>
                    <span>Products</span>
                    <span>Blog</span>
                    <span>Contact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-3 h-3 text-slate-700" />
                    <span className="bg-purple-100 text-purple-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold">ZAR</span>
                  </div>
                </div>

                {/* Hero Showcase inside Desktop */}
                <div className="p-4 sm:p-6 grid grid-cols-12 gap-3 items-center flex-1">
                  <div className="col-span-7 space-y-2">
                    <span className="inline-block text-[9px] uppercase tracking-wider font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      Spring Collection
                    </span>
                    <h3 className="text-base sm:text-2xl font-black text-slate-900 leading-tight">
                      Modern Furniture <br />
                      <span className="text-purple-700">For Your Home</span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2">
                      Handcrafted Scandinavian living room pieces. Made with sustainable materials and national delivery across SA.
                    </p>
                    <div className="pt-1 flex items-center gap-2">
                      <button className="bg-purple-700 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-purple-800 flex items-center gap-1">
                        SHOP NOW <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-[10px] text-slate-500 hidden sm:inline">From R3,499</span>
                    </div>
                  </div>

                  {/* Armchair visual matching flyer image */}
                  <div className="col-span-5 relative flex justify-center items-center">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-purple-100/70 to-indigo-50 p-2 flex items-center justify-center shadow-inner">
                      <img 
                        src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80" 
                        alt="Modern Scandinavian Armchair" 
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTheme === 'agency' && (
              <div className="relative flex-1 bg-slate-950 text-white flex flex-col overflow-hidden p-5">
                <div className="flex items-center justify-between text-[10px] border-b border-slate-800 pb-2">
                  <span className="font-bold tracking-wider text-purple-400">APEX DIGITAL</span>
                  <span className="text-emerald-400 font-mono text-[9px]">● LIVE DASHBOARD</span>
                </div>
                <div className="mt-4 space-y-2">
                  <span className="text-xs text-purple-300 font-medium">Enterprise Web Systems</span>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    We Engineer Next-Gen <br />
                    <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Digital Commerce</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-[10px]">
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                      <p className="text-slate-400">Conversion</p>
                      <p className="text-sm font-bold text-white">+184%</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                      <p className="text-slate-400">Page Speed</p>
                      <p className="text-sm font-bold text-emerald-400">0.6s</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded">
                      <p className="text-slate-400">SEO Rank</p>
                      <p className="text-sm font-bold text-purple-400">#1 Local</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTheme === 'property' && (
              <div className="relative flex-1 bg-slate-50 flex flex-col overflow-hidden p-4">
                <div className="flex items-center justify-between text-[10px] border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-900">HORIZON PROPERTIES</span>
                  <span className="text-purple-700 font-medium">Midlands & Edenvale</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 flex-1 items-center">
                  <div>
                    <h3 className="text-sm sm:text-lg font-extrabold text-slate-900">Luxury Estate Living</h3>
                    <p className="text-[10px] text-slate-500 mt-1">Exclusive properties across Gauteng and KwaZulu-Natal.</p>
                    <div className="mt-2 inline-flex items-center gap-1 bg-purple-700 text-white text-[10px] px-2.5 py-1 rounded">
                      Explore Listings
                    </div>
                  </div>
                  <div className="h-24 sm:h-32 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" 
                      alt="Luxury property" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Desktop Stand */}
          <div className="w-20 sm:w-28 h-4 bg-slate-300 mx-auto rounded-b-md shadow-md mt-1" />
          <div className="w-32 sm:w-44 h-1.5 bg-slate-400 mx-auto rounded-full shadow-sm" />
        </div>

        {/* Angled Laptop (MacBook style from flyer) */}
        <div className="absolute -bottom-2 -left-2 sm:bottom-0 sm:-left-6 w-56 sm:w-72 md:w-80 z-20 transition-transform duration-500 hover:scale-[1.02]">
          <div className="bg-slate-800 rounded-xl p-2 shadow-2xl shadow-purple-950/40 border border-slate-700">
            {/* Screen */}
            <div className="bg-slate-950 rounded-lg p-3 text-white overflow-hidden aspect-[16/10] border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] text-slate-400">
                <span className="font-semibold text-purple-400">Flamingo Lab</span>
                <span className="text-[8px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">Vite + React</span>
              </div>
              <div className="my-auto space-y-1">
                <span className="text-[9px] text-purple-300 font-mono">We Create Digital</span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Experiences That Convert.
                </h4>
                <div className="flex items-center gap-1 text-[8px] text-slate-400 pt-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Custom Code & SEO Ready</span>
                </div>
              </div>
              <div className="flex gap-1 pt-1">
                <div className="h-1 flex-1 bg-purple-600 rounded-full" />
                <div className="h-1 w-6 bg-indigo-500 rounded-full" />
                <div className="h-1 w-3 bg-pink-500 rounded-full" />
              </div>
            </div>
            {/* Base */}
            <div className="w-full h-2 bg-slate-700 rounded-b-md mt-1 flex justify-center items-center">
              <div className="w-10 h-0.5 bg-slate-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Smartphone Standing on Right (from flyer: "Find Your Dream Place") */}
        <div className="absolute bottom-2 -right-1 sm:bottom-4 sm:right-2 w-28 sm:w-36 md:w-40 z-30 transition-transform duration-500 hover:scale-105">
          <div className="bg-slate-900 rounded-[1.8rem] p-1.5 sm:p-2 shadow-2xl shadow-purple-950/50 border-2 border-slate-700">
            {/* Phone Screen */}
            <div className="bg-white rounded-[1.4rem] overflow-hidden aspect-[9/18.5] flex flex-col text-[8px]">
              {/* Dynamic Island */}
              <div className="bg-slate-900 h-3 w-12 mx-auto rounded-b-full mb-1" />
              
              <div className="px-2 pt-1 pb-1">
                <p className="text-[7px] text-purple-700 font-bold uppercase">Mobile App UI</p>
                <p className="text-[9px] font-extrabold text-slate-900 leading-tight">Find Your Dream Place</p>
              </div>

              {/* Mini cards */}
              <div className="px-2 space-y-1.5 flex-1">
                <div className="bg-purple-50 p-1.5 rounded-lg border border-purple-100 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-purple-700 text-white flex items-center justify-center shrink-0 text-[8px]">
                    ★
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-800 text-[8px] truncate">Edenvale Luxury</p>
                    <p className="text-[7px] text-slate-500">From R1.85m</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80" 
                    alt="Property" 
                    className="w-full h-10 object-cover"
                  />
                  <div className="p-1 bg-white">
                    <p className="font-bold text-slate-800 text-[7px]">Midlands Retreat</p>
                    <p className="text-[6px] text-emerald-600 font-semibold">Available Now</p>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="p-1 bg-slate-100 border-t border-slate-200 text-center">
                <span className="text-[7px] font-bold text-purple-800">100% Responsive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative potted plant leaf accent (visible in flyer beside phone) */}
        <div className="absolute -bottom-4 right-12 sm:right-28 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

      </div>
    </div>
  );
};
