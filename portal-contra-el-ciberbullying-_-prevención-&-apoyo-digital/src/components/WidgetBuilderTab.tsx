import React, { useState, useMemo } from 'react';
import { 
  PRESET_WIDGETS, 
  WidgetConfig 
} from '../data/widgetPresets';
import { generateGoogleSitesEmbedCode } from '../utils/codeGenerator';
import { 
  Copy, 
  Check, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code2, 
  Eye, 
  Settings2, 
  Sparkles, 
  ExternalLink,
  RefreshCw,
  Play
} from 'lucide-react';
import { ActiveTab } from './Header';

interface WidgetBuilderTabProps {
  onSendToSimulator?: (widget: WidgetConfig) => void;
  onNavigate?: (tab: ActiveTab) => void;
}

export const WidgetBuilderTab: React.FC<WidgetBuilderTabProps> = ({ 
  onSendToSimulator,
  onNavigate 
}) => {
  const [selectedWidgetId, setSelectedWidgetId] = useState<string>(PRESET_WIDGETS[0].id);
  const [widgets, setWidgets] = useState<WidgetConfig[]>(PRESET_WIDGETS);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeSubTab, setActiveSubTab] = useState<'preview' | 'code'>('preview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Active widget
  const currentWidget = useMemo(() => {
    return widgets.find((w) => w.id === selectedWidgetId) || widgets[0];
  }, [widgets, selectedWidgetId]);

  // Update field handler
  const handleUpdateSetting = (field: string, value: any) => {
    setWidgets((prev) =>
      prev.map((w) => {
        if (w.id === selectedWidgetId) {
          return {
            ...w,
            settings: {
              ...w.settings,
              [field]: value,
            },
          };
        }
        return w;
      })
    );
  };

  const handleUpdateCustomData = (field: string, value: any) => {
    setWidgets((prev) =>
      prev.map((w) => {
        if (w.id === selectedWidgetId) {
          return {
            ...w,
            settings: {
              ...w.settings,
              customData: {
                ...w.settings.customData,
                [field]: value,
              },
            },
          };
        }
        return w;
      })
    );
  };

  // Generate code
  const generatedHtml = useMemo(() => {
    return generateGoogleSitesEmbedCode(currentWidget);
  }, [currentWidget]);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(generatedHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const appUrl = window.location.href;
  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(appUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Preset color swatches
  const colorPresets = [
    { label: 'Google Blue', primary: '#1a73e8', accent: '#0d47a1' },
    { label: 'WhatsApp Verde', primary: '#25D366', accent: '#128C7E' },
    { label: 'Violeta Moderno', primary: '#7c3aed', accent: '#4f46e5' },
    { label: 'Esmeralda', primary: '#059669', accent: '#047857' },
    { label: 'Ámbar Cálido', primary: '#f59e0b', accent: '#d97706' },
    { label: 'Gris Grafito', primary: '#334155', accent: '#0f172a' },
  ];

  return (
    <div className="space-y-6 py-4 max-w-7xl mx-auto">
      {/* Intro banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h2 className="text-lg font-bold text-slate-900">
              Generador de Widgets Listos para Google Sites
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Personaliza el diseño, previsualiza en tiempo real y copia el código HTML para pegarlo en <strong>Insertar &gt; Código</strong>.
          </p>
        </div>

        {onSendToSimulator && (
          <button
            onClick={() => {
              onSendToSimulator(currentWidget);
              if (onNavigate) onNavigate('simulator');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs rounded-xl border border-indigo-200 transition-all shrink-0 active:scale-95"
          >
            <Play className="w-3.5 h-3.5" />
            Probar en Simulador de Google Sites
          </button>
        )}
      </div>

      {/* Widget Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {widgets.map((widget) => {
          const isSelected = widget.id === selectedWidgetId;
          return (
            <button
              key={widget.id}
              onClick={() => setSelectedWidgetId(widget.id)}
              className={`text-left p-3 rounded-xl border transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/80 shadow-sm ring-2 ring-blue-500/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-1.5 py-0.5 rounded">
                  {widget.badge}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-800 line-clamp-2">
                {widget.name}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Studio Layout: Editor on Left, Live View on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Controls & Settings (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-slate-600" />
              <h3 className="text-sm font-bold text-slate-800">Personalizar Widget</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              #{currentWidget.id}
            </span>
          </div>

          {/* Texts */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
              Textos & Encabezado
            </label>
            <div>
              <span className="text-xs text-slate-500 mb-1 block">Título principal</span>
              <input
                type="text"
                value={currentWidget.settings.title}
                onChange={(e) => handleUpdateSetting('title', e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 mb-1 block">Subtítulo o descripción</span>
              <input
                type="text"
                value={currentWidget.settings.subtitle}
                onChange={(e) => handleUpdateSetting('subtitle', e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Color Palettes */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Paleta de Color
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={currentWidget.settings.primaryColor}
                  onChange={(e) => handleUpdateSetting('primaryColor', e.target.value)}
                  className="w-6 h-6 rounded cursor-pointer border-0 p-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {colorPresets.map((palette, idx) => (
                <button
                  key={idx}
                  title={palette.label}
                  onClick={() => {
                    handleUpdateSetting('primaryColor', palette.primary);
                    handleUpdateSetting('accentColor', palette.accent);
                  }}
                  className="h-7 rounded-lg border border-slate-200 flex items-center justify-center transition-transform hover:scale-105"
                  style={{ backgroundColor: palette.primary }}
                />
              ))}
            </div>
          </div>

          {/* Appearance: Border radius & background */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 uppercase tracking-wider">
                Bordes Redondeados: {currentWidget.settings.borderRadius}px
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="28"
              value={currentWidget.settings.borderRadius}
              onChange={(e) => handleUpdateSetting('borderRadius', Number(e.target.value))}
              className="w-full accent-blue-600"
            />

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-600 font-medium">Sombra suave (Box shadow)</span>
              <input
                type="checkbox"
                checked={currentWidget.settings.showShadow}
                onChange={(e) => handleUpdateSetting('showShadow', e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded"
              />
            </div>
          </div>

          {/* Specific widget customization */}
          {currentWidget.id === 'quote-calculator' && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Valores del Cotizador
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Precio Base ($)</span>
                  <input
                    type="number"
                    value={currentWidget.settings.customData?.basePrice ?? 150}
                    onChange={(e) => handleUpdateCustomData('basePrice', Number(e.target.value))}
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg"
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Texto del Botón</span>
                  <input
                    type="text"
                    value={currentWidget.settings.customData?.buttonText || 'Solicitar'}
                    onChange={(e) => handleUpdateCustomData('buttonText', e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {currentWidget.id === 'whatsapp-contact' && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Configuración WhatsApp
              </label>
              <div>
                <span className="text-xs text-slate-500 block mb-1">Número (con código país, ej. +34 o +52)</span>
                <input
                  type="text"
                  value={currentWidget.settings.customData?.phoneNumber || '+5491123456789'}
                  onChange={(e) => handleUpdateCustomData('phoneNumber', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-1">Mensaje inicial sugerido</span>
                <input
                  type="text"
                  value={currentWidget.settings.customData?.defaultMessage || ''}
                  onChange={(e) => handleUpdateCustomData('defaultMessage', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg"
                />
              </div>
            </div>
          )}

          {currentWidget.id === 'event-countdown' && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Fecha del Evento
              </label>
              <div>
                <input
                  type="date"
                  value={currentWidget.settings.customData?.targetDate || '2026-12-31'}
                  onChange={(e) => handleUpdateCustomData('targetDate', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg"
                />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Live Sandbox & Code Inspector (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Top Bar for Viewport & Mode Toggle */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveSubTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSubTab === 'preview'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Vista Previa
              </button>
              <button
                onClick={() => setActiveSubTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSubTab === 'code'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Código HTML para Sites
              </button>
            </div>

            {/* Viewport Width (Desktop / Tablet / Mobile) */}
            {activeSubTab === 'preview' && (
              <div className="flex items-center gap-1 text-slate-400">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'desktop' ? 'bg-blue-50 text-blue-600' : 'hover:text-slate-700'
                  }`}
                  title="Pantalla completa (Desktop)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('tablet')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'tablet' ? 'bg-blue-50 text-blue-600' : 'hover:text-slate-700'
                  }`}
                  title="Tableta"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'mobile' ? 'bg-blue-50 text-blue-600' : 'hover:text-slate-700'
                  }`}
                  title="Móvil"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Copy CTA Button */}
            <button
              onClick={handleCopyCode}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
                copiedCode
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
              }`}
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  ¡Copiado para Google Sites!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copiar Código HTML
                </>
              )}
            </button>
          </div>

          {/* Sandbox Content */}
          {activeSubTab === 'preview' ? (
            <div className="bg-slate-100/90 rounded-2xl border border-slate-200/80 p-6 min-h-[460px] flex items-center justify-center transition-all overflow-hidden">
              <div
                className={`transition-all duration-200 w-full ${
                  viewMode === 'mobile'
                    ? 'max-w-[360px]'
                    : viewMode === 'tablet'
                    ? 'max-w-[520px]'
                    : 'max-w-[680px]'
                }`}
              >
                <div className="bg-white/40 p-2 rounded-xl mb-3 border border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Simulando iframe de Google Sites ({viewMode})
                  </span>
                  <span>100% responsivo</span>
                </div>

                {/* Render the sandboxed HTML via srcDoc iframe to ensure 100% true-to-life behavior in Google Sites */}
                <iframe
                  title="Google Sites Widget Sandbox"
                  srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body { margin: 0; padding: 12px; background: transparent; display: flex; justify-content: center; align-items: center; min-height: 100vh; box-sizing: border-box; }</style></head><body>${generatedHtml}</body></html>`}
                  className="w-full border-0 rounded-2xl overflow-hidden shadow-sm bg-transparent min-h-[420px]"
                  sandbox="allow-scripts allow-forms allow-modals"
                />
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 rounded-2xl p-5 text-slate-200 font-mono text-xs overflow-hidden border border-slate-800 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  embed-code.html (Autocontenido sin librerías externas)
                </span>
                <span className="text-[11px] text-slate-500">Listo para Google Sites</span>
              </div>
              <pre className="overflow-x-auto max-h-[380px] p-2 leading-relaxed text-blue-200 select-all">
                {generatedHtml}
              </pre>
            </div>
          )}

          {/* How to paste reminder */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong>¿Cómo pegarlo en tu Google Sites?</strong><br />
              1. En tu editor de Google Sites, ve a la columna derecha y haz clic en <strong>"Insertar"</strong>.<br />
              2. Toca <strong>"&lt;&gt; Incrustar"</strong>.<br />
              3. Selecciona la pestaña <strong>"Código para insertar"</strong> y pega este código.<br />
              4. Haz clic en "Siguiente" y "Guardar". ¡Listo! Puedes arrastrar los círculos en las esquinas para darle el tamaño deseado.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
