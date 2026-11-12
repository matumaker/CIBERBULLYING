import React, { useState } from 'react';
import { TEST_QUESTIONS } from '../data/cyberbullyingData';
import { 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  RotateCcw, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  Lock,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import { generateInteractiveTestWidget } from '../data/googleSitesBlueprint';

interface DetectionTestSectionProps {
  onGoToHelplines: () => void;
}

export const DetectionTestSection: React.FC<DetectionTestSectionProps> = ({ onGoToHelplines }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const currentQ = TEST_QUESTIONS[currentStep];

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentStep + 1 < TEST_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  const handleCopyWidgetCode = async () => {
    const code = generateInteractiveTestWidget();
    await navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="test" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Autoevaluación Gratuita & Anónima
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Test: ¿Estás viviendo Ciberbullying?
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Responde con honestidad estas 6 preguntas breves. Tus respuestas son 100% privadas y no quedan guardadas.
          </p>
        </div>

        {/* The Test Box Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          {!showResult ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Pregunta {currentStep + 1} de {TEST_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / TEST_QUESTIONS.length) * 100)}% completado</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / TEST_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-xs transition-all flex items-center justify-between group active:scale-[0.99] cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-blue-900">
                      {option.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Evaluación anónima y sin registro
                </span>
                {currentStep > 0 && (
                  <button
                    onClick={handleReset}
                    className="text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reiniciar
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result Report */
            <div className="space-y-6 animate-in fade-in duration-300">
              {totalScore <= 2 && (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Resultado</span>
                      <h3 className="text-lg font-bold">Nivel de Riesgo Bajo / Situación Segura</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Tus respuestas indican que no estás experimentando situaciones sistemáticas de ciberacoso. ¡Excelente! 
                    Sigue cuidando la privacidad de tus perfiles y, si alguna vez ves que atacan a un compañero en un grupo, <strong>sé un testigo activo y apóyalo</strong>.
                  </p>
                </div>
              )}

              {totalScore > 2 && totalScore <= 7 && (
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Resultado</span>
                      <h3 className="text-lg font-bold">Señales de Alerta Temprana</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    Existen conductas molestas, burlas o exclusiones que te están incomodando o generando preocupación. 
                    <strong>No dejes que escale:</strong> pon tus redes en privado, silencia a quienes te agreden y habla con alguien de confianza antes de que se vuelva habitual.
                  </p>
                </div>
              )}

              {totalScore > 7 && (
                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
                      <AlertOctagon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Resultado Urgente</span>
                      <h3 className="text-lg font-bold">Posible Situación de Ciberacoso Activo</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed mb-4">
                    <strong>No es tu culpa y no tienes por qué soportar esto en silencio.</strong> Estás enfrentando agresiones reiteradas que afectan tu bienestar y tranquilidad. 
                    Existen protocolos y leyes que te protegen.
                  </p>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-rose-200 space-y-1.5 text-xs text-rose-900 font-medium">
                    <p>✓ 1. No respondas ni contraataques (es lo que busca el acosador).</p>
                    <p>✓ 2. Saca capturas de pantalla de todo (guarda fecha, hora y usuario).</p>
                    <p>✓ 3. Habla hoy mismo con tus padres, profesores o llama a una línea de ayuda.</p>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onGoToHelplines}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  Ver Líneas Gratuitas de Apoyo por País
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Repetir Test
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Embed code banner for Google Sites */}
        <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-indigo-900">
            <Code2 className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>¿Quieres incrustar este mismo test interactivo en tu Google Sites escolar?</span>
          </div>
          <button
            onClick={handleCopyWidgetCode}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              copiedCode 
                ? 'bg-emerald-600 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
            }`}
          >
            {copiedCode ? (
              <>
                <Check className="w-3.5 h-3.5" />
                ¡Código Copiado!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copiar Código HTML del Test
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
