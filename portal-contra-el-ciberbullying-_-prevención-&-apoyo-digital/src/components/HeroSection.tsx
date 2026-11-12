import React from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  HeartHandshake, 
  FileText,
  Globe
} from 'lucide-react';

interface HeroSectionProps {
  onStartTest: () => void;
  onGoToProtocol: () => void;
  onOpenGoogleSitesKit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartTest,
  onGoToProtocol,
  onOpenGoogleSitesKit,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline and CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Espacio Seguro de Información & Protección Digital
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              El Ciberacoso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">no es una broma</span>. No estás solo/a.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Mensajes hirientes, burlas en grupos, fotos sin permiso o exclusión digital. 
              El ciberbullying deja marcas profundas, pero <strong>existen formas concretas de defenderse, guardar pruebas y recibir ayuda legal y psicológica confidencial</strong>.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onStartTest}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer"
              >
                <span>Hacer Test de Detección</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGoToProtocol}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Protocolo de Actuación</span>
              </button>
            </div>

            {/* Quick Google Sites Banner */}
            <div className="pt-2">
              <button
                onClick={onOpenGoogleSitesKit}
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4 text-indigo-600" />
                <span>¿Quieres este sitio web en tu Google Sites escolar? Haz clic aquí para ver la plantilla</span>
                <span className="text-indigo-900">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Statistics & Highlights Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Impacto del Ciberacoso</h3>
                  <p className="text-xs text-slate-500">Datos y realidades que debemos visibilizar</p>
                </div>
                <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                  Urgente
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm shrink-0">
                    1 de 3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Adolescentes afectados</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Ha experimentado acoso escolar o digital según informes de UNESCO y UNICEF.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm shrink-0">
                    24/7
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Sin descanso temporal</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      El acoso tradicional cesaba al volver a casa; el ciberacoso persigue a la víctima a su habitación.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm shrink-0">
                    85%
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">El poder de los testigos</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Los episodios de ciberacoso se detienen en menos de 10 segundos cuando un compañero dice "basta".
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom quote */}
              <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs italic text-slate-500">
                  "El silencio de los espectadores es el combustible del agresor. Romper el silencio salva vidas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
