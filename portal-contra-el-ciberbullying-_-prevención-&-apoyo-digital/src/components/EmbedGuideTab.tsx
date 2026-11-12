import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Code2, 
  Link, 
  Maximize2, 
  ShieldAlert, 
  Lightbulb, 
  ArrowRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export const EmbedGuideTab: React.FC = () => {
  const [copiedAppUrl, setCopiedAppUrl] = useState(false);
  const currentAppUrl = window.location.href;

  const handleCopyAppUrl = async () => {
    await navigator.clipboard.writeText(currentAppUrl);
    setCopiedAppUrl(true);
    setTimeout(() => setCopiedAppUrl(false), 2500);
  };

  const steps = [
    {
      num: '01',
      title: 'Abre tu editor de Google Sites',
      description: 'Ingresa a sites.google.com con tu cuenta de Google y entra al sitio que deseas editar.',
      tip: 'Puedes trabajar tanto en un sitio nuevo en blanco como en uno ya publicado.'
    },
    {
      num: '02',
      title: 'Haz clic en "Insertar" > "Incrustar"',
      description: 'En la columna derecha, selecciona la pestaña "Insertar" y luego el botón con el ícono < > Incrustar.',
      tip: 'Atajo pro: Si haces doble clic en cualquier espacio en blanco del lienzo, aparecerá una rueda rápida con el botón Incrustar en el centro.'
    },
    {
      num: '03',
      title: 'Elige tu método preferido',
      description: 'Google Sites te mostrará dos pestañas: "Mediante URL" o "Código para insertar".',
      tip: 'Usa "Código" para nuestros widgets pequeños de HTML; usa "URL" si quieres incrustar una aplicación web completa.'
    },
    {
      num: '04',
      title: 'Pega, guarda y ajusta el tamaño',
      description: 'Presiona "Siguiente" y luego "Insertar". Aparecerá un bloque con círculos azules en las esquinas para estirarlo.',
      tip: 'Arrastra el borde inferior hacia abajo lo suficiente para que no aparezca barra de desplazamiento (scrollbar) vertical interna.'
    }
  ];

  return (
    <div className="space-y-10 py-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Tutorial Oficial & Buenas Prácticas
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          Cómo incrustar cualquier desarrollo en Google Sites
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Guía paso a paso para insertar widgets o aplicaciones completas sin fallos de diseño.
        </p>
      </div>

      {/* URL of this app to test embed directly */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider block mb-1">
            🔗 ¿Quieres probar incrustando esta misma aplicación?
          </span>
          <h3 className="text-base sm:text-lg font-bold">
            Copia la URL en vivo de este Hub para incrustarla en Google Sites
          </h3>
          <p className="text-xs text-blue-100 mt-1 max-w-xl">
            En Google Sites: ve a <strong>Incrustar &gt; Mediante URL</strong>, pega este enlace y tendrás este estudio interactivo funcionando dentro de tu propia web.
          </p>
        </div>

        <button
          onClick={handleCopyAppUrl}
          className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 flex items-center gap-2 ${
            copiedAppUrl
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-blue-700 hover:bg-blue-50'
          }`}
        >
          {copiedAppUrl ? (
            <>
              <Check className="w-4 h-4" />
              ¡URL Copiada!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copiar URL de la App
            </>
          )}
        </button>
      </div>

      {/* 4 Steps visual pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((st) => (
          <div key={st.num} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-blue-600 block mb-2">{st.num}</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2">{st.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{st.description}</p>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-500">
              💡 <strong>Tip:</strong> {st.tip}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison: Mediante URL vs. Código para insertar */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          ¿Cuándo usar "Mediante URL" y cuándo "Código para insertar"?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Google Sites ofrece dos caminos. Aquí tienes la regla de oro para no dudar:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
            <div className="flex items-center gap-2.5 mb-3 text-blue-700 font-bold text-sm">
              <Link className="w-4 h-4" />
              Opción 1: Mediante URL (Embed por link)
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Ideal para <strong>aplicaciones web completas, tableros con base de datos o herramientas complejas</strong> creadas en AI Studio u otros servidores.
            </p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Se actualiza automáticamente cada vez que cambias el código aquí.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Permite backend, almacenamiento de archivos y autenticación.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Google Sites te permite elegir entre "Página entera" o "Vista previa de elemento".
              </li>
            </ul>
          </div>

          <div className="border border-indigo-200 rounded-xl p-5 bg-indigo-50/30">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-700 font-bold text-sm">
              <Code2 className="w-4 h-4" />
              Opción 2: Código para insertar (Embed HTML/JS)
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Ideal para <strong>bloques rápidos, widgets ligeros, calculadoras, botones de WhatsApp o acordeones</strong> que no necesitan servidor externo.
            </p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Carga ultra rápida sin dependencias ni llamadas a servidores externos.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Queda guardado permanentemente dentro de tu archivo de Google Sites.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Los 6 widgets de nuestro generador están optimizados para este método.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pro Tips to avoid common Google Sites mistakes */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          4 Consejos Pro para evitar errores comunes en Google Sites
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600">
            <strong className="text-slate-800 block mb-1">1. Evita la barra de scroll vertical (Scrollbar)</strong>
            Cuando insertes el bloque, Google Sites le da una altura inicial fija de 300px. Haz clic sobre el widget y arrastra el círculo inferior hacia abajo para que el contenido respire sin barras de desplazamiento feas.
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600">
            <strong className="text-slate-800 block mb-1">2. Prueba siempre la vista previa móvil</strong>
            Arriba a la derecha en Google Sites, presiona el botón de "Vista previa" con ícono de monitor/teléfono para verificar cómo se ve el widget en pantallas pequeñas antes de publicar.
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600">
            <strong className="text-slate-800 block mb-1">3. Permisos si usas Google Drive o Sheets</strong>
            Si tu aplicación incrustada conecta con archivos de Google Drive o Sheets, recuerda configurar el documento en "Cualquier persona con el enlace puede ver/editar" para que tus visitantes puedan interactuar.
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600">
            <strong className="text-slate-800 block mb-1">4. Seguridad del iframe (Sandbox de Google)</strong>
            Google Sites ejecuta todo código incrustado en un dominio aislado (`googleusercontent.com`). Por eso nuestros widgets no usan llamadas prohibidas como `window.parent` y funcionan de forma fluida.
          </div>
        </div>
      </div>
    </div>
  );
};
