/**
 * Blueprint y contenidos pre-redactados para construir el sitio web en Google Sites
 * o incrustar componentes específicos.
 */

export interface GoogleSitesPageGuide {
  id: string;
  title: string;
  purpose: string;
  suggestedBlocks: string[];
  sampleContent: {
    heading: string;
    subheading: string;
    bodyText: string;
    highlightTip: string;
  };
}

export const GOOGLE_SITES_PAGES: GoogleSitesPageGuide[] = [
  {
    id: 'inicio',
    title: '1. Inicio / Portada',
    purpose: 'Captar la atención, transmitir empatía inmediata y ofrecer acceso a auxilio rápido.',
    suggestedBlocks: [
      'Encabezado grande con título empático',
      'Botón destacado "Necesito Ayuda Ahora"',
      'Bloque de 3 columnas: ¿Qué es?, Señales, Cómo actuar',
      'Widget incrustado de Líneas de Emergencia'
    ],
    sampleContent: {
      heading: 'El Ciberacoso No es un Juego: Rompamos el Silencio',
      subheading: 'Un espacio seguro de información, prevención y apoyo para niños, jóvenes, familias y educadores.',
      bodyText: `El ciberbullying o ciberacoso es el uso de medios digitales (redes sociales, videojuegos, mensajería instantánea) para molestar, humillar, amenazar o excluir deliberadamente a una persona. 

A diferencia del acoso tradicional, el ciberacoso puede ocurrir las 24 horas del día, perseguir a la víctima dentro de su propio hogar y viralizarse en cuestión de minutos ante cientos de espectadores.

En este sitio web encontrarás herramientas para detectar si estás pasando por una situación de acoso, consejos prácticos para guardar pruebas y todos los canales de ayuda gratuitos y confidenciales.`,
      highlightTip: 'En Google Sites, utiliza un encabezado tipo "Portada" o "Banner grande" y pon un botón con enlace directo a la página de "Líneas de Ayuda".'
    }
  },
  {
    id: 'que-es',
    title: '2. ¿Qué es y Tipos de Ciberacoso?',
    purpose: 'Educar a la comunidad sobre las diferentes formas de agresión digital con ejemplos cotidianos.',
    suggestedBlocks: [
      'Cuadro de texto con definición concisa',
      'Bloque de contenido con 3 columnas (Hostigamiento, Doxing, Suplantación)',
      'Bloque de contenido con 3 columnas (Exclusión, Ciberstalking, Sextorsión)',
      'Línea divisoria y Mitos vs. Realidades'
    ],
    sampleContent: {
      heading: 'Formas en las que se manifiesta el Ciberacoso',
      subheading: 'Conocer las tácticas del agresor es el primer paso para desactivarlas.',
      bodyText: `1. HOSTIGAMIENTO (Harassment): Envío constante de mensajes ofensivos, insultos o amenazas por WhatsApp, Discord o comentarios en TikTok e Instagram.

2. DOXING (Difusión no consentida): Revelar información privada como la dirección de tu casa, tu número de teléfono o conversaciones íntimas para humillarte públicamente.

3. SUPLANTACIÓN DE IDENTIDAD: Crear cuentas falsas usando tus fotos y tu nombre para decir barbaridades y arruinar tu reputación entre tus amigos.

4. EXCLUSIÓN DIGITAL: Dejar fuera intencionalmente a un compañero de grupos de WhatsApp de la clase o de servidores de juego para aislarlo socialmente.

5. CIBERSTALKING: Espionaje y vigilancia obsesiva de tus perfiles, fotos y ubicación que genera miedo e inseguridad constante.

6. SEXTORSIÓN O DIFUSIÓN ÍNTIMA: Chantajear amenazando con compartir fotos privadas. Recuerda: difundir material íntimo sin consentimiento es un DELITO penal en la mayoría de los países.`,
      highlightTip: 'Usa el bloque de contenido de 3 columnas de Google Sites para que cada tipo tenga un icono o imagen explicativa.'
    }
  },
  {
    id: 'test',
    title: '3. Señales de Alerta & Test',
    purpose: 'Permitir que la víctima reconozca su situación y familiares identifiquen conductas de riesgo.',
    suggestedBlocks: [
      'Cuadro de texto con síntomas comunes en la víctima',
      'Widget interactivo del Test de Autoevaluación (Incrustar mediante código)',
      'Recomendaciones según el resultado del test'
    ],
    sampleContent: {
      heading: '¿Cómo saber si alguien está sufriendo Ciberbullying?',
      subheading: 'Señales físicas y emocionales que debemos observar con atención.',
      bodyText: `SEÑALES EN LA VÍCTIMA:
• Cambios bruscos de humor: tristeza repentina, irritabilidad o desgano tras usar el teléfono.
• Secrecía extrema: ocultar la pantalla cuando alguien se acerca o apagar el móvil de golpe.
• Aislamiento social: no querer asistir a la escuela, actividades extracurriculares o salidas con amigos.
• Trastornos físicos: insomnio, pesadillas, dolor de cabeza o estómago recurrente antes de ir a clase.
• Caída en el rendimiento académico y pérdida de interés en aficiones.

SEÑALES EN EL AGRESOR:
• Risa burlona mientras teclea en el móvil o tableta.
• Uso de cuentas secundarias ('cuentas fake') para interactuar en redes.
• Falta de empatía hacia otros y actitud desafiante cuando se habla de normas de convivencia.`,
      highlightTip: 'Aquí puedes usar el código HTML de nuestro Test Interactivo para que los alumnos lo respondan directamente en tu Google Sites.'
    }
  },
  {
    id: 'protocolo',
    title: '4. Protocolo: ¿Qué hacer paso a paso?',
    purpose: 'Dar una guía de acción clara, sin pánico y con valor legal para guardar evidencia.',
    suggestedBlocks: [
      'Pasos numerados del 1 al 4 (No responder, Guardar pruebas, Bloquear, Contar)',
      'Caja de advertencia: Cómo sacar capturas de pantalla válidas',
      'Consejos para espectadores/testigos (No seas cómplice)'
    ],
    sampleContent: {
      heading: 'Protocolo de Emergencia ante el Ciberacoso',
      subheading: '4 pasos esenciales para protegerte y detener la agresión.',
      bodyText: `PASO 1: NO RESPONDAS CON AGRESIONES
El agresor busca tu reacción, tu enojo o tu desesperación. Si respondes con insultos, le das material para justificar su ataque o hacerte quedar como el atacante. Respira hondo y sal de la app.

PASO 2: GUARDA EVIDENCIA DE TODO
Las palabras se borran, pero las pruebas quedan:
• Toma capturas de pantalla donde se vea: fecha, hora, nombre de usuario (@usuario) y número telefónico completo.
• No recortes la imagen: debe verse toda la pantalla del teléfono o navegador web.
• Guarda los enlaces directos a las publicaciones o perfiles agresores.

PASO 3: BLOQUEA Y DENUNCIA EN LA RED SOCIAL
Utiliza las herramientas nativas de Instagram, TikTok, WhatsApp, Facebook, Roblox o Discord para "Reportar por acoso" y luego bloquear al usuario. Si crea otra cuenta, vuelve a guardar prueba y reportar.

PASO 4: CUÉNTALO DE INMEDIATO
El mayor aliado del ciberacoso es el SILENCIO. Habla con tus padres, con un profesor de confianza, con el psicólogo escolar o llama a las líneas de ayuda gratuitas. NUNCA estás solo/a.`,
      highlightTip: 'Resalta el texto con estilo de formato "Destacado 1" o "Destacado 2" en Google Sites para que resalte la sección de pruebas.'
    }
  },
  {
    id: 'familias',
    title: '5. Guía para Familias y Docentes',
    purpose: 'Orientar a adultos sobre cómo acompañar sin culpabilizar ni invadir la privacidad torpemente.',
    suggestedBlocks: [
      'Reglas de oro para padres (Por qué no quitar el móvil)',
      'Protocolo escolar de convivencia escolar',
      'Actividades y talleres sugeridos para el aula'
    ],
    sampleContent: {
      heading: 'El rol de los Adultos: Escuchar sin Juzgar',
      subheading: 'Estrategias pedagógicas y afectivas para contener a los jóvenes.',
      bodyText: `REGLA DE ORO PARA PADRES: NUNCA CASTIGUES QUITANDO EL CELULAR
Cuando un hijo cuenta que lo acosan en internet y los padres responden quitándole el teléfono, el menor siente que el castigado es él y no el acosador. Como consecuencia, jamás volverá a pedir ayuda. La respuesta debe ser de contención, validación emocional y búsqueda conjunta de soluciones.

CÓMO ACTUAR DESDE LA ESCUELA:
• Activar el protocolo de convivencia digital de forma inmediata, sin minimizar como "cosas de chicos".
• Cuidar la confidencialidad de la víctima para evitar represalias.
• Trabajar con el grupo de espectadores: la mayoría rechaza el ciberacoso en privado pero calla por miedo.
• Crear un buzón anónimo (físico o digital con Google Forms) para reportar situaciones de acoso en el aula.`,
      highlightTip: 'Si tu escuela usa Google Workspace for Education, puedes incrustar un Formulario de Google como buzón anónimo en esta página.'
    }
  },
  {
    id: 'ayuda',
    title: '6. Líneas de Ayuda y Denuncia',
    purpose: 'Proporcionar números de contacto oficiales, gratuitos y confidenciales disponibles las 24 horas.',
    suggestedBlocks: [
      'Directorio de teléfonos por país (Argentina, México, España, Colombia, etc.)',
      'Instrucciones para acudir a la Policía Cibernética / Fiscalía',
      'Formulario de contacto o enlace al orientador de la institución'
    ],
    sampleContent: {
      heading: 'Canales Oficiales de Asistencia Gratuita',
      subheading: 'Profesionales disponibles para escucharte, orientarte y protegerte las 24 horas.',
      bodyText: `ARGENTINA:
• Línea 102 (Línea de los Chicos): Gratuita y confidencial en todo el país.
• Línea 137 y WhatsApp: +54 9 11 3179-2030 (Acompañamiento a víctimas de violencia).

MÉXICO:
• Consejo Ciudadano MX: 55 5533 5533 (Llamadas y WhatsApp 24/7).
• Policía Cibernética de la SSC: 55 5242 5100 ext. 5086.

ESPAÑA:
• Línea 017 de INCIBE (Tu ayuda en Ciberseguridad): Gratuita y confidencial.
• Fundación ANAR: 900 20 20 10 (Especialistas en infancia y juventud).

COLOMBIA:
• Línea 141 del ICBF (Protección de niños, niñas y adolescentes).
• Portal Te Protejo: www.teprotejo.org (Denuncias virtuales).

CHILE:
• Línea Libre: 1515 (Psicólogos especializados para jóvenes).
• Fono Niños Carabineros: 147.

PERÚ:
• Línea 100 del MIMP y Portal SíseVe del Ministerio de Educación (www.siseve.pe).`,
      highlightTip: 'Crea botones con enlaces directos tipo tel:102 o enlaces de WhatsApp para que en móviles marquen con un solo toque.'
    }
  }
];

