import React from 'react';
import { 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  FileText, 
  PhoneCall, 
  Globe, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

interface CyberNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSos: () => void;
  onOpenGoogleSitesKit: () => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSos,
  onOpenGoogleSitesKit,
}) => {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'que-es', label: '¿Qué es?' },
    { id: 'tipos', label: 'Tipos de Acoso' },
    { id: 'test', label: 'Test de Detección' },
    { id: 'protocolo', label: 'Qué Hacer' },
    { id: 'guias', label: 'Guía para Familias' },
    { id: 'ayuda', label: 'Líneas de Ayuda' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Emergency Alert Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            ¿Estás pasando por un momento difícil o sufriendo acoso? No estás solo/a.
          </span>
          <button
            onClick={onOpenSos}
            className="underline font-bold hover:text-red-100 cursor-pointer ml-3 shrink-0"
          >
            Obtener auxilio inmediato →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('inicio')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Cero<span className="text-blue-600">Ciberacoso</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                  Oficial
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Portal de Prevención, Detección & Convivencia Digital
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Google Sites Kit Button */}
            <button
              onClick={onOpenGoogleSitesKit}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-all shadow-xs active:scale-95"
              title="Incrustar o exportar este contenido a Google Sites"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>Plantilla Google Sites</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            </button>

            {/* Emergency SOS Button */}
            <button
              onClick={onOpenSos}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/25 transition-all active:scale-95"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>SOS Ayuda</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Sub-menu */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar py-2 border-t border-slate-100 space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
