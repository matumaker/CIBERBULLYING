import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Copy, 
  Check, 
  Layers, 
  FileText, 
  Code2, 
  ExternalLink, 
  ArrowRight,
  Monitor,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import { 
  GOOGLE_SITES_PAGES, 
  generateSosPanicWidget, 
  generateInteractiveTestWidget 
} from '../data/googleSitesBlueprint';

interface GoogleSitesKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesKitModal: React.FC<GoogleSitesKitModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'embed-all' | 'pages-blueprint' | 'widgets' | 'simulator'>('embed-all');
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedPageText, setCopiedPageText] = useState(false);
  const [copiedWidgetId, setCopiedWidgetId] = useState<string | null>(null);

  if (!isOpen) return null;

  const appShareUrl = 'https://ais-pre-yjwgsjofoslnpsozec6nvx-86754470281.us-east1.run.app';

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(appShareUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const currentPage = GOOGLE_SITES_PAGES[selectedPageIndex];

  const handleCopyPageContent = async () => {
    const fullText = `PÁGINA: ${currentPage.title}
TÍTULO: ${currentPage.sampleContent.heading}
SUBTÍTULO: ${currentPage.sampleContent.subheading}

CONTENIDO PARA COPIAR:
${currentPage.sampleContent.bodyText}

CONSEJO DE DISEÑO EN GOOGLE SITES:
${currentPage.sampleContent.highlightTip}`;

    await navigator.clipboard.writeText(fullText);
    setCopiedPageText(true);
    setTimeout(() => setCopiedPageText(false), 2500);
  };

  const handleCopyWidget = async (widgetId: string, code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedWidgetId(widgetId);
    setTimeout(() => setCopiedWidgetId(null), 2500);
  };

  const sosWidgetCode = generateSosPanicWidget();
  const testWidgetCode = generateInteractiveTestWidget();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Kit de Construcción para Google Sites
                </h3>
                <span className="text-[10px] font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full">
                  Ciberbullying
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Todo lo necesario para tener este sitio web completo funcionando en sites.google.com
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('embed-all')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'embed-all'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Opción 1: Incrustar el Sitio Completo (1 Clic)</span>
          </button>

          <button
            onClick={() => setActiveTab('pages-blueprint')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'pages-blueprint'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Opción 2: Textos Página por Página (6 Páginas)</span>
          </button>

          <button
            onClick={() => setActiveTab('widgets')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'widgets'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Opción 3: Widgets HTML Listos</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'simulator'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Simulador Google Sites</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: EMBED THE ENTIRE WEBSITE VIA SHARED APP URL */}
          {activeTab === 'embed-all' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-7 shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">
                  Método Más Rápido y Potente
                </span>
                <h4 className="text-xl font-bold">
                  Incrusta todo este portal interactivo adentro de tu Google Sites
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed max-w-2xl">
                  Al usar la función nativa de Google Sites <strong>"Insertar mediante URL"</strong>, tus visitantes tendrán acceso al test interactivo, la selección de países para las líneas de ayuda y los protocolos con solo copiar este enlace:
                </p>

                <div className="mt-5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="font-mono text-xs sm:text-sm truncate select-all px-2 text-white font-medium">
                    {appShareUrl}
                  </div>
                  <button
                    onClick={handleCopyUrl}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                      copiedUrl ? 'bg-emerald-500 text-white' : 'bg-white text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="w-4 h-4" />
                        ¡URL Copiada!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar Enlace
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Step by step for Google Sites */}
              <div className="space-y-3">
                <h5 className="text-sm font-bold text-slate-800">
                  Pasos exactos en Google Sites:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-slate-600">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-blue-600 text-sm">Paso 1</span>
                    <p>Entra a <strong>sites.google.com</strong> y abre tu sitio web escolar o crea uno nuevo en blanco.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-blue-600 text-sm">Paso 2</span>
                    <p>En el panel derecho, haz clic en la pestaña <strong>"Insertar"</strong> y luego en <strong>"&lt;&gt; Incrustar"</strong>.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-blue-600 text-sm">Paso 3</span>
                    <p>Selecciona <strong>"Mediante URL"</strong>, pega el enlace copiado y selecciona <em>"Página entera"</em>.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-blue-600 text-sm">Paso 4</span>
                    <p>Haz clic en <strong>"Insertar"</strong> y luego en el botón azul <strong>"Publicar"</strong> arriba a la derecha.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PAGE BY PAGE BLUEPRINT WITH PRE-WRITTEN COPY */}
          {activeTab === 'pages-blueprint' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Estructura Sugerida de 6 Páginas para tu Google Sites
                  </h4>
                  <p className="text-xs text-slate-500">
                    Copia y pega los textos redactados directamente en los cuadros de texto de tu sitio.
                  </p>
                </div>

                <button
                  onClick={handleCopyPageContent}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  {copiedPageText ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPageText ? '¡Texto Copiado!' : 'Copiar Texto de esta Página'}</span>
                </button>
              </div>

              {/* Page Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {GOOGLE_SITES_PAGES.map((p, idx) => {
                  const isSelected = selectedPageIndex === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPageIndex(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 font-bold text-blue-800'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span className="text-[11px] block">{p.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Page Card Details */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Propósito de la página
                  </span>
                  <p className="text-xs text-slate-600 font-medium">{currentPage.purpose}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">
                    Bloques recomendados en Google Sites:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentPage.suggestedBlocks.map((b, i) => (
                      <span key={i} className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700">
                        • {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Contenido para pegar en Google Sites:
                  </span>
                  <h5 className="text-base font-bold text-slate-900">{currentPage.sampleContent.heading}</h5>
                  <h6 className="text-xs font-semibold text-slate-600">{currentPage.sampleContent.subheading}</h6>
                  <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed border-t border-slate-100 pt-3">
                    {currentPage.sampleContent.bodyText}
                  </p>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  💡 <strong>Tip para Google Sites:</strong> {currentPage.sampleContent.highlightTip}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STANDALONE WIDGETS */}
          {activeTab === 'widgets' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Widgets HTML Listos para "Insertar &gt; Código"
                </h4>
                <p className="text-xs text-slate-500">
                  Estos bloques de código son 100% compatibles con la caja de iframe de Google Sites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Widget 1: SOS Panic */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                        Botón SOS
                      </span>
                      <button
                        onClick={() => handleCopyWidget('sos', sosWidgetCode)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedWidgetId === 'sos' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Código</span>
                          </>
                        )}
                      </button>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Tarjeta SOS Primeros Auxilios</h5>
                    <p className="text-xs text-slate-500">
                      Un cuadro con los 3 pasos de calma y enlace a líneas de emergencia.
                    </p>
                  </div>

                  <pre className="p-3 bg-slate-900 text-slate-300 text-[11px] font-mono rounded-xl max-h-36 overflow-y-auto select-all">
                    {sosWidgetCode}
                  </pre>
                </div>

                {/* Widget 2: Interactive Test */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                        Test Interactivo
                      </span>
                      <button
                        onClick={() => handleCopyWidget('test', testWidgetCode)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedWidgetId === 'test' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Código</span>
                          </>
                        )}
                      </button>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Test de Autoevaluación en HTML</h5>
                    <p className="text-xs text-slate-500">
                      Cuestionario interactivo con cálculo automático de nivel de riesgo en JavaScript.
                    </p>
                  </div>

                  <pre className="p-3 bg-slate-900 text-slate-300 text-[11px] font-mono rounded-xl max-h-36 overflow-y-auto select-all">
                    {testWidgetCode}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between">
                <span>Simulando cómo queda este portal de ciberacoso incrustado en el editor de Google Sites:</span>
                <span className="font-bold">Vista Previa Realista</span>
              </div>

              <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-md bg-white">
                <div className="bg-slate-800 text-white px-4 py-2 flex items-center justify-between text-xs">
                  <span>sites.google.com/view/portal-contra-ciberbullying</span>
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                <div className="p-4 bg-slate-100 flex justify-center">
                  <div className="w-full max-w-3xl bg-white border-2 border-blue-500 rounded-xl p-4 shadow-sm relative">
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Objeto Incrustado (URL)
                    </div>
                    <div className="text-center py-6">
                      <span className="text-2xl">🛡️</span>
                      <h4 className="text-base font-bold text-slate-900 mt-2">Portal Contra el Ciberbullying</h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                        Todo el contenido interactivo (test, números de emergencia y guías) corre fluidamente dentro de tu página de Google Sites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>¿Tienes dudas de cómo publicarlo en tu cuenta de Google? Copia la URL de la Opción 1 y pégala en 2 clics.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold cursor-pointer"
          >
            Cerrar Kit
          </button>
        </div>
      </div>
    </div>
  );
};
