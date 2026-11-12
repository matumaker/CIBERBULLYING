export interface WidgetConfig {
  id: string;
  name: string;
  category: 'calculadora' | 'atencion' | 'marketing' | 'contenido' | 'feedback';
  description: string;
  badge: string;
  settings: {
    title: string;
    subtitle: string;
    primaryColor: string;
    accentColor: string;
    textColor: string;
    backgroundColor: string;
    borderRadius: number;
    showShadow: boolean;
    // Specific custom fields
    customData?: Record<string, any>;
  };
}

export const PRESET_WIDGETS: WidgetConfig[] = [
  {
    id: 'quote-calculator',
    name: 'Calculadora de Presupuestos',
    category: 'calculadora',
    description: 'Permite a los visitantes calcular al instante el costo estimado de tus servicios o productos.',
    badge: 'Popular',
    settings: {
      title: 'Cotizador Rápido de Servicios',
      subtitle: 'Calcula un estimado de tu proyecto en segundos',
      primaryColor: '#1a73e8',
      accentColor: '#0d47a1',
      textColor: '#1f2937',
      backgroundColor: '#ffffff',
      borderRadius: 16,
      showShadow: true,
      customData: {
        basePrice: 150,
        hourlyRate: 35,
        features: [
          { label: 'Diseño Web Responsivo', price: 120, checked: true },
          { label: 'Optimización SEO Básica', price: 80, checked: false },
          { label: 'Integración WhatsApp / Contacto', price: 45, checked: true },
          { label: 'Soporte y Mantenimiento 1 mes', price: 60, checked: false }
        ],
        buttonText: 'Solicitar esta cotización'
      }
    }
  },
  {
    id: 'whatsapp-contact',
    name: 'Tarjeta de Contacto & WhatsApp',
    category: 'atencion',
    description: 'Bloque flotante o fijo para iniciar chat directo de WhatsApp con mensaje preconfigurado.',
    badge: 'Alta Conversión',
    settings: {
      title: '¿Tienes dudas sobre nuestros servicios?',
      subtitle: 'Estamos en línea para responderte al instante por WhatsApp',
      primaryColor: '#25D366',
      accentColor: '#128C7E',
      textColor: '#111827',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      showShadow: true,
      customData: {
        phoneNumber: '+5491123456789',
        representativeName: 'Atención al Cliente',
        representativeRole: 'Respuesta en menos de 10 min',
        defaultMessage: '¡Hola! Vi su página en Google Sites y me gustaría obtener más información.',
        buttonLabel: 'Chatear por WhatsApp'
      }
    }
  },
  {
    id: 'event-countdown',
    name: 'Contador Regresivo (Cuenta Atrás)',
    category: 'marketing',
    description: 'Genera urgencia para eventos, cierres de inscripciones o promociones especiales.',
    badge: 'Eventos',
    settings: {
      title: '¡Gran Lanzamiento Oficial!',
      subtitle: 'La preventa exclusiva finaliza en:',
      primaryColor: '#7c3aed',
      accentColor: '#4f46e5',
      textColor: '#ffffff',
      backgroundColor: '#0f172a',
      borderRadius: 18,
      showShadow: true,
      customData: {
        targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        ctaText: 'Reservar mi lugar ahora',
        ctaUrl: 'https://tusitio.com/registro',
        footnote: 'Cupos limitados por orden de llegada'
      }
    }
  },
  {
    id: 'faq-accordion',
    name: 'Acordeón de Preguntas Frecuentes',
    category: 'contenido',
    description: 'Organiza información compleja en preguntas desplegables elegantes que ahorran espacio vertical.',
    badge: 'Esencial',
    settings: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Resuelve tus dudas más comunes antes de comenzar',
      primaryColor: '#2563eb',
      accentColor: '#1d4ed8',
      textColor: '#1e293b',
      backgroundColor: '#ffffff',
      borderRadius: 14,
      showShadow: true,
      customData: {
        items: [
          {
            q: '¿Cómo funciona la contratación del servicio?',
            a: 'Puedes solicitarlo directamente desde el formulario web. Coordinaremos una videollamada para definir alcance y plazos.'
          },
          {
            q: '¿Cuánto tiempo tarda la entrega?',
            a: 'El tiempo promedio de entrega para proyectos estándar es de 5 a 10 días laborables.'
          },
          {
            q: '¿Ofrecen soporte y garantía?',
            a: 'Sí, todos nuestros trabajos cuentan con garantía de soporte técnico durante los primeros 30 días.'
          }
        ]
      }
    }
  },
  {
    id: 'satisfaction-survey',
    name: 'Encuesta de Satisfacción (1 a 5 Estrellas)',
    category: 'feedback',
    description: 'Mide la experiencia de tus usuarios o clientes directamente desde tu página de Google Sites.',
    badge: 'Feedback',
    settings: {
      title: 'Tu opinión es muy valiosa para nosotros',
      subtitle: '¿Cómo calificarías tu experiencia con nuestro equipo hoy?',
      primaryColor: '#f59e0b',
      accentColor: '#d97706',
      textColor: '#1f2937',
      backgroundColor: '#ffffff',
      borderRadius: 16,
      showShadow: true,
      customData: {
        thankYouMessage: '¡Muchas gracias por ayudarnos a mejorar!',
        showCommentBox: true,
        placeholder: 'Cuéntanos qué podemos mejorar o qué te gustó...',
        buttonText: 'Enviar calificación'
      }
    }
  },
  {
    id: 'announcement-banner',
    name: 'Barra de Alertas y Anuncios',
    category: 'marketing',
    description: 'Destaca avisos urgentes, novedades o cambios de horario con un diseño visualmente llamativo.',
    badge: 'Novedad',
    settings: {
      title: 'Aviso Importante para la Comunidad',
      subtitle: 'Nuevo horario de atención presencial: Lunes a Viernes de 09:00 a 18:00 hs.',
      primaryColor: '#059669',
      accentColor: '#047857',
      textColor: '#064e3b',
      backgroundColor: '#ecfdf5',
      borderRadius: 12,
      showShadow: false,
      customData: {
        tag: 'Novedad',
        actionLabel: 'Ver detalle completo →',
        actionUrl: '#'
      }
    }
  }
];
