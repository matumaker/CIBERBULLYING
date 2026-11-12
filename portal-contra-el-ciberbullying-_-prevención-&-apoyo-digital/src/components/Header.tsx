import React from 'react';
import { Globe, Sparkles, Code2, LayoutTemplate, BookOpen, Lightbulb } from 'lucide-react';

export type ActiveTab = 'overview' | 'builder' | 'simulator' | 'guide' | 'ideas';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview' as ActiveTab, label: '¿Qué puedo hacer?', icon: Sparkles, badge: 'Clave' },
    { id: 'builder' as ActiveTab, label: 'Generador de Widgets', icon: Code2, badge: '6 Widgets' },
    { id: 'simulator' as ActiveTab, label: 'Simulador Google Sites', icon: LayoutTemplate, badge: 'En vivo' },
    { id: 'guide' as ActiveTab, label: 'Guía de Incrustación', icon: BookOpen },
    { id: 'ideas' as ActiveTab, label: 'Ideas & Proyectos', icon: Lightbulb },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Google Sites <span className="text-blue-600">Companion Studio</span>
                </h1>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  AI Studio Build
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Crea widgets interactivos, apps incrustables y potencia tu Google Sites
              </p>
            </div>
          </div>

          {/* Quick link badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              100% Compatible con Google Sites
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-2 border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