/**
 * Genera el código HTML embebible de un Botón de Pánico / SOS para Google Sites
 */
export function generateSosPanicWidget(): string {
  return `<!-- BOTÓN SOS CIBERBULLYING PARA GOOGLE SITES -->
<div style="
  max-width: 580px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #1e1b4b, #0f172a);
  color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(239, 68, 68, 0.4);
  box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.2);
  box-sizing: border-box;
">
  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
    <div style="width: 44px; height: 44px; border-radius: 50%; background: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; box-shadow: 0 0 15px rgba(239,68,68,0.6);">
      🆘
    </div>
    <div>
      <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #ffffff;">¿Estás sufriendo Ciberacoso ahora mismo?</h3>
      <p style="margin: 2px 0 0; font-size: 13px; color: #fca5a5;">Guía de primeros auxilios digitales</p>
    </div>
  </div>

  <p style="font-size: 14px; line-height: 1.5; color: #e2e8f0; margin-bottom: 16px;">
    No estás solo/a y no es tu culpa. Toma aire y sigue estos 3 pasos de protección inmediata:
  </p>

  <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
    <div style="background: rgba(255,255,255,0.06); padding: 10px 14px; border-radius: 8px; font-size: 13px; display: flex; align-items: center; gap: 10px;">
      <span style="color: #ef4444; font-weight: bold;">1.</span>
      <span><strong>NO respondas</strong> al agresor. Bloquéalo en la plataforma.</span>
    </div>
    <div style="background: rgba(255,255,255,0.06); padding: 10px 14px; border-radius: 8px; font-size: 13px; display: flex; align-items: center; gap: 10px;">
      <span style="color: #ef4444; font-weight: bold;">2.</span>
      <span><strong>Saca captura de pantalla</strong> de todo (con fecha, hora y usuario).</span>
    </div>
    <div style="background: rgba(255,255,255,0.06); padding: 10px 14px; border-radius: 8px; font-size: 13px; display: flex; align-items: center; gap: 10px;">
      <span style="color: #ef4444; font-weight: bold;">3.</span>
      <span><strong>Cuéntaselo a un adulto</strong> de confianza o llama gratis a las líneas de ayuda.</span>
    </div>
  </div>

  <a href="https://espanol.stopbullying.gov" target="_blank" rel="noopener noreferrer" style="
    display: block;
    text-align: center;
    background: #ef4444;
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  ">
    Ver Líneas de Ayuda Telefónica Gratuitas →
  </a>
</div>`;
}

