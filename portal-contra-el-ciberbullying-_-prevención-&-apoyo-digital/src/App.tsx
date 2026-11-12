/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CyberNavbar } from './components/CyberNavbar';
import { HeroSection } from './components/HeroSection';
import { WhatIsSection } from './components/WhatIsSection';
import { TypesSection } from './components/TypesSection';
import { DetectionTestSection } from './components/DetectionTestSection';
import { ActionProtocolSection } from './components/ActionProtocolSection';
import { GuidesByRoleSection } from './components/GuidesByRoleSection';
import { HelplinesSection } from './components/HelplinesSection';
import { SosModal } from './components/SosModal';
import { GoogleSitesKitModal } from './components/GoogleSitesKitModal';
import { 
  ShieldCheck, 
  Heart, 
  Globe, 
  AlertCircle, 
  PhoneCall, 
  Lock 
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isGoogleSitesKitOpen, setIsGoogleSitesKitOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <CyberNavbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSos={() => setIsSosOpen(true)}
        onOpenGoogleSitesKit={() => setIsGoogleSitesKitOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onStartTest={() => scrollToSection('test')}
          onGoToProtocol={() => scrollToSection('protocolo')}
          onOpenGoogleSitesKit={() => setIsGoogleSitesKitOpen(true)}
        />

        {/* 2. ¿Qué es el Ciberbullying? */}
        <WhatIsSection />

        {/* 3. Tipos de Ciberacoso */}
        <TypesSection />

        {/* 4. Test de Autoevaluación y Detección */}
        <DetectionTestSection
          onGoToHelplines={() => scrollToSection('ayuda')}
        />

        {/* 5. Protocolo de Actuación: Qué hacer paso a paso */}
        <ActionProtocolSection />

        {/* 6. Guías por Rol: Jóvenes, Familias y Docentes */}
        <GuidesByRoleSection />

        {/* 7. Directorio de Líneas Telefónicas y Chat de Ayuda */}
        <HelplinesSection />
      </main>

      {/* Emergency Floating SOS Bubble on Bottom-Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsGoogleSitesKitOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-indigo-700 font-bold text-xs shadow-lg border border-indigo-200 hover:bg-indigo-50 transition-all cursor-pointer backdrop-blur-xs"
        >
          <Globe className="w-3.5 h-3.5 text-indigo-600" />
          <span>Plantilla para Google Sites</span>
        </button>

        <button
          onClick={() => setIsSosOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        >
          <AlertCircle className="w-4 h-4 animate-bounce" />
          <span>SOS ¿Necesitas Ayuda?</span>
        </button>
      </div>

      {/* Modals */}
      <SosModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
        onGoToHelplines={() => scrollToSection('ayuda')}
      />

      <GoogleSitesKitModal
        isOpen={isGoogleSitesKitOpen}
        onClose={() => setIsGoogleSitesKitOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="font-extrabold text-sm tracking-tight">Cero Ciberacoso</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Iniciativa educativa y preventiva contra el ciberbullying y la violencia digital en entornos escolares y redes sociales.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Secciones Rápidas
              </span>
              <ul className="space-y-1.5 text-[11px]">
                <li><button onClick={() => scrollToSection('que-es')} className="hover:text-white cursor-pointer">¿Qué es el Ciberacoso?</button></li>
                <li><button onClick={() => scrollToSection('tipos')} className="hover:text-white cursor-pointer">Los 6 Tipos Principales</button></li>
                <li><button onClick={() => scrollToSection('test')} className="hover:text-white cursor-pointer">Test de Autoevaluación</button></li>
                <li><button onClick={() => scrollToSection('protocolo')} className="hover:text-white cursor-pointer">Protocolo de Emergencia</button></li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Líneas Gratuitas 24h
              </span>
              <p className="text-[11px] text-slate-400 mb-2">
                Argentina: <strong>Línea 102</strong><br />
                México: <strong>55 5533 5533</strong><br />
                España: <strong>017</strong> (INCIBE)<br />
                Colombia: <strong>Línea 141</strong><br />
                Chile: <strong>1515</strong> (Línea Libre)<br />
                Perú: <strong>Línea 100</strong>
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Google Sites Kit
              </span>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                Este sitio está 100% optimizado para ser incrustado en cualquier Google Site escolar o institucional mediante URL o código.
              </p>
              <button
                onClick={() => setIsGoogleSitesKitOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-all cursor-pointer"
              >
                Abrir Kit para Google Sites →
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Portal Contra el Ciberbullying. Creado con fines educativos y de prevención.</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-slate-400">
                <Lock className="w-3.5 h-3.5" />
                Navegación 100% Segura y Confidencial
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
