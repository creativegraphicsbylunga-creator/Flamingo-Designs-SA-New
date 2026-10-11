import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { ArrowRight, Sparkles, ExternalLink, Filter, MapPin } from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (projectId: string) => void;
  onOpenQuoteModal: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Corporate', 'Real Estate', 'Healthcare', 'Hospitality'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full pb-20">
      
      {/* Portfolio Header */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-purple-100/40 via-white to-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Selected <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">Client Work</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore recent projects engineered for brands across Gauteng, KwaZulu-Natal, and across South Africa. Click any project for an interactive device preview.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                  activeFilter === cat
                    ? 'bg-purple-700 text-white shadow-md shadow-purple-700/20'
                    : 'bg-white hover:bg-purple-50 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-purple-900/5 border border-purple-100/80 hover:shadow-2xl hover:border-purple-300 transition duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-purple-600" />
                  <span>{project.clientLocation}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-purple-700 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold uppercase">Impact</span>
                    <span className="text-base font-black text-purple-700">
                      {project.metrics[0].value} {project.metrics[0].label}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-700 group-hover:text-purple-700 flex items-center gap-1">
                    <span>Inspect UI</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="bg-purple-50 p-8 sm:p-12 rounded-3xl border border-purple-100 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Have a project in mind for your brand?
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Whether you need a 4-page local trade showcase or an enterprise e-commerce portal, we build websites that perform.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition"
            >
              Start Your Project Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
