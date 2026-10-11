import React, { useState } from 'react';
import { X, Monitor, Tablet, Smartphone, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenQuoteModal }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden max-h-[94vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded">
              {project.category} Case Study
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">{project.title}</h3>
            <p className="text-xs text-slate-400">Client: {project.clientLocation}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport switcher */}
            <div className="hidden sm:flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                  deviceView === 'desktop' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
                <span className="text-[10px]">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                  deviceView === 'tablet' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
                <span className="text-[10px]">Tablet</span>
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                  deviceView === 'mobile' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
                <span className="text-[10px]">Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Interactive Screen Preview Container */}
          <div className="bg-slate-100 rounded-2xl p-4 sm:p-6 flex items-center justify-center border border-slate-200">
            <div className={`transition-all duration-300 w-full ${
              deviceView === 'desktop' ? 'max-w-2xl' : deviceView === 'tablet' ? 'max-w-md' : 'max-w-xs'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-slate-800">
                
                {/* Browser bar */}
                <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-300">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 truncate">
                    {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.co.za
                  </span>
                  <div className="w-4" />
                </div>

                {/* Simulated Webpage Content */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
                      Live Production UI
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black">{project.desktopPreview.heroTitle}</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">{project.desktopPreview.heroSubtitle}</p>
                  </div>
                </div>

                {/* Subpage simulation */}
                <div className="p-4 bg-white text-slate-800 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-900">High-Converting Funnel</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Custom CTA triggers and lightning fast mobile checkout.</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <p className="font-bold text-purple-900">SEO & Core Web Vitals</p>
                    <p className="text-[11px] text-purple-700 mt-0.5">Ranked page 1 on Google for target South African searches.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Project Details and Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-base font-extrabold text-slate-900">Overview & Challenges Solved</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
              
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Technologies & Scope</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-800 rounded-lg border border-purple-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results / Metrics */}
            <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900">Key Business Impact</h5>
              <div className="space-y-2.5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-xl border border-purple-100 shadow-xs">
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">{m.label}</span>
                    <span className="text-lg font-black text-purple-700">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              Want a similar high-performance website for your company?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition flex items-center justify-center gap-2"
            >
              <span>Get a Custom Quote for This Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
