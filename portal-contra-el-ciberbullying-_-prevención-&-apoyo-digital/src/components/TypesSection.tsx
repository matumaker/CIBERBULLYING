import React, { useState } from 'react';
import { 
  CYBER_TYPES, 
  CyberType 
} from '../data/cyberbullyingData';
import { 
  MessageSquareWarning, 
  FileSearch, 
  UserX, 
  EyeOff, 
  ShieldAlert, 
  Users, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export const TypesSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<CyberType>(CYBER_TYPES[0]);
  const [copiedType, setCopiedType] = useState(false);

  // Helper icon selector
  const renderIcon = (id: string) => {
    switch (id) {
      case 'hostigamiento':
        return <MessageSquareWarning className="w-5 h-5 text-amber-600" />;
      case 'doxing':
        return <FileSearch className="w-5 h-5 text-red-600" />;
      case 'suplantacion':
        return <UserX className="w-5 h-5 text-indigo-600" />;
      case 'exclusion':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'ciberstalking':
        return <EyeOff className="w-5 h-5 text-purple-600" />;
      case 'sextorsion':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-slate-600" />;
    }
  };

  const handleCopySummary = async (type: CyberType) => {
    const text = `TIPO DE CIBERBULLYING: ${type.name}\n\nDescripción: ${type.fullDesc}\n\nEjemplo: ${type.example}\n\nQué hacer: ${type.solution}`;
    await navigator.clipboard.writeText(text);
    setCopiedType(true);
    setTimeout(() => setCopiedType(false), 2000);
  };

  return (
    <section id="tipos" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Clasificación & Modalidades
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Los 6 Tipos Principales de Ciberacoso
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            El ciberbullying no siempre se manifiesta como un insulto directo. Identificar la táctica exacta permite activar el protocolo legal y técnico correspondiente.
          </p>
        </div>

        {/* Layout: Grid on left / detail spotlight on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of 6 cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CYBER_TYPES.map((item) => {
              const isSelected = selectedType.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedType(item)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-white shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        {renderIcon(item.id)}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          item.severity === 'crítico'
                            ? 'bg-rose-100 text-rose-800'
                            : item.severity === 'grave'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {item.severity === 'crítico' ? 'Delito Grave' : item.severity}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>{isSelected ? 'Analizando en detalle' : 'Ver cómo defenderse'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Card Spotlight (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg sticky top-24 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  {renderIcon(selectedType.id)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Ficha Técnica
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{selectedType.name}</h3>
                </div>
              </div>

              <button
                onClick={() => handleCopySummary(selectedType)}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 transition-all"
                title="Copiar texto para usar en Google Sites"
              >
                {copiedType ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar texto</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                ¿En qué consiste?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedType.fullDesc}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <h4 className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                <span>💬</span> Ejemplo cotidiano en redes:
              </h4>
              <p className="text-xs text-amber-800 italic leading-relaxed">
                "{selectedType.example}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <h4 className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Cómo actuar frente a esto:
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {selectedType.solution}
              </p>
            </div>

            <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              💡 <em>¿Armando tu Google Sites?</em> Puedes incrustar esta tarjeta o copiar el texto directamente en una caja de contenido de 2 columnas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
