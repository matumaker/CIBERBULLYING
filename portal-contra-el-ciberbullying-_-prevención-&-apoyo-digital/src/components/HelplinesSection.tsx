import React, { useState } from 'react';
import { 
  HELPLINES, 
  Helpline 
} from '../data/cyberbullyingData';
import { 
  PhoneCall, 
  MessageSquare, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export const HelplinesSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Argentina');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const currentHelp = HELPLINES.find((h) => h.country === selectedCountry) || HELPLINES[0];

  const handleCopyPhone = async (num: string) => {
    await navigator.clipboard.writeText(num);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="ayuda" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Atención Inmediata & Confidencial
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Directorio de Líneas de Ayuda por País
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Todas estas líneas telefónicas y canales de chat son <strong>oficiales, 100% gratuitos y atienden las 24 horas del día</strong> con psicólogos y abogados especializados.
          </p>
        </div>

        {/* Country Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {HELPLINES.map((h) => {
            const isSelected = h.country === selectedCountry;
            return (
              <button
                key={h.country}
                onClick={() => setSelectedCountry(h.country)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-2 ring-blue-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span className="text-base">{h.flag}</span>
                <span>{h.country}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Helpline Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentHelp.flag}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Canales de Ayuda en {currentHelp.country}
                </h3>
                <p className="text-xs text-slate-500">{currentHelp.organization}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentHelp.description}
            </p>

            {/* Direct Phone Highlight */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
                  Llamada Telefónica Gratuita
                </span>
                <span className="text-lg sm:text-xl font-black text-blue-950 font-mono">
                  {currentHelp.phone}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyPhone(currentHelp.phone)}
                  className="px-3 py-1.5 bg-white border border-blue-200 hover:bg-blue-100/50 rounded-lg text-xs font-semibold text-blue-700 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copiado' : 'Copiar número'}</span>
                </button>
              </div>
            </div>

            {/* Chat button if available */}
            {currentHelp.chat && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span><strong>Canal de Chat / WhatsApp:</strong> {currentHelp.chat}</span>
                </div>
              </div>
            )}

            <div className="pt-2">
              <a
                href={currentHelp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 underline"
              >
                <span>Visitar sitio web oficial ({currentHelp.organization})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Tips: What to expect when calling */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              ¿Qué pasa cuando llamas a estas líneas?
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No te juzgarán:</strong> Te atenderá un profesional capacitado para contenerte con respeto y empatía.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Es confidencial y anónimo:</strong> No es obligatorio que des tu nombre completo si no te sientes cómodo/a.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Asesoramiento legal:</strong> Te explicarán cómo denunciar formalmente si hay delitos cibernéticos o amenazas.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
