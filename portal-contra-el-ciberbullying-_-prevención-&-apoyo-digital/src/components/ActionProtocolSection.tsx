import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  UserCheck, 
  MessageSquareOff, 
  AlertCircle, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  ArrowRight,
  Eye
} from 'lucide-react';

export const ActionProtocolSection: React.FC = () => {
  const [evidenceChecks, setEvidenceChecks] = useState<{ [key: string]: boolean }>({
    time: true,
    user: true,
    url: false,
    uncropped: false,
    backup: false,
  });

  const [copiedProtocol, setCopiedProtocol] = useState(false);

  const toggleCheck = (key: string) => {
    setEvidenceChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const steps = [
    {
      num: '01',
      title: 'No respondas con ira ni contraataques',
      icon: MessageSquareOff,
      color: 'bg-amber-500',
      description: 'El acosador busca desestabilizarte emocionalmente. Si respondes con agresiones, le das material para justificar su ataque o hacerte quedar a ti como culpable. Respira profundo y sal de la aplicación.',
      keyAdvice: 'Regla de oro: No alimentar al acosador (Don\'t feed the troll).'
    },
    {
      num: '02',
      title: 'Guarda evidencia de TODO (Capturas completas)',
      icon: Camera,
      color: 'bg-blue-600',
      description: 'No borres los mensajes inmediatamente antes de documentarlos. Toma capturas de pantalla de chats, comentarios, perfiles y correos. Asegúrate de que se vea fecha, hora y el nombre de usuario exacto.',
      keyAdvice: 'Sin pruebas válidas, las plataformas y colegios tienen dificultades para sancionar.'
    },
    {
      num: '03',
      title: 'Bloquea y denuncia en la red social',
      icon: ShieldCheck,
      color: 'bg-emerald-600',
      description: 'Usa las herramientas de reporte nativas de WhatsApp, Instagram, TikTok o Discord para reportar por "Acoso o intimidación". Luego bloquea la cuenta agresora para frenar el flujo de mensajes.',
      keyAdvice: 'Si crea otra cuenta, no te desesperes: vuelve a guardar captura y reportar.'
    },
    {
      num: '04',
      title: 'Rompe el silencio: Cuéntaselo a alguien hoy',
      icon: UserCheck,
      color: 'bg-indigo-600',
      description: 'El mayor cómplice del ciberacoso es el secreto. Habla con tus padres, un docente de confianza, el orientador escolar o llama anónimamente a las líneas de ayuda gratuitas. No tienes por qué cargarlo solo/a.',
      keyAdvice: 'Pedir ayuda no es ser débil ni chivato/delator: es un acto de valentía.'
    }
  ];

  const handleCopyProtocolText = async () => {
    const text = `PROTOCOLO ANTE CIBERBULLYING:\n\n1. No responder al agresor.\n2. Guardar evidencia con fecha, hora y usuario.\n3. Bloquear y denunciar en la red social.\n4. Contárselo a un adulto o acudir a las líneas de ayuda telefónica.`;
    await navigator.clipboard.writeText(text);
    setCopiedProtocol(true);
    setTimeout(() => setCopiedProtocol(false), 2000);
  };

  return (
    <section id="protocolo" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Protocolo Oficial de Actuación
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Qué hacer paso a paso si eres víctima
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Sigue estos 4 pasos diseñados por expertos en seguridad digital y psicología juvenil para desactivar la agresión y protegerte.
            </p>
          </div>

          <button
            onClick={handleCopyProtocolText}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-300 shadow-xs transition-all shrink-0 cursor-pointer"
          >
            {copiedProtocol ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">¡Protocolo Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar texto para Google Sites</span>
              </>
            )}
          </button>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div 
                key={st.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-200">{st.num}</span>
                    <div className={`w-10 h-10 rounded-xl ${st.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{st.description}</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] font-medium text-slate-700">
                  💡 {st.keyAdvice}
                </div>
              </div>
            );
          })}
        </div>

        {/* Evidence Checklist Tool */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">
                Checklist: ¿Cómo tomar capturas válidas legalmente?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Muchas denuncias ante redes sociales o autoridades se caen porque las capturas están recortadas o no se identifica al atacante. Marca cada requisito para comprobar tu prueba:
            </p>

            <div className="space-y-2.5 pt-2">
              <label 
                onClick={() => toggleCheck('uncropped')}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/60 transition-all text-xs text-slate-700"
              >
                {evidenceChecks.uncropped ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span><strong>Pantalla completa sin recortar:</strong> Debe verse la barra de estado superior (hora, batería, señal) para comprobar autenticidad temporal.</span>
              </label>

              <label 
                onClick={() => toggleCheck('user')}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/60 transition-all text-xs text-slate-700"
              >
                {evidenceChecks.user ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span><strong>Identificador de usuario visible:</strong> Debe verse el nombre de usuario (@nombre_de_usuario) o número telefónico completo, no solo el apodo.</span>
              </label>

              <label 
                onClick={() => toggleCheck('time')}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/60 transition-all text-xs text-slate-700"
              >
                {evidenceChecks.time ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span><strong>Fecha y hora del mensaje:</strong> La captura debe mostrar cuándo se envió el mensaje o publicación.</span>
              </label>

              <label 
                onClick={() => toggleCheck('url')}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/60 transition-all text-xs text-slate-700"
              >
                {evidenceChecks.url ? (
                  <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span><strong>Enlace o URL copiada:</strong> Si fue en web o red social pública, copia el link directo a la publicación o perfil.</span>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              ¿Eres testigo o espectador?
            </span>
            <h4 className="text-lg font-bold">El 85% de las agresiones se detienen con tu intervención</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Si estás en un grupo donde se burlan de alguien, <strong>no le des "me gusta" ni compartas el contenido</strong>. 
              Escribe un simple <em>"Ey, esto no da gracia"</em> o envía un mensaje privado a la víctima diciendo <em>"Sé que lo que hicieron está mal, estoy contigo"</em>. Ese gesto cambia vidas.
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-indigo-200 block">
                ✓ Puedes reportar de forma totalmente anónima en la mayoría de colegios y plataformas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