/**
 * Genera el código HTML embebible del Test de Ciberbullying para Google Sites
 */
export function generateInteractiveTestWidget(): string {
  return `<!-- TEST INTERACTIVO DE CIBERBULLYING PARA GOOGLE SITES -->
<div id="gs-cyber-test" style="
  max-width: 600px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #ffffff;
  color: #1e293b;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);
  box-sizing: border-box;
">
  <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; margin-bottom: 18px;">
    <span style="font-size: 11px; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px;">Autoevaluación Confidencial</span>
    <h3 style="margin: 4px 0 0; font-size: 20px; font-weight: 800; color: #0f172a;">Test: ¿Estás viviendo Ciberacoso?</h3>
    <p style="margin: 4px 0 0; font-size: 13px; color: #64748b;">Responde con sinceridad. Tus respuestas no se guardan en ningún servidor.</p>
  </div>

  <div id="gs-test-form">
    <div style="margin-bottom: 16px;">
      <p style="font-size: 14px; font-weight: 600; margin: 0 0 8px;">1. ¿Recibes mensajes o comentarios hirientes de forma repetitiva?</p>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q1" value="0" checked style="accent-color: #2563eb;"> No, nunca o muy rara vez
      </label>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q1" value="3" style="accent-color: #2563eb;"> Sí, varias veces por semana
      </label>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q1" value="5" style="accent-color: #2563eb;"> Sí, todos los días y por diferentes aplicaciones
      </label>
    </div>

    <div style="margin-bottom: 16px;">
      <p style="font-size: 14px; font-weight: 600; margin: 0 0 8px;">2. ¿Han subido fotos tuyas sin permiso o creado perfiles falsos con tu nombre?</p>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q2" value="0" checked style="accent-color: #2563eb;"> No, nunca
      </label>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q2" value="4" style="accent-color: #2563eb;"> Sí, publicaron cosas vergonzosas o perfiles falsos
      </label>
    </div>

    <div style="margin-bottom: 20px;">
      <p style="font-size: 14px; font-weight: 600; margin: 0 0 8px;">3. ¿Sientes miedo, angustia o dolor de estómago al sonar las notificaciones?</p>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q3" value="0" checked style="accent-color: #2563eb;"> No, uso el teléfono con tranquilidad
      </label>
      <label style="display: block; margin-bottom: 6px; font-size: 13px; cursor: pointer;">
        <input type="radio" name="q3" value="4" style="accent-color: #2563eb;"> Sí, siento ansiedad o miedo constante
      </label>
    </div>

    <button type="button" onclick="gsCalculateCyberScore()" style="
      width: 100%;
      background: #2563eb;
      color: #ffffff;
      border: none;
      padding: 12px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
    ">
      Ver Mi Evaluación y Recomendaciones
    </button>
  </div>

  <div id="gs-test-result" style="display: none; padding-top: 10px;">
    <div id="gs-result-card" style="padding: 16px; border-radius: 10px; margin-bottom: 16px;"></div>
    <button type="button" onclick="gsResetCyberTest()" style="
      background: #e2e8f0;
      color: #334155;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
    ">Reiniciar Test</button>
  </div>
</div>

<script>
  function gsCalculateCyberScore() {
    var total = 0;
    var radios = document.querySelectorAll('#gs-test-form input[type="radio"]:checked');
    radios.forEach(function(r) { total += parseInt(r.value, 10); });
    
    document.getElementById('gs-test-form').style.display = 'none';
    var resDiv = document.getElementById('gs-test-result');
    var card = document.getElementById('gs-result-card');
    resDiv.style.display = 'block';

    if (total === 0) {
      card.style.background = '#ecfdf5';
      card.style.border = '1px solid #10b981';
      card.innerHTML = '<h4 style="color: #065f46; margin: 0 0 6px; font-size: 16px;">✓ Situación Segura</h4><p style="color: #047857; margin: 0; font-size: 13px;">No presentas indicadores significativos de ciberacoso. Sigue cuidando tu privacidad y apoya a quienes lo necesiten.</p>';
    } else if (total <= 4) {
      card.style.background = '#fffbeb';
      card.style.border = '1px solid #f59e0b';
      card.innerHTML = '<h4 style="color: #92400e; margin: 0 0 6px; font-size: 16px;">⚠️ Señales de Alerta Temprana</h4><p style="color: #b45309; margin: 0; font-size: 13px;">Hay situaciones incómodas o agresiones aisladas. Configura tus redes en privado, no contestes con enojo y habla con un adulto.</p>';
    } else {
      card.style.background = '#fef2f2';
      card.style.border = '1px solid #ef4444';
      card.innerHTML = '<h4 style="color: #991b1b; margin: 0 0 6px; font-size: 16px;">🚨 Posible Situación de Ciberacoso Activo</h4><p style="color: #b91c1c; margin: 0; font-size: 13px;"><strong>No es tu culpa y no estás solo/a.</strong> Guarda capturas de pantalla de todo, bloquea a los agresores y avisa de inmediato a tus padres, profesores o a la línea 102 / 017.</p>';
    }
  }

  function gsResetCyberTest() {
    document.getElementById('gs-test-form').style.display = 'block';
    document.getElementById('gs-test-result').style.display = 'none';
  }
</script>`;
}
