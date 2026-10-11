/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, PortfolioProject } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PORTFOLIO_PROJECTS } from './data/agencyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [initialQuoteService, setInitialQuoteService] = useState<string>('web-design');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'services', 'portfolio', 'pricing', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId: string = 'web-design') => {
    setInitialQuoteService(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    const found = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setActiveModalProject(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-purple-700 selection:text-white">
      
      {/* Top Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenQuoteModalWithService={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={handleSelectProject}
            onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal('web-design')}
      />

      {/* Interactive Global Modals & Widgets */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={initialQuoteService}
      />

      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenQuoteModal={() => {
          setActiveModalProject(null);
          handleOpenQuoteModal('web-design');
        }}
      />

      <FloatingWhatsApp />

    </div>
  );
}
