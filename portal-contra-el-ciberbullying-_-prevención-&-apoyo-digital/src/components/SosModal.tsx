import React from 'react';
import { 
  X, 
  AlertCircle, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  MessageSquareOff, 
  Camera 
} from 'lucide-react';

interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToHelplines: () => void;
}

export const SosModal: React.FC<SosModalProps> = ({ isOpen, onClose, onGoToHelplines }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SOS Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-red-600/50 animate-pulse">
            🆘
          </div>
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
              Asistencia Inmediata
            </span>
            <h3 className="text-xl font-extrabold text-white">¿Estás en Crisis o Bajo Ataque?</h3>
          </div>
        </div>

        {/* Grounding Message */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-200 text-xs sm:text-sm leading-relaxed space-y-2">
          <p className="font-semibold text-white flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500" />
            Primero: Respira hondo. No estás solo/a y esto TIENE solución.
          </p>
          <p className="text-slate-300">
            Los ataques en internet son intensos pero temporales. El acosador busca desesperarte. Protege tu paz mental con estos 3 pasos:
          </p>
        </div>

        {/* 3 Immediate Actions */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3 text-xs">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
              1
            </div>
            <div>
              <strong className="text-white block">Sal de la aplicación y NO respondas</strong>
              <span className="text-slate-300">No le des el gusto de ver que te lastimó. Guarda silencio digital mientras tomas control.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3 text-xs">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <strong className="text-white block">Saca capturas de pantalla completas</strong>
              <span className="text-slate-300">Antes de bloquear, asegúrate de tener fotos donde se vea fecha, hora y usuario agresor.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-start gap-3 text-xs">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
              3
            </div>
            <div>
              <strong className="text-white block">Bloquea y habla con un adulto ahora</strong>
              <span className="text-slate-300">Padres, profesores o las líneas oficiales gratuitas están disponibles las 24 horas.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onGoToHelplines();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Ver Números de Emergencia por País</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-all cursor-pointer"
          >
            Entendido, volver al sitio
          </button>
        </div>
      </div>
    </div>
  );
};
