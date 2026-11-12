import { WidgetConfig } from '../data/widgetPresets';

/**
 * Generates ready-to-paste HTML/CSS/JS code specifically engineered for Google Sites "Embed Code" (Insertar código).
 * - Fully responsive with container queries or flex/grid
 * - Zero external CDN requirements (so it loads reliably inside Google Sites sandboxed iframes)
 * - Safe typography using system font stacks compatible with Google Fonts
 */
export function generateGoogleSitesEmbedCode(widget: WidgetConfig): string {
  const { settings, id } = widget;
  const shadow = settings.showShadow
    ? 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);'
    : 'border: 1px solid rgba(0, 0, 0, 0.08);';

  if (id === 'quote-calculator') {
    const features = widget.settings.customData?.features || [];
    const basePrice = widget.settings.customData?.basePrice ?? 150;
    const buttonText = widget.settings.customData?.buttonText || 'Solicitar esta cotización';

    return `<!-- ============================================== -->
<!-- WIDGET GENERADO PARA GOOGLE SITES: COTIZADOR    -->
<!-- Instrucciones: En Google Sites haz clic en:     -->
<!-- "Insertar" > "<> Incrustar" > "Código para insertar" -->
<!-- ============================================== -->
<div id="gs-quote-widget" style="
  max-width: 640px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: 24px;
  ${shadow}
  box-sizing: border-box;
">
  <div style="border-bottom: 1px solid rgba(0,0,0,0.08); padding-bottom: 16px; margin-bottom: 20px;">
    <h3 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: ${settings.textColor};">${settings.title}</h3>
    <p style="margin: 0; font-size: 14px; opacity: 0.75;">${settings.subtitle}</p>
  </div>

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; opacity: 0.8;">
      Selecciona los servicios requeridos:
    </label>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${features
        .map(
          (f: any, i: number) => `
      <label style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        background: rgba(0,0,0,0.03);
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
      " onmouseover="this.style.borderColor='${settings.primaryColor}'" onmouseout="this.style.borderColor='rgba(0,0,0,0.06)'">
        <span style="display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 500;">
          <input type="checkbox" class="gs-calc-item" data-price="${f.price}" ${f.checked ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: ${settings.primaryColor}; cursor: pointer;" onchange="gsUpdateTotal()">
          ${f.label}
        </span>
        <span style="font-weight: 700; font-size: 14px; color: ${settings.primaryColor};">+$${f.price}</span>
      </label>`
        )
        .join('')}
    </div>
  </div>

  <div style="
    background: linear-gradient(135deg, ${settings.primaryColor}15, ${settings.accentColor}25);
    border: 1px solid ${settings.primaryColor}40;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  ">
    <div>
      <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.8;">Presupuesto Estimado</span>
      <span style="font-size: 28px; font-weight: 800; color: ${settings.accentColor};" id="gs-total-display">$0</span>
    </div>
    <span style="font-size: 12px; opacity: 0.7; text-align: right; max-width: 140px;">*Precio orientativo sujeto a especificaciones finales</span>
  </div>

  <button onclick="gsRequestQuote()" style="
    width: 100%;
    background-color: ${settings.primaryColor};
    color: #ffffff;
    border: none;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px ${settings.primaryColor}50;
    transition: transform 0.15s, opacity 0.15s;
  " onmouseover="this.style.opacity='0.92'" onmouseout="this.style.opacity='1'">
    ${buttonText}
  </button>
</div>

<script>
  (function() {
    var basePrice = ${basePrice};
    window.gsUpdateTotal = function() {
      var checkboxes = document.querySelectorAll('.gs-calc-item');
      var total = basePrice;
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          total += Number(cb.getAttribute('data-price') || 0);
        }
      });
      var display = document.getElementById('gs-total-display');
      if (display) {
        display.textContent = '$' + total.toLocaleString();
      }
    };
    window.gsRequestQuote = function() {
      var total = document.getElementById('gs-total-display').textContent;
      alert('¡Excelente! Presupuesto estimado: ' + total + '. Puedes conectar este botón a tu formulario o WhatsApp.');
    };
    gsUpdateTotal();
  })();
</script>`;
  }

  if (id === 'whatsapp-contact') {
    const data = widget.settings.customData || {};
    const phone = data.phoneNumber || '+5491123456789';
    const repName = data.representativeName || 'Atención al Cliente';
    const repRole = data.representativeRole || 'En línea ahora';
    const msg = encodeURIComponent(data.defaultMessage || 'Hola, me gustaría más información.');
    const label = data.buttonLabel || 'Chatear por WhatsApp';

    return `<!-- WIDGET WHATSAPP PARA GOOGLE SITES -->
<div style="
  max-width: 480px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: 24px;
  ${shadow}
  box-sizing: border-box;
">
  <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
    <div style="
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #25D366;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 26px;
      box-shadow: 0 4px 10px rgba(37, 211, 102, 0.4);
      position: relative;
    ">
      💬
      <span style="
        position: absolute;
        bottom: 2px;
        right: 2px;
        width: 12px;
        height: 12px;
        background-color: #10b981;
        border: 2px solid #ffffff;
        border-radius: 50%;
      "></span>
    </div>
    <div>
      <h4 style="margin: 0; font-size: 17px; font-weight: 700; color: ${settings.textColor};">${repName}</h4>
      <p style="margin: 2px 0 0; font-size: 13px; color: #16a34a; font-weight: 500;">● ${repRole}</p>
    </div>
  </div>

  <div style="margin-bottom: 20px;">
    <h3 style="margin: 0 0 6px; font-size: 18px; font-weight: 700;">${settings.title}</h3>
    <p style="margin: 0; font-size: 14px; opacity: 0.75; line-height: 1.4;">${settings.subtitle}</p>
  </div>

  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${msg}" target="_blank" rel="noopener noreferrer" style="
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${settings.primaryColor};
    color: #ffffff;
    text-decoration: none;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 4px 14px ${settings.primaryColor}60;
    transition: opacity 0.2s;
  ">
    <span>${label}</span>
    <span style="font-size: 18px;">↗</span>
  </a>
</div>`;
  }

  if (id === 'event-countdown') {
    const data = widget.settings.customData || {};
    const targetDate = data.targetDate || '2026-12-31';
    const ctaText = data.ctaText || 'Reservar mi lugar ahora';
    const ctaUrl = data.ctaUrl || '#';
    const footnote = data.footnote || 'Cupos limitados por orden de llegada';

    return `<!-- WIDGET CONTADOR REGRESIVO PARA GOOGLE SITES -->
<div id="gs-countdown-box" style="
  max-width: 600px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: 30px 24px;
  text-align: center;
  ${shadow}
  box-sizing: border-box;
">
  <span style="
    display: inline-block;
    padding: 4px 12px;
    background: ${settings.primaryColor}30;
    color: ${settings.primaryColor};
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 12px;
  ">⏳ Cuenta Regresiva</span>

  <h2 style="margin: 0 0 8px; font-size: 22px; font-weight: 800;">${settings.title}</h2>
  <p style="margin: 0 0 24px; font-size: 14px; opacity: 0.8;">${settings.subtitle}</p>

  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px;" id="gs-timer-units">
    <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px 14px; min-width: 60px;">
      <span style="font-size: 26px; font-weight: 800; display: block;" id="gs-cd-days">00</span>
      <span style="font-size: 11px; text-transform: uppercase; opacity: 0.7;">Días</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px 14px; min-width: 60px;">
      <span style="font-size: 26px; font-weight: 800; display: block;" id="gs-cd-hours">00</span>
      <span style="font-size: 11px; text-transform: uppercase; opacity: 0.7;">Horas</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px 14px; min-width: 60px;">
      <span style="font-size: 26px; font-weight: 800; display: block;" id="gs-cd-minutes">00</span>
      <span style="font-size: 11px; text-transform: uppercase; opacity: 0.7;">Min</span>
    </div>
    <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 12px 14px; min-width: 60px;">
      <span style="font-size: 26px; font-weight: 800; display: block; color: ${settings.primaryColor};" id="gs-cd-seconds">00</span>
      <span style="font-size: 11px; text-transform: uppercase; opacity: 0.7;">Seg</span>
    </div>
  </div>

  <a href="${ctaUrl}" target="_blank" rel="noopener noreferrer" style="
    display: inline-block;
    background: linear-gradient(135deg, ${settings.primaryColor}, ${settings.accentColor});
    color: #ffffff;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 700;
    box-shadow: 0 4px 15px ${settings.primaryColor}50;
  ">${ctaText}</a>

  <p style="margin: 12px 0 0; font-size: 12px; opacity: 0.6;">${footnote}</p>
</div>

<script>
  (function() {
    var target = new Date("${targetDate}T23:59:59").getTime();
    function tick() {
      var now = new Date().getTime();
      var distance = target - now;
      if (distance < 0) distance = 0;
      var d = Math.floor(distance / (1000 * 60 * 60 * 24));
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);
      var elD = document.getElementById('gs-cd-days');
      var elH = document.getElementById('gs-cd-hours');
      var elM = document.getElementById('gs-cd-minutes');
      var elS = document.getElementById('gs-cd-seconds');
      if (elD) elD.textContent = d < 10 ? '0' + d : d;
      if (elH) elH.textContent = h < 10 ? '0' + h : h;
      if (elM) elM.textContent = m < 10 ? '0' + m : m;
      if (elS) elS.textContent = s < 10 ? '0' + s : s;
    }
    tick();
    setInterval(tick, 1000);
  })();
</script>`;
  }

  if (id === 'faq-accordion') {
    const items = widget.settings.customData?.items || [];
    return `<!-- ACORDEÓN FAQ PARA GOOGLE SITES -->
<div style="
  max-width: 650px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: 24px;
  ${shadow}
  box-sizing: border-box;
">
  <div style="margin-bottom: 20px;">
    <h3 style="margin: 0 0 6px; font-size: 20px; font-weight: 700; color: ${settings.textColor};">${settings.title}</h3>
    <p style="margin: 0; font-size: 14px; opacity: 0.75;">${settings.subtitle}</p>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${items
      .map(
        (it: any, idx: number) => `
    <details style="
      background: rgba(0,0,0,0.02);
      border: 1px solid rgba(0,0,0,0.08);
      border-radius: 8px;
      overflow: hidden;
      padding: 14px 16px;
      cursor: pointer;
    ">
      <summary style="font-weight: 600; font-size: 15px; color: ${settings.primaryColor}; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
        <span>${it.q}</span>
        <span style="font-size: 16px;">▾</span>
      </summary>
      <p style="margin: 12px 0 0; font-size: 14px; line-height: 1.5; opacity: 0.85; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 10px;">
        ${it.a}
      </p>
    </details>`
      )
      .join('')}
  </div>
</div>`;
  }

  if (id === 'satisfaction-survey') {
    const data = widget.settings.customData || {};
    return `<!-- ENCUESTA DE SATISFACCIÓN PARA GOOGLE SITES -->
<div id="gs-survey-card" style="
  max-width: 520px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-radius: ${settings.borderRadius}px;
  padding: 24px;
  text-align: center;
  ${shadow}
  box-sizing: border-box;
">
  <h3 style="margin: 0 0 6px; font-size: 18px; font-weight: 700;">${settings.title}</h3>
  <p style="margin: 0 0 18px; font-size: 13px; opacity: 0.75;">${settings.subtitle}</p>

  <div id="gs-star-container" style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; font-size: 32px; cursor: pointer;">
    <span onclick="gsSetRating(1)" class="gs-star" data-val="1">★</span>
    <span onclick="gsSetRating(2)" class="gs-star" data-val="2">★</span>
    <span onclick="gsSetRating(3)" class="gs-star" data-val="3">★</span>
    <span onclick="gsSetRating(4)" class="gs-star" data-val="4">★</span>
    <span onclick="gsSetRating(5)" class="gs-star" data-val="5">★</span>
  </div>

  <textarea id="gs-feedback-comment" placeholder="${data.placeholder || 'Escribe tu opinión...'}" style="
    width: 100%;
    box-sizing: border-box;
    padding: 10px 12px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 8px;
    font-size: 13px;
    resize: vertical;
    min-height: 70px;
    margin-bottom: 16px;
    font-family: inherit;
  "></textarea>

  <button onclick="gsSubmitSurvey()" style="
    width: 100%;
    background-color: ${settings.primaryColor};
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  ">${data.buttonText || 'Enviar'}</button>

  <div id="gs-survey-success" style="display: none; padding: 15px; color: #15803d; font-weight: 600; font-size: 14px;">
    ✓ ${data.thankYouMessage || '¡Gracias por tu respuesta!'}
  </div>
</div>

<script>
  (function() {
    var selected = 5;
    window.gsSetRating = function(n) {
      selected = n;
      var stars = document.querySelectorAll('.gs-star');
      stars.forEach(function(s, idx) {
        s.style.color = idx < n ? '${settings.primaryColor}' : '#d1d5db';
      });
    };
    window.gsSubmitSurvey = function() {
      document.getElementById('gs-star-container').style.display = 'none';
      document.getElementById('gs-feedback-comment').style.display = 'none';
      event.target.style.display = 'none';
      document.getElementById('gs-survey-success').style.display = 'block';
    };
    gsSetRating(5);
  })();
</script>`;
  }

  // Fallback: Announcement banner
  const data = widget.settings.customData || {};
  return `<!-- BANNER DE ANUNCIOS PARA GOOGLE SITES -->
<div style="
  max-width: 800px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: ${settings.backgroundColor};
  color: ${settings.textColor};
  border-left: 4px solid ${settings.primaryColor};
  border-radius: ${settings.borderRadius}px;
  padding: 16px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  ${shadow}
">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="
      background-color: ${settings.primaryColor};
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
    ">${data.tag || 'Aviso'}</span>
    <div>
      <h4 style="margin: 0 0 2px; font-size: 15px; font-weight: 700; color: ${settings.textColor};">${settings.title}</h4>
      <p style="margin: 0; font-size: 13px; opacity: 0.85;">${settings.subtitle}</p>
    </div>
  </div>
  <a href="${data.actionUrl || '#'}" style="
    color: ${settings.primaryColor};
    font-weight: 700;
    text-decoration: none;
    font-size: 13px;
    padding: 6px 12px;
    border: 1px solid ${settings.primaryColor}50;
    border-radius: 6px;
    background: #ffffff;
  ">${data.actionLabel || 'Ver más →'}</a>
</div>`;
}
