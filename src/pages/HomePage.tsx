import React from 'react';
import { PageId } from '../types';
import { AGENCY_INFO, SERVICES_LIST, PORTFOLIO_PROJECTS, TESTIMONIALS } from '../data/agencyData';
import { HeroDevicesMockup } from '../components/HeroDevicesMockup';
import { ContactPillStrip } from '../components/ContactPillStrip';
import { 
  Star, 
  ArrowRight, 
  Monitor, 
  Rocket, 
  TrendingUp, 
  Search, 
  Megaphone, 
  Headset, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  MessageCircle,
  Code2,
  Sparkles,
  Layers
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal, onSelectProject }) => {
  return (
    <div className="w-full">
      
      {/* =========================================================================
          HERO SECTION (Recreating the attached flyer faithfully)
      ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50">
        
        {/* Curved purple backdrop wave on right side matching flyer */}
        <div className="absolute top-0 right-0 w-[55vw] h-[100%] bg-gradient-to-bl from-purple-600/15 via-indigo-500/10 to-transparent rounded-bl-[160px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Floating Badge matching flyer: "Trusted by 500+ Businesses Worldwide" */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-md shadow-purple-600/10 border border-purple-100 text-xs sm:text-sm font-bold text-slate-800">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex items-center justify-center">
                <Star className="w-3.5 h-3.5 fill-white" />
              </div>
              <span>Trusted by <span className="text-purple-700 font-extrabold">500+ Businesses</span> Worldwide</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography, Value Pills & Main CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Handwritten script line matching flyer: "Need A Professional" */}
              <div className="relative">
                <span className="font-script text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-700 tracking-wide block transform -rotate-1">
                  Need A Professional
                </span>
                
                {/* Big bold headline: "WEBSITE FOR YOUR BUSINESS" */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mt-1 text-slate-900">
                  <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600 bg-clip-text text-transparent block">
                    WEBSITE
                  </span>
                  <span className="text-slate-900 block mt-1">
                    FOR YOUR BUSINESS
                  </span>
                </h1>
              </div>

              {/* Subheading from flyer */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                We design modern, responsive and result-driven websites that help your business grow online.
              </p>

              {/* 3 Core Value Pills matching flyer layout:
                  [Modern Design] [High Performance] [Better Results] */}
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
                
                {/* Pill 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/25">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                      Modern
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-600 block leading-tight">
                      Design
                    </span>
                  </div>
                </div>

                {/* Pill 2 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/25">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                      High
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-600 block leading-tight">
                      Performance
                    </span>
                  </div>
                </div>

                {/* Pill 3 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-800 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/25">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                      Better
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-600 block leading-tight">
                      Results
                    </span>
                  </div>
                </div>

              </div>

              {/* Main CTA button matching flyer: "LET'S BUILD YOUR WEBSITE >" */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="group relative inline-flex items-center justify-between sm:justify-start gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-purple-700/30 hover:shadow-purple-700/50 transition transform hover:-translate-y-0.5"
                >
                  <span>LET'S BUILD YOUR WEBSITE</span>
                  <div className="w-8 h-8 rounded-full bg-white text-purple-800 flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-4 rounded-full bg-white hover:bg-purple-50 text-purple-900 font-extrabold text-sm border-2 border-purple-200 transition text-center shadow-sm"
                >
                  View Packages from R3,499
                </button>
              </div>

              {/* Location trust tagline */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[9px] font-bold">JHB</div>
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-bold">KZN</div>
                </div>
                <span>Serving Edenvale (1609), Estcourt (KZN) and all 9 South African Provinces</span>
              </div>

            </div>

            {/* Right Column: 3D perspective Multi-device Mockup from flyer */}
            <div className="lg:col-span-6">
              <HeroDevicesMockup />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION (Faithfully recreating "• OUR SERVICES • Everything You Need to Succeed Online")
      ========================================================================= */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching flyer */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span>OUR SERVICES</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Everything You Need to <span className="text-purple-700">Succeed</span> Online
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From high-converting web interfaces to search visibility and maintenance, we take care of your digital presence.
            </p>
          </div>

          {/* 4 Cards matching flyer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Website Design (Purple Icon) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-purple-900/5 border border-purple-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30 group-hover:scale-110 transition-transform">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-wide">
                    WEBSITE DESIGN
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Stunning, modern & responsive designs tailored to your brand.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-extrabold text-purple-700 group-hover:text-purple-900 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-bold text-slate-400">From R3,499</span>
              </div>
            </div>

            {/* Card 2: SEO Optimization (Cyan/Blue Icon) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-blue-900/5 border border-blue-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-wide">
                    SEO OPTIMIZATION
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Rank higher on Google and get more organic traffic.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-extrabold text-blue-700 group-hover:text-blue-900 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-bold text-slate-400">Edenvale & SA</span>
              </div>
            </div>

            {/* Card 3: Digital Marketing (Pink/Magenta Icon) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-pink-900/5 border border-pink-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-500 text-white flex items-center justify-center shadow-md shadow-pink-600/30 group-hover:scale-110 transition-transform">
                  <Megaphone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-wide">
                    DIGITAL MARKETING
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Boost your brand with targeted marketing strategies.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-extrabold text-pink-700 group-hover:text-pink-900 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-bold text-slate-400">Meta & Google</span>
              </div>
            </div>

            {/* Card 4: Ongoing Support (Amber/Orange Icon) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-amber-900/5 border border-amber-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-600/30 group-hover:scale-110 transition-transform">
                  <Headset className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-wide">
                    ONGOING SUPPORT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    We're here to support you at every step of your growth.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-extrabold text-amber-700 group-hover:text-amber-900 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] font-bold text-slate-400">24/7 Backups</span>
              </div>
            </div>

          </div>

          {/* Quick link to all services */}
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-6 py-2.5 rounded-full transition"
            >
              <span>Explore All Capabilities (E-Commerce, Branding & Web Apps)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          DARK FEATURE BANNER (Faithfully recreating "Design That Speaks. Results That Matter.")
      ========================================================================= */}
      <section className="py-16 bg-gradient-to-b from-slate-950 via-[#0d0f36] to-slate-950 text-white relative overflow-hidden">
        
        {/* Glowing circular orb behind graphic matching flyer */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left copy & CTA button */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5" /> High Performance Digital Experiences
              </div>

              <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                Design That <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">Speaks.</span> <br />
                Results That <span className="text-purple-400">Matter.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                We don't just build websites, we create powerful digital experiences that convert visitors into customers.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="group inline-flex items-center justify-between sm:justify-start gap-4 px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-purple-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition"
                >
                  <span>GET A FREE QUOTE</span>
                  <div className="w-7 h-7 rounded-full bg-purple-700 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <a
                  href={AGENCY_INFO.phoneCall}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-purple-400" />
                  <span>Call {AGENCY_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <p className="text-2xl font-black text-purple-400">99.8%</p>
                  <p className="text-slate-400 text-[11px]">Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-slate-400 text-[11px]">Mobile Optimized</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-indigo-400">&lt; 1s</p>
                  <p className="text-slate-400 text-[11px]">Average Load Time</p>
                </div>
              </div>

            </div>

            {/* Right illustration workspace matching flyer:
                Monitor with UI wireframe layers, floating paper airplane, code tag </>, typography symbol T=, plant */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              <div className="relative w-full max-w-lg bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-950">
                
                {/* Simulated Wireframe Screen */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-purple-900/40 space-y-3">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-300">flamingo-engine.app</span>
                  </div>

                  {/* Layout grid illustration from flyer */}
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 bg-purple-900/30 h-16 rounded-xl border border-purple-500/20 p-2 flex flex-col justify-between">
                      <div className="h-2 w-20 bg-purple-400/40 rounded" />
                      <div className="h-4 w-36 bg-purple-300/30 rounded" />
                    </div>
                    <div className="col-span-4 bg-indigo-900/30 h-16 rounded-xl border border-indigo-500/20 p-2 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-purple-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-900 h-12 rounded-lg border border-slate-800 p-2 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-purple-600/40 flex items-center justify-center text-[10px] font-bold">T=</div>
                      <div className="h-1.5 w-10 bg-slate-700 rounded" />
                    </div>
                    <div className="bg-slate-900 h-12 rounded-lg border border-slate-800 p-2 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-indigo-600/40 flex items-center justify-center text-[10px] font-bold">⚡</div>
                      <div className="h-1.5 w-10 bg-slate-700 rounded" />
                    </div>
                    <div className="bg-slate-900 h-12 rounded-lg border border-slate-800 p-2 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-emerald-600/40 flex items-center justify-center text-[10px] font-bold">✓</div>
                      <div className="h-1.5 w-10 bg-slate-700 rounded" />
                    </div>
                  </div>

                </div>

                {/* Floating Badge 1: Code Tag `</>` from flyer */}
                <div className="absolute -bottom-4 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-purple-400/30">
                  <Code2 className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold">&lt;/&gt; Clean Code</span>
                </div>

                {/* Floating Badge 2: UI Asset */}
                <div className="absolute -top-3 -left-3 bg-white text-slate-900 px-3 py-1.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>South Africa Ready</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SIGNATURE BOTTOM PILL CONTACT STRIP (Matching the flyer exactly!)
      ========================================================================= */}
      <section className="py-12 bg-white relative -mt-6 z-20">
        <ContactPillStrip onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* =========================================================================
          FEATURED PORTFOLIO SNAPSHOT
      ========================================================================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-1">
                Recent Case Studies
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Work That Drives Measurable Revenue
              </h2>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                onClick={() => onSelectProject(item.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{item.clientLocation}</p>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-purple-700 transition mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-purple-700">{item.metrics[0].value} {item.metrics[0].label}</span>
                    <span className="text-slate-400 group-hover:text-purple-700 font-semibold flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CLIENT REVIEWS SECTION
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700">Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Trusted Across Gauteng, KZN & Nationwide
            </h2>
            <p className="text-slate-600 text-sm">
              Read how our websites empower businesses to convert more leads every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-purple-50/40 p-6 rounded-3xl border border-purple-100 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-purple-100/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-purple-200"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{t.name}</h3>
                    <p className="text-[11px] text-slate-500">{t.role}, {t.company}</p>
                    <p className="text-[10px] text-purple-700 font-semibold">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM CALL TO ACTION
      ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-purple-200 uppercase tracking-widest">
            Ready to Take Your Business to the Next Level?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black">
            Let's Build a Website That Actually Sells.
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Contact our branches in Edenvale or Estcourt today. Get a transparent quote and launch within days.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-purple-50 text-purple-900 font-black text-sm uppercase tracking-wider shadow-xl transition"
            >
              Get Free Instant Quote
            </button>
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us: 083 337 4954</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
