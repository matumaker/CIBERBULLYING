export interface CyberType {
  id: string;
  name: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  example: string;
  solution: string;
  severity: 'moderado' | 'grave' | 'crítico';
}

export interface Helpline {
  country: string;
  flag: string;
  phone: string;
  chat?: string;
  organization: string;
  website: string;
  description: string;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const CYBER_TYPES: CyberType[] = [
  {
    id: 'hostigamiento',
    name: 'Hostigamiento (Harassment)',
    iconName: 'MessageSquareWarning',
    shortDesc: 'Envío reiterado y continuo de mensajes ofensivos, insultos o amenazas a través de redes o chats.',
    fullDesc: 'Consiste en bombardear a la víctima con comentarios denigrantes, burlas o amenazas constantes por WhatsApp, mensajes directos o comentarios públicos para minar su autoestima y tranquilidad.',
    example: 'Recibir decenas de mensajes de odio en Instagram o menciones ofensivas en X (Twitter) todos los días.',
    solution: 'No contestar con agresión. Silenciar, bloquear y archivar capturas completas donde se vea el usuario y la fecha.',
    severity: 'grave'
  },
  {
    id: 'doxing',
    name: 'Doxing y Difusión de Datos',
    iconName: 'FileSearch',
    shortDesc: 'Publicación no consentida de información privada: dirección, teléfono, colegio o fotos íntimas.',
    fullDesc: 'Revelar datos personales o íntimos de una persona para que otros la hostiguen en la vida real o virtual. Suele incluir números de teléfono, domicilio o conversaciones privadas sacadas de contexto.',
    example: 'Publicar el número de celular o la dirección de alguien en un grupo público incitando a que le manden bromas pesadas.',
    solution: 'Reportar de inmediato la publicación por vulneración de privacidad en la plataforma y realizar denuncia formal ante fiscalía cibernética.',
    severity: 'crítico'
  },
  {
    id: 'suplantacion',
    name: 'Suplantación de Identidad (Impersonation)',
    iconName: 'UserX',
    shortDesc: 'Creación de cuentas falsas con fotos y nombres de la víctima para dañar su reputación.',
    fullDesc: 'El acosador crea un perfil falso en redes sociales usando la imagen y nombre de la víctima para publicar contenido comprometedor, enviar mensajes agresivos a amigos o solicitar favores en su nombre.',
    example: 'Una cuenta de TikTok o Instagram con tus fotos que publica comentarios vulgares haciéndose pasar por ti.',
    solution: 'Pedir a amigos que reporten la cuenta por "Suplantación de identidad" en la app y avisar a tus contactos que es un perfil falso.',
    severity: 'grave'
  },
  {
    id: 'exclusion',
    name: 'Exclusión y Ostracismo Digital',
    iconName: 'UsersSlash',
    shortDesc: 'Aislamiento premeditado de grupos de WhatsApp, juegos en línea o foros sociales del grupo de pares.',
    fullDesc: 'Dejar intencionadamente fuera a una persona de los canales de comunicación comunes, crear grupos paralelos para reírse de ella y pedir a los demás que no interactúen ni jueguen con ella.',
    example: 'Crear un grupo de WhatsApp de todo el curso escolar excluyendo a un solo compañero para planear eventos o burlarse.',
    solution: 'Hablar con mediadores escolares o docentes. Buscar vínculos sanos fuera de ese grupo tóxico y fortalecer la red de apoyo.',
    severity: 'moderado'
  },
  {
    id: 'ciberstalking',
    name: 'Ciberpersecución (Cyberstalking)',
    iconName: 'EyeOff',
    shortDesc: 'Monitoreo obsesivo, espionaje y acecho continuo en todos los perfiles digitales de una persona.',
    fullDesc: 'Vigilancia constante de cada publicación, comentario, ubicación y estado en línea, generando un estado permanente de miedo e intimidación psicológica.',
    example: 'Alguien que sabe exactamente a qué hora te conectas, a dónde fuiste hoy y te envía mensajes diciéndote que te está observando.',
    solution: 'Poner todas las redes en modo privado, desactivar la geolocalización, cambiar contraseñas y activar la verificación en dos pasos (2FA).',
    severity: 'crítico'
  },
  {
    id: 'sextorsion',
    name: 'Difusión Íntima No Consentida & Sextorsión',
    iconName: 'ShieldAlert',
    shortDesc: 'Amenazas de difundir imágenes o videos íntimos a cambio de dinero, más fotos o favores.',
    fullDesc: 'Chantajear a alguien con divulgar material íntimo compartido previamente en confianza o robado mediante hackeo. Es un delito grave en la mayoría de legislaciones del mundo.',
    example: 'Te exigen transferir dinero o enviar más material amenazando con reenviar fotos privadas a tus familiares o compañeros.',
    solution: 'NO pagues ni cedas al chantaje (el acosador pedirá más). Busca de inmediato a un adulto de confianza y acude a la policía de delitos cibernéticos.',
    severity: 'crítico'
  }
];

export const TEST_QUESTIONS: TestQuestion[] = [
  {
    id: 1,
    question: '¿Con qué frecuencia recibes mensajes, comentarios o etiquetas con burlas, insultos o amenazas en tus redes o chats?',
    options: [
      { text: 'Nunca o casi nunca', score: 0 },
      { text: 'Rara vez, en alguna discusión aislada', score: 1 },
      { text: 'Varias veces por semana de forma repetitiva', score: 3 },
      { text: 'A diario y por múltiples canales (chats, comentarios, juegos)', score: 5 }
    ]
  },
  {
    id: 2,
    question: '¿Alguna vez han publicado fotos, videos tuyos sin tu permiso o creado cuentas falsas con tu nombre?',
    options: [
      { text: 'No, nunca me ha ocurrido', score: 0 },
      { text: 'Subieron una foto vergonzosa pero la borraron cuando lo pedí', score: 1 },
      { text: 'Publicaron contenido privado o crearon perfiles para burlarse', score: 4 },
      { text: 'Están usando fotos o datos míos para hostigarme o extorsionarme', score: 6 }
    ]
  },
  {
    id: 3,
    question: '¿Te sientes excluido/a o apartado/a deliberadamente de grupos de WhatsApp, juegos o actividades en línea?',
    options: [
      { text: 'No, me siento incluido/a en mis grupos habituales', score: 0 },
      { text: 'A veces no me invitan, pero no parece intencional', score: 1 },
      { text: 'Sé que crearon grupos paralelos para reírse o hablar mal de mí', score: 3 },
      { text: 'Todos en mi entorno me ignoran o coordinan ataques digitales', score: 5 }
    ]
  },
  {
    id: 4,
    question: 'Cuando suena una notificación en tu teléfono o abres tus redes sociales, ¿qué sientes habitualmente?',
    options: [
      { text: 'Curiosidad normal o alegría de hablar con amigos', score: 0 },
      { text: 'Indiferencia o un poco de cansancio', score: 0 },
      { text: 'Ansiedad, palpitaciones o miedo de ver qué escribieron', score: 4 },
      { text: 'Pánico constante; prefiero apagar el teléfono por angustia', score: 6 }
    ]
  },
  {
    id: 5,
    question: '¿Alguien te ha exigido hacer cosas contra tu voluntad bajo amenaza de revelar información privada o fotos?',
    options: [
      { text: 'No, jamás', score: 0 },
      { text: 'Hubo presiones pero no amenazas explícitas', score: 2 },
      { text: 'Sí, me amenazan con contar cosas si no cumplo sus exigencias', score: 6 }
    ]
  },
  {
    id: 6,
    question: '¿Has contado lo que está pasando a algún familiar, profesor o persona de confianza?',
    options: [
      { text: 'No sufro de esto / Tengo a quién acudir con confianza', score: 0 },
      { text: 'Ya lo hablé y me están apoyando', score: 1 },
      { text: 'No se lo he dicho a nadie por miedo o vergüenza', score: 4 }
    ]
  }
];

export const HELPLINES: Helpline[] = [
  {
    country: 'Argentina',
    flag: '🇦🇷',
    phone: '102 (Línea de los Chicos) o 137 (Víctimas de Violencia)',
    chat: '+54 9 11 3179-2030 (WhatsApp Línea 137)',
    organization: 'Secretaría Nacional de Niñez, Adolescencia y Familia (SENAF)',
    website: 'https://www.argentina.gob.ar/senaf/linea102',
    description: 'Atención gratuita, confidencial y las 24 horas para niños, niñas y adolescentes en todo el país.'
  },
  {
    country: 'México',
    flag: '🇲🇽',
    phone: '55 5533 5533 (Consejo Ciudadano MX)',
    chat: '55 5533 5533 (WhatsApp Consejo Ciudadano)',
    organization: 'Consejo Ciudadano para la Seguridad y Justicia de la CDMX / Policía Cibernética',
    website: 'https://consejociudadano.mx',
    description: 'Asesoría psicológica y legal gratuita 24/7 en temas de ciberacoso, sextorsión y bullying escolar.'
  },
  {
    country: 'España',
    flag: '🇪🇸',
    phone: '017 (Tu Ayuda en Ciberseguridad - INCIBE) o 900 20 20 10 (Fundación ANAR)',
    chat: 'Chat Web en anar.org',
    organization: 'INCIBE (Instituto Nacional de Ciberseguridad) & Fundación ANAR',
    website: 'https://www.incibe.es/linea-de-ayuda-en-ciberseguridad',
    description: 'Servicio confidencial para menores y familias, disponible los 365 días del año.'
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    phone: '141 (Línea de Protección a Niños y Adolescentes ICBF)',
    chat: 'Línea WhatsApp ICBF 320 239 1685',
    organization: 'Instituto Colombiano de Bienestar Familiar & Te Protejo',
    website: 'https://www.teprotejo.org',
    description: 'Línea nacional gratuita contra el ciberacoso y vulneración de derechos de la infancia.'
  },
  {
    country: 'Chile',
    flag: '🇨🇱',
    phone: '1515 (Línea Libre) o 147 (Fono Niños Carabineros)',
    chat: 'App y Web Línea Libre',
    organization: 'Fundación Para la Confianza & Defensoría de la Niñez',
    website: 'https://linealibre.cl',
    description: 'Canal de apoyo psicológico para jóvenes atendido por psicólogos profesionales.'
  },
  {
    country: 'Perú',
    flag: '🇵🇪',
    phone: 'Línea 100 o 0800-76-888 (SíseVe Minedu)',
    chat: 'Chat 100 MIMP',
    organization: 'Ministerio de la Mujer (MIMP) y Portal SíseVe (Ministerio de Educación)',
    website: 'http://www.siseve.pe',
    description: 'Plataforma oficial contra la violencia y el acoso escolar virtual en colegios.'
  },
  {
    country: 'Internacional / Otros países',
    flag: '🌐',
    phone: 'Llama al número de emergencias local (911 / 112)',
    chat: 'StopBullying.gov (en español)',
    organization: 'Insafe / Better Internet for Kids / UNICEF',
    website: 'https://espanol.stopbullying.gov',
    description: 'Red internacional de asistencia y líneas telefónicas de protección del menor.'
  }
];

export const MYTHS_REALITIES = [
  {
    myth: '“El ciberbullying no hace tanto daño porque solo son palabras en una pantalla.”',
    reality: 'Falso. El impacto emocional del ciberacoso puede causar depresión severa, trastornos del sueño, ansiedad y bajo rendimiento escolar. Las heridas psicológicas son tan profundas como las físicas.'
  },
  {
    myth: '“Si apagas el celular o borras la red social, el problema desaparece.”',
    reality: 'Falso. Aunque desconectarse temporalmente reduce el estrés inmediato, el acoso continúa entre los compañeros y la víctima se siente aún más aislada e informada de lo que dicen a sus espaldas.'
  },
  {
    myth: '“Los acosadores en internet son invisibles y no se puede saber quiénes son.”',
    reality: 'Falso. Todo en internet deja huella digital: direcciones IP, horas de conexión, números de teléfono vinculados e identificadores de dispositivos. Las fiscalías pueden rastrear a los agresores con orden judicial.'
  },
  {
    myth: '“El que no hace nada cuando ve ciberacoso no tiene la culpa.”',
    reality: 'Falso. El silencio de los testigos legitima al acosador. Si ves que atacan a alguien y no intervienes, no denuncias o te ríes de los memes hirientes, estás alimentando el círculo del acoso.'
  }
];
