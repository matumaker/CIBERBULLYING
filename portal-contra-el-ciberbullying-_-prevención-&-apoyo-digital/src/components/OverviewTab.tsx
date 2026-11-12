import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  HelpCircle,
  FileSpreadsheet,
  Workflow,
  ShieldCheck,
  MousePointerClick,
  Smartphone
} from 'lucide-react';
import { ActiveTab } from './Header';

interface OverviewTabProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 py-6 max-w-6xl mx-auto">
      {/* Hero Answer Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white p-8 sm:p-10 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Respuesta Clara & Directa a tu Pregunta
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            ¿Qué puedo hacer por ti y qué podemos lograr con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Google Sites</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Como ingeniero de software en Google AI Studio, puedo construir <strong>aplicaciones web completas, herramientas interactivas, bases de datos y sistemas a medida</strong>. 
            Y aunque <em>Google Sites no permite editar sus páginas por código directo desde una API externa</em>, 
            <strong>Google Sites tiene la función nativa de "Incrustar" (Embed)</strong>, lo cual nos permite llevar cualquier creación a tu sitio web en segundos.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('builder')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              <Code2 className="w-4 h-4" />
              Probar Generador de Widgets para Sites
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('simulator')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all active:scale-95"
            >
              <Layers className="w-4 h-4" />
              Ver Simulador de Google Sites en vivo
            </button>
          </div>
        </div>

        {/* Ambient glow decoration */}
        <div className="absolute right-0 top-0 -mt-16 -mr-16 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Comparison: Reality of Google Sites & The Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-sm bg-gradient-to-b from-amber-50/40 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              ⚠️
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">La limitación nativa de Google Sites</h3>
              <p className="text-xs text-slate-500">Lo que debes saber con total transparencia</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-amber-600 font-bold mt-0.5">✕</span>
              <span><strong>Sin API de edición directa:</strong> Google no ofrece una API REST para que un programa externo agregue texto, mueva bloques o cambie fuentes de tu Google Site automáticamente.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-amber-600 font-bold mt-0.5">✕</span>
              <span><strong>Herramientas básicas de serie:</strong> Google Sites solo trae texto, imágenes, botones sencillos y documentos de Google Drive. Carece de calculadoras, cuentas regresivas o dinamismo avanzado.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-sm bg-gradient-to-b from-emerald-50/40 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Nuestra Solución: La Magia de "Incrustar"</h3>
              <p className="text-xs text-emerald-600 font-medium">100% oficial y admitido por Google</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Opción A: Insertar Código HTML/JS:</strong> Generamos componentes a la medida (cotizadores, contadores, carruseles, FAQ) que pegas en 1 clic y funcionan al instante.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Opción B: Insertar Mediante URL:</strong> Construyo una aplicación web completa aquí (con backend, bases de datos, IA o Sheets) y la incrustas en tu página como un portal completo.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4 Superpowers for Google Sites */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            4 Grandes cosas que podemos crear para tu Google Sites
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Convierte un sitio estático en un portal interactivo y profesional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Widgets Autónomos</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Calculadoras de precios, WhatsApp en vivo, acordeones de FAQ, testimonios y barras de aviso con código HTML listo para copiar.
              </p>
            </div>
            <button
              onClick={() => onNavigate('builder')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-auto"
            >
              Explorar widgets <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Aplicaciones Embebidas</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Sistemas de reservas de citas, catálogos con filtros rápidos, buscadores de productos, formularios multi-paso y portales de clientes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('ideas')}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 mt-auto"
            >
              Ver ideas de apps <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Conexión con Google Sheets</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Herramientas que guardan información directamente en tus hojas de cálculo de Google o tableros que muestran datos actualizados en vivo.
              </p>
            </div>
            <button
              onClick={() => onNavigate('guide')}
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 mt-auto"
            >
              Aprender flujos <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Asistentes & IA</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Consultores con Gemini que responden preguntas frecuentes de tu empresa, guían a los clientes o generan cotizaciones personalizadas.
              </p>
            </div>
            <button
              onClick={() => onNavigate('ideas')}
              className="text-xs font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1 mt-auto"
            >
              Pedir un proyecto <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* What can I do in general? */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          Y en general, ¿qué puedo construir para ti en este entorno?
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Soy el motor de desarrollo de Google AI Studio. No solo respondo preguntas técnicas: 
          <strong>escribo, compilo y ejecuto código en tiempo real</strong>. Si me describes lo que imaginas, puedo programar:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Front-End Completo</span>
            <p className="text-xs text-slate-600">
              Interfaces modernas con React, Tailwind CSS, animaciones fluidas, diseño adaptado a móviles y sin fallas visuales.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Bases de Datos & Auth</span>
            <p className="text-xs text-slate-600">
              Persistencia real con Firebase Firestore, Cloud SQL (PostgreSQL), login de usuarios y seguridad mediante reglas.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">Google Workspace & IA</span>
            <p className="text-xs text-slate-600">
              Acceso a Google Drive, Sheets, Gmail, Calendar mediante OAuth de Workspace y modelos avanzados de Gemini AI.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Test Drive Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-blue-50 border border-blue-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
            <MousePointerClick className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">¿Tienes un Google Site abierto ahora mismo?</h4>
            <p className="text-xs text-slate-600">Ve a la pestaña "Generador de Widgets", copia un código en 5 segundos y pégalo en tu Google Site para ver cómo funciona.</p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('builder')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg whitespace-nowrap shadow-sm transition-all"
        >
          Generar mi primer widget →
        </button>
      </div>
    </div>
  );
};
