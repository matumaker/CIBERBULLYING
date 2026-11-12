import React, { useState } from 'react';
import { 
  HelpCircle, 
  Clock, 
  Globe2, 
  UserX, 
  FileWarning, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';
import { MYTHS_REALITIES } from '../data/cyberbullyingData';

export const WhatIsSection: React.FC = () => {
  const [openMythIndex, setOpenMythIndex] = useState<number | null>(0);

  const toggleMyth = (idx: number) => {
    setOpenMythIndex(openMythIndex === idx ? null : idx);
  };

  const differences = [
    {
      feature: 'Espacio y Horario',
      traditional: 'Ocurre principalmente en el patio, aula o camino a casa en horario escolar.',
      cyber: 'Ocurre 24 horas al día, 7 días a la semana; no hay refugio seguro ni fines de semana.'
    },
    {
      feature: 'Audiencia / Alcance',
      traditional: 'Limitado a las personas presentes en el momento del hecho.',
      cyber: 'Masivo y viral: fotos o mensajes pueden compartirse con cientos o miles en segundos.'
    },
    {
      feature: 'Identidad del Agresor',
      traditional: 'La víctima sabe exactamente quién la agrede cara a cara.',
      cyber: 'Frecuentemente oculto tras perfiles falsos, cuentas anónimas o chats grupales.'
    },
    {
      feature: 'Permanencia del Daño',
      traditional: 'La agresión verbal queda en el recuerdo inmediato.',
      cyber: 'Permanente: capturas, fotos y videos pueden perdurar en internet indefinidamente.'
    },
    {
      feature: 'Empatía y Freno',
      traditional: 'El agresor ve el llanto o dolor de la víctima y a veces se detiene.',
      cyber: 'La pantalla deshumaniza: el agresor no ve el dolor y suele escalar la violencia.'
    }
  ];

  return (
    <section id="que-es" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Fundamentos & Definición
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            ¿Qué es realmente el Ciberbullying?
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            El ciberacoso es el <strong>uso deliberado y reiterado</strong> de tecnologías de la información y la comunicación (redes sociales, mensajería, videojuegos en línea) para 
            <strong> humillar, amenazar, avergonzar o excluir</strong> a otra persona.
          </p>
        </div>

        {/* 3 Core Characteristics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
              🎯
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Intencionalidad</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No es un malentendido puntual o una discusión aislada. Existe la voluntad deliberada de infligir daño psicológico, vergüenza o aislamiento.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-3">
              🔁
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Reiteración en el tiempo</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Las agresiones son constantes o un solo contenido agresivo se reproduce y comparte miles de veces, manteniendo viva la agresión a diario.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold mb-3">
              ⚖️
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Desequilibrio de poder</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La víctima se siente en inferioridad de condiciones: frente a un grupo numeroso, ante la difusión de secretos o por el anonimato del atacante.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Diferencias clave: Bullying Tradicional vs. Ciberbullying
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ¿Por qué el ciberacoso suele ser más destructivo para la salud mental?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-3 px-3 font-bold text-slate-700 bg-slate-100/80 rounded-l-lg w-1/4">
                    Aspecto
                  </th>
                  <th className="py-3 px-3 font-bold text-slate-700 bg-slate-100/80 w-3/8">
                    Acoso Tradicional (Escolar)
                  </th>
                  <th className="py-3 px-3 font-bold text-blue-700 bg-blue-50/80 rounded-r-lg w-3/8">
                    Ciberbullying (Digital)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {differences.map((diff, i) => (
                  <tr key={i} className="hover:bg-white transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-slate-900 align-top">
                      {diff.feature}
                    </td>
                    <td className="py-3.5 px-3 text-slate-600 align-top">
                      {diff.traditional}
                    </td>
                    <td className="py-3.5 px-3 text-blue-900 bg-blue-50/30 font-medium align-top">
                      {diff.cyber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Myths vs Realities Accordion */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Mitos vs. Realidades sobre el Ciberacoso
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MYTHS_REALITIES.map((item, index) => {
              const isOpen = openMythIndex === index;
              return (
                <div 
                  key={index}
                  className={`rounded-xl border transition-all p-5 ${
                    isOpen 
                      ? 'border-indigo-300 bg-indigo-50/40 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div 
                    onClick={() => toggleMyth(index)}
                    className="flex items-start justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <h4 className="text-sm font-bold text-slate-900">{item.myth}</h4>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-indigo-100 flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <p><strong>Realidad:</strong> {item.reality}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
