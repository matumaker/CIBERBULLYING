import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ShoppingBag, 
  Users, 
  Lock, 
  Calculator, 
  Bot, 
  Copy, 
  Check, 
  MessageSquare,
  ArrowRight,
  Send
} from 'lucide-react';

interface ProjectIdea {
  id: string;
  title: string;
  category: string;
  icon: any;
  color: string;
  description: string;
  features: string[];
  suggestedPrompt: string;
}

export const ProjectIdeasTab: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [customIdea, setCustomIdea] = useState('');
  const [copiedCustom, setCopiedCustom] = useState(false);

  const ideas: ProjectIdea[] = [
    {
      id: 'booking',
      title: 'Sistema de Citas y Reservas',
      category: 'Servicios & Negocios',
      icon: Calendar,
      color: 'bg-blue-600',
      description: 'Permite a los visitantes elegir día, horario y servicio disponible con confirmación inmediata.',
      features: ['Selector de fechas y horarios', 'Formulario de datos del cliente', 'Envío de confirmación por WhatsApp o Email'],
      suggestedPrompt: 'Crea para mi Google Sites una aplicación completa de reservas y citas online con selector de servicios, calendario de turnos y botón de confirmación.'
    },
    {
      id: 'catalog',
      title: 'Catálogo de Productos con Carrito a WhatsApp',
      category: 'E-commerce Ligero',
      icon: ShoppingBag,
      color: 'bg-emerald-600',
      description: 'Tienda interactiva con filtros por categorías, buscador en vivo y botón para enviar el pedido por WhatsApp.',
      features: ['Buscador instantáneo y filtros', 'Carrito de compras interactivo', 'Resumen listo para WhatsApp'],
      suggestedPrompt: 'Crea un catálogo de productos con buscador, categorías, carrito de compras y botón para enviar el pedido formateado a WhatsApp para incrustar en Google Sites.'
    },
    {
      id: 'directory',
      title: 'Directorio de Personal o Sucursales',
      category: 'Institucional & Colegios',
      icon: Users,
      color: 'bg-indigo-600',
      description: 'Ideal para escuelas, facultades o empresas: tarjetas de profesores, médicos o tiendas con buscador.',
      features: ['Filtros por especialidad o ciudad', 'Tarjetas con foto y contacto', 'Modal con biografía o detalles'],
      suggestedPrompt: 'Crea un directorio interactivo de miembros o sucursales con buscador en tiempo real, filtros por categoría y modal con ficha de contacto.'
    },
    {
      id: 'intranet',
      title: 'Portal Intranet con Acceso Seguro',
      category: 'Corporativo',
      icon: Lock,
      color: 'bg-slate-800',
      description: 'Espacio protegido por clave para empleados o estudiantes con enlaces a archivos de Drive y comunicados.',
      features: ['Pantalla de acceso con clave / PIN', 'Biblioteca de documentos y links', 'Muro de anuncios internos'],
      suggestedPrompt: 'Crea un portal interno o intranet con clave de acceso para empleados o alumnos con biblioteca de recursos y anuncios oficiales.'
    },
    {
      id: 'advanced-quote',
      title: 'Cotizador Multi-paso con PDF / Email',
      category: 'Ventas B2B',
      icon: Calculator,
      color: 'bg-amber-600',
      description: 'Calculadora que guía al usuario en 3 o 4 pasos con preguntas dinámicas y genera un resumen profesional.',
      features: ['Preguntas paso a paso (Wizard)', 'Cálculo de descuento por volumen', 'Resumen descargable o enviado'],
      suggestedPrompt: 'Crea un cotizador interactivo multi-paso con preguntas sobre tamaño de proyecto, cálculo automático y resumen de propuesta listo para descargar.'
    },
    {
      id: 'ai-assistant',
      title: 'Asistente de Preguntas Frecuentes con IA',
      category: 'Inteligencia Artificial',
      icon: Bot,
      color: 'bg-purple-600',
      description: 'Asistente interactivo con Gemini que responde preguntas de tus visitantes sobre horarios, precios y normas.',
      features: ['Conocimiento personalizado de tu empresa', 'Respuestas inmediatas en lenguaje natural', 'Diseño de chat flotante o en bloque'],
      suggestedPrompt: 'Crea un asistente inteligente para incrustar en mi Google Sites que responda dudas sobre nuestros servicios, horarios y políticas usando Gemini API.'
    }
  ];

  const handleCopyPrompt = async (prompt: string) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setSelectedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleCopyCustomPrompt = async () => {
    if (!customIdea.trim()) return;
    const fullText = `Crea una aplicación para incrustar en mi Google Sites que haga lo siguiente: ${customIdea}`;
    await navigator.clipboard.writeText(fullText);
    setCopiedCustom(true);
    setTimeout(() => setCopiedCustom(false), 2500);
  };

  return (
    <div className="space-y-8 py-6 max-w-6xl mx-auto">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Inspiración & Desarrollo Directo
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          ¿Qué proyecto te gustaría que programemos ahora?
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Copia cualquiera de estos prompts o describe tu necesidad particular en el chat y lo construiré paso a paso.
        </p>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.description}</p>

                <div className="space-y-1.5 mb-6">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleCopyPrompt(item.suggestedPrompt)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all active:scale-95"
                >
                  {copiedPrompt && selectedPrompt === item.suggestedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">¡Prompt Copiado! Pégalo en el chat</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar instrucción para el chat</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Idea Box */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="max-w-2xl mb-4">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            ¿Tienes otra idea en mente para tu Google Sites?
          </div>
          <h3 className="text-xl font-bold">Cuéntame lo que necesitas y lo programo en el siguiente paso</h3>
          <p className="text-xs text-slate-300 mt-1">
            Escribe en tus propias palabras qué función o herramienta te falta en tu sitio web:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Ejemplo: Quiero una calculadora de préstamos con cuotas mensuales..."
            value={customIdea}
            onChange={(e) => setCustomIdea(e.target.value)}
            className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCopyCustomPrompt}
            disabled={!customIdea.trim()}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            {copiedCustom ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>¡Copiado! Envíamelo en el chat</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Preparar instrucción</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
