import React, { useState } from 'react';
import { 
  WidgetConfig, 
  PRESET_WIDGETS 
} from '../data/widgetPresets';
import { generateGoogleSitesEmbedCode } from '../utils/codeGenerator';
import { 
  Undo2, 
  Redo2, 
  Eye, 
  Link2, 
  UserPlus, 
  Settings, 
  MoreVertical, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Plus, 
  Type, 
  Image as ImageIcon, 
  Code as CodeIcon, 
  FolderGit2, 
  ChevronDown,
  LayoutGrid,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface GoogleSitesSimulatorProps {
  currentWidget?: WidgetConfig;
}

export const GoogleSitesSimulator: React.FC<GoogleSitesSimulatorProps> = ({ 
  currentWidget = PRESET_WIDGETS[0] 
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [siteTitle, setSiteTitle] = useState('Mi Empresa & Servicios');
  const [activeRightTab, setActiveRightTab] = useState<'insert' | 'pages' | 'themes'>('insert');
  const [showPublishedToast, setShowPublishedToast] = useState(false);

  const embedCode = generateGoogleSitesEmbedCode(currentWidget);

  const handlePublish = () => {
    setShowPublishedToast(true);
    setTimeout(() => setShowPublishedToast(false), 3000);
  };

  return (
    <div className="space-y-4 py-3 max-w-7xl mx-auto">
      {/* Simulator Headline */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            GS
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Simulador Visual del Editor de Google Sites
            </h3>
            <p className="text-xs text-slate-600">
              Así es como se ve y se siente tu widget o aplicación web integrada dentro del lienzo real de Google Sites.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600">Widget cargado:</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
            {currentWidget.name}
          </span>
        </div>
      </div>

      {/* Main Simulated Browser Window */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
        {/* Browser Top Window Bar */}
        <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
              sites.google.com/u/0/d/editor
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-700/60 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>Google Sites Studio Environment</span>
          </div>
        </div>

        {/* Authentic Google Sites Top App Bar */}
        <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              S
            </div>
            <input
              type="text"
              value={siteTitle}
              onChange={(e) => setSiteTitle(e.target.value)}
              className="text-sm font-semibold text-slate-800 hover:border-slate-300 border border-transparent rounded px-1.5 py-0.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Action icons like real Google Sites */}
          <div className="flex items-center space-x-1 sm:space-x-3 text-slate-600">
            <div className="hidden sm:flex items-center space-x-1 border-r border-slate-200 pr-2">
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800">
                <Undo2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800">
                <Redo2 className="w-4 h-4" />
              </button>
            </div>

            {/* Device preview toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded ${deviceMode === 'desktop' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'}`}
                title="Vista Desktop"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded ${deviceMode === 'tablet' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'}`}
                title="Vista Tablet"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded ${deviceMode === 'mobile' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500'}`}
                title="Vista Móvil"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hidden md:block">
              <Link2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hidden md:block">
              <UserPlus className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500">
              <Settings className="w-4 h-4" />
            </button>

            {/* Blue Publish Button */}
            <button
              onClick={handlePublish}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-1.5 rounded-full shadow-sm transition-all"
            >
              Publicar
            </button>
          </div>
        </div>

        {/* Publish Toast Notice */}
        {showPublishedToast && (
          <div className="bg-emerald-600 text-white text-xs px-4 py-2 font-medium flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              ¡Sitio simulado actualizado con éxito! Tu widget está en producción.
            </span>
            <span className="opacity-75">Cerrar</span>
          </div>
        )}

        {/* Workspace Layout: Canvas on Center/Left, Google Sites Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] bg-slate-100">
          {/* THE CANVAS (Center) */}
          <div className="lg:col-span-9 p-4 sm:p-6 flex flex-col items-center overflow-y-auto max-h-[640px]">
            <div
              className={`bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 w-full border border-slate-200 ${
                deviceMode === 'mobile'
                  ? 'max-w-[380px]'
                  : deviceMode === 'tablet'
                  ? 'max-w-[620px]'
                  : 'max-w-4xl'
              }`}
            >
              {/* Site Header Banner inside the Canvas */}
              <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-600 text-white p-6 sm:p-8 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm tracking-wide">{siteTitle}</span>
                  </div>
                  <nav className="text-xs space-x-3 hidden sm:flex text-blue-100">
                    <span className="font-semibold text-white">Inicio</span>
                    <span className="hover:underline cursor-pointer">Servicios</span>
                    <span className="hover:underline cursor-pointer">Nosotros</span>
                    <span className="hover:underline cursor-pointer">Contacto</span>
                  </nav>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Bienvenidos a nuestro sitio web oficial
                </h1>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-lg">
                  Descubre soluciones rápidas, servicios personalizados y herramientas interactivas diseñadas para ti.
                </p>
              </div>

              {/* Normal text section */}
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  Módulo Interactivo Incrustado
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  El siguiente bloque es un iframe de Google Sites donde está corriendo el código HTML/JS o la URL de la aplicación web:
                </p>
              </div>

              {/* THE EMBEDDED WIDGET SECTION (With realistic Google Sites selection frame) */}
              <div className="p-4 sm:p-6 relative bg-slate-50/50">
                {/* Visual blue bounding box with handles showing it's an active Google Sites object */}
                <div className="relative border-2 border-dashed border-blue-500 rounded-xl p-2 bg-white shadow-sm">
                  {/* Google Sites bounding box handles */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-blue-600 border border-white shadow-xs"></div>
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-blue-600 border border-white shadow-xs"></div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-blue-600 border border-white shadow-xs"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-blue-600 border border-white shadow-xs"></div>

                  {/* Top-right Google Sites actions for embedded object */}
                  <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                    <CodeIcon className="w-3 h-3 text-blue-400" />
                    <span>Incrustar (&lt;&gt;)</span>
                  </div>

                  {/* Live Rendered Widget */}
                  <iframe
                    title="Live Widget inside Google Sites Canvas"
                    srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body { margin: 0; padding: 12px; background: transparent; display: flex; justify-content: center; align-items: center; box-sizing: border-box; font-family: sans-serif; }</style></head><body>${embedCode}</body></html>`}
                    className="w-full border-0 min-h-[380px] rounded-lg"
                    sandbox="allow-scripts allow-forms allow-modals"
                  />
                </div>
              </div>

              {/* Site Footer */}
              <div className="bg-slate-900 text-slate-400 text-[11px] p-6 text-center border-t border-slate-800">
                <p>© {new Date().getFullYear()} {siteTitle}. Construido con Google Sites & Google AI Studio.</p>
              </div>
            </div>
          </div>

          {/* THE AUTHENTIC GOOGLE SITES RIGHT SIDEBAR (3 cols) */}
          <div className="lg:col-span-3 bg-white border-l border-slate-200 p-4 flex flex-col justify-between">
            <div>
              {/* 3 Main Tabs: Insertar, Páginas, Temas */}
              <div className="grid grid-cols-3 border-b border-slate-200 pb-2 text-center text-xs font-bold text-slate-600 mb-4">
                <button
                  onClick={() => setActiveRightTab('insert')}
                  className={`pb-2 border-b-2 transition-all ${
                    activeRightTab === 'insert'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Insertar
                </button>
                <button
                  onClick={() => setActiveRightTab('pages')}
                  className={`pb-2 border-b-2 transition-all ${
                    activeRightTab === 'pages'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Páginas
                </button>
                <button
                  onClick={() => setActiveRightTab('themes')}
                  className={`pb-2 border-b-2 transition-all ${
                    activeRightTab === 'themes'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Temas
                </button>
              </div>

              {/* INSERT PANEL ITEMS (The key to Google Sites!) */}
              {activeRightTab === 'insert' && (
                <div className="space-y-4">
                  {/* The 4 core tools */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 cursor-pointer">
                      <Type className="w-5 h-5 text-slate-600 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-700">Cuadro de texto</span>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 cursor-pointer">
                      <ImageIcon className="w-5 h-5 text-slate-600 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-700">Imágenes</span>
                    </div>

                    {/* Highlighted Embed Tool */}
                    <div className="border-2 border-blue-500 bg-blue-50/70 rounded-xl p-3 flex flex-col items-center justify-center text-center cursor-pointer relative shadow-xs">
                      <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                        ¡AQUÍ!
                      </span>
                      <CodeIcon className="w-5 h-5 text-blue-600 mb-1" />
                      <span className="text-[11px] font-bold text-blue-900">Incrustar (&lt;&gt;)</span>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 cursor-pointer">
                      <FolderGit2 className="w-5 h-5 text-slate-600 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-700">Drive</span>
                    </div>
                  </div>

                  {/* Content block templates */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Bloques de contenido
                    </span>
                    <div className="grid grid-cols-3 gap-1.5 opacity-80">
                      <div className="border border-slate-200 rounded p-2 flex flex-col gap-1 items-center">
                        <div className="w-full h-4 bg-slate-200 rounded"></div>
                        <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                      </div>
                      <div className="border border-slate-200 rounded p-2 flex gap-1 items-center">
                        <div className="w-1/2 h-5 bg-slate-200 rounded"></div>
                        <div className="w-1/2 h-5 bg-slate-200 rounded"></div>
                      </div>
                      <div className="border border-slate-200 rounded p-2 flex gap-0.5 items-center">
                        <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                        <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                        <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Other Google Workspace widgets */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="p-1.5 hover:bg-slate-50 rounded flex items-center justify-between">
                      <span>Formularios de Google</span>
                      <span className="text-[10px] text-slate-400">Nativo</span>
                    </div>
                    <div className="p-1.5 hover:bg-slate-50 rounded flex items-center justify-between">
                      <span>Hojas de cálculo</span>
                      <span className="text-[10px] text-slate-400">Nativo</span>
                    </div>
                    <div className="p-1.5 hover:bg-slate-50 rounded flex items-center justify-between">
                      <span>Mapas y Calendarios</span>
                      <span className="text-[10px] text-slate-400">Nativo</span>
                    </div>
                  </div>
                </div>
              )}

              {activeRightTab === 'pages' && (
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="p-2 bg-blue-50 text-blue-700 font-semibold rounded-lg flex items-center justify-between">
                    <span>🏠 Página principal</span>
                    <span className="text-[10px]">Inicio</span>
                  </div>
                  <div className="p-2 hover:bg-slate-50 rounded-lg flex items-center justify-between">
                    <span>📄 Servicios</span>
                    <span className="text-[10px] text-slate-400">Página</span>
                  </div>
                  <div className="p-2 hover:bg-slate-50 rounded-lg flex items-center justify-between">
                    <span>📞 Contacto</span>
                    <span className="text-[10px] text-slate-400">Página</span>
                  </div>
                </div>
              )}

              {activeRightTab === 'themes' && (
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 border-2 border-blue-600 rounded-lg">
                    <span className="font-bold text-slate-800 block">Sencillo</span>
                    <div className="flex gap-1 mt-1">
                      <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                      <span className="w-4 h-4 rounded-full bg-slate-800"></span>
                      <span className="w-4 h-4 rounded-full bg-red-600"></span>
                    </div>
                  </div>
                  <div className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-300">
                    <span className="font-bold text-slate-800 block">Aristóteles</span>
                  </div>
                  <div className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-300">
                    <span className="font-bold text-slate-800 block">Diplomático</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom info tip */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-500 mt-4">
              📌 <strong>Dato clave:</strong> El botón <em>Incrustar</em> es la puerta que conecta cualquier desarrollo moderno con tu Google Site.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
