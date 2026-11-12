import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Smartphone, 
  Heart, 
  ShieldCheck, 
  FileCheck2,
  Lock,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';

export const GuidesByRoleSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'jovenes' | 'padres' | 'docentes'>('jovenes');
  const [copiedRoleText, setCopiedRoleText] = useState(false);

  const handleCopyGuide = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedRoleText(true);
    setTimeout(() => setCopiedRoleText(false), 2000);
  };

  return (
    <section id="guias" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Guías Personalizadas por Rol
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            ¿Cómo intervenir según tu papel en la comunidad?
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            El ciberbullying no se resuelve en solitario. Selecciona tu rol para ver pautas pedagógicas y de seguridad adaptadas:
          </p>
        </div>

        {/* 3 Role Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setActiveRole('jovenes')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeRole === 'jovenes'
                ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-2 ring-blue-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
              activeRole === 'jovenes' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              🧒
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Jóvenes y Adolescentes</h3>
              <p className="text-xs text-slate-500">Privacidad y cómo defenderse</p>
            </div>
          </button>

          <button
            onClick={() => setActiveRole('padres')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeRole === 'padres'
                ? 'border-indigo-600 bg-indigo-50/70 shadow-sm ring-2 ring-indigo-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
              activeRole === 'padres' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              👨‍👩‍👧
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Familias y Padres</h3>
              <p className="text-xs text-slate-500">Contención sin castigos</p>
            </div>
          </button>

          <button
            onClick={() => setActiveRole('docentes')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
              activeRole === 'docentes'
                ? 'border-purple-600 bg-purple-50/70 shadow-sm ring-2 ring-purple-500/20'
                : 'border-slate-200 bg-slate-50 hover:bg-white'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
              activeRole === 'docentes' ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              🏫
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Docentes y Escuelas</h3>
              <p className="text-xs text-slate-500">Protocolos escolares y buzón</p>
            </div>
          </button>
        </div>

        {/* Dynamic Content Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
          {activeRole === 'jovenes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Manual de Autodefensa Digital para Jóvenes</h3>
                  <p className="text-xs text-slate-500">Configuraciones esenciales que debes activar en tus aplicaciones</p>
                </div>
                <button
                  onClick={() => handleCopyGuide('Configuraciones para jóvenes: cuenta privada, desactivar ubicación, restringir comentarios en Instagram/TikTok y nunca compartir contraseñas.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  {copiedRoleText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRoleText ? '¡Copiado!' : 'Copiar sección'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase">
                    <Lock className="w-4 h-4" />
                    Instagram & TikTok
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Usa la función "Restringir"</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Si no quieres bloquear para que no sospechen, activa <em>"Restringir"</em>. El acosador podrá comentar, pero solo él verá sus comentarios; tus amigos no los verán.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Privacidad de Grupos</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ve a <em>Ajustes &gt; Privacidad &gt; Grupos</em> y cámbialo a <em>"Mis contactos excepto..."</em> para que personas desconocidas no puedan agregarte a grupos sin tu permiso.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    Roblox & Discord
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Desactiva DMs de desconocidos</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    En Discord, deshabilita "Permitir mensajes directos de miembros del servidor" en servidores grandes para evitar que extraños te envíen hostigamiento privado.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeRole === 'padres' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Pautas para Padres: La Regla de Oro</h3>
                  <p className="text-xs text-slate-500">Cómo acompañar a tus hijos sin que sientan miedo a contarte las cosas</p>
                </div>
                <button
                  onClick={() => handleCopyGuide('Regla de oro para padres: Jamás castigues quitando el móvil cuando te cuenten sobre acoso. Escucha con empatía, valida sus sentimientos y acuerden medidas conjuntas.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  {copiedRoleText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRoleText ? '¡Copiado!' : 'Copiar sección'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                  <span className="text-xs font-black text-rose-700 uppercase">Lo que NUNCA debes hacer</span>
                  <ul className="text-xs sm:text-sm text-rose-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✕</span>
                      <span><strong>Quitarle el teléfono como castigo:</strong> Sentirá que la víctima es castigada y nunca más te contará si algo grave le sucede.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✕</span>
                      <span><strong>Minimizar la situación:</strong> Frases como <em>"No le des importancia, son tonterías de niños"</em> invalidan su sufrimiento real.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <span className="text-xs font-black text-emerald-700 uppercase">Lo que SÍ debes hacer</span>
                  <ul className="text-xs sm:text-sm text-emerald-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">✓</span>
                      <span><strong>Agradecer su confianza:</strong> Decirle: <em>"Gracias por contármelo, fuiste muy valiente y no es tu culpa. Lo solucionaremos juntos"</em>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">✓</span>
                      <span><strong>Coordinar con la escuela:</strong> Pedir una reunión formal con el equipo directivo y orientador escolar llevando las capturas de evidencia.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeRole === 'docentes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Protocolo Escolar para Educadores e Instituciones</h3>
                  <p className="text-xs text-slate-500">Mecanismos institucionales de prevención y abordaje en el aula</p>
                </div>
                <button
                  onClick={() => handleCopyGuide('Protocolo docente: Activar protocolo sin demora, resguardar confidencialidad de la víctima, crear buzón seguro de Google Forms para denuncias anónimas y capacitar a los testigos.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  {copiedRoleText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRoleText ? '¡Copiado!' : 'Copiar sección'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-purple-600 uppercase">Paso 1: Recepción</span>
                  <h4 className="text-sm font-bold text-slate-900">Buzón Anónimo Escolar</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Crea un Formulario de Google (Google Form) anónimo incrustado en el Google Site de la escuela para que los alumnos puedan alertar de situaciones de acoso sin miedo a represalias.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-purple-600 uppercase">Paso 2: Intervención</span>
                  <h4 className="text-sm font-bold text-slate-900">No confrontar en público</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nunca sientes a la víctima y al acosador a "pedirse perdón" frente al curso. Esto revictimiza a la persona afectada y consolida el miedo. Se debe hablar por separado con cada parte y con sus familias.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-purple-600 uppercase">Paso 3: Cultura</span>
                  <h4 className="text-sm font-bold text-slate-900">Trabajar con los Testigos</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    En talleres de convivencia digital, enséñale al grupo que quien aplaude, comparte o calla ante un meme denigrante es corresponsable de la agresión.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
