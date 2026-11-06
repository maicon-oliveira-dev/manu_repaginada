document.addEventListener('DOMContentLoaded', () => {
  // A new version makes visitors choose marketing cookies again. With no
  // stored choice, `hasMarketingConsent()` is false and the control is clear.
  const consentVersion = '2026-11-04-v2';
  const consentKey = 'manu-alem-da-receita-meta-marketing-consent';
  const pixelId = '1867971887539443';
  const consent = document.querySelector('[data-cookie-consent]');
  const consentCard = document.querySelector('.cookie-consent__card');
  const consentSummary = document.querySelector('.cookie-consent__summary');
  const preferencesTrigger = document.querySelector('[data-cookie-preferences]');
  const customize = document.querySelector('[data-cookie-customize]');
  const preferences = document.querySelector('#cookie-preferences');
  const marketingToggle = document.querySelector('[data-cookie-marketing]');
  const consentDescription = document.querySelector('#cookie-consent-description');
  if (consentDescription && !document.querySelector('[data-cookie-privacy-link]')) {
    const privacyLink = document.createElement('a');
    privacyLink.href = '/campanhas/alem-da-receita-2026/privacidade/';
    privacyLink.className = 'cookie-consent__privacy-link';
    privacyLink.dataset.cookiePrivacyLink = '';
    privacyLink.textContent = 'Saiba mais sobre privacidade';
    consentDescription.insertAdjacentElement('afterend', privacyLink);
  }
  const getStoredConsent = () => { try { const stored = JSON.parse(window.localStorage.getItem(consentKey)); return stored?.version === consentVersion && typeof stored.marketing === 'boolean' ? stored : null; } catch { return null; } };
  let marketingConsent = getStoredConsent()?.marketing ?? null;
  const loadMetaPixel = () => {
    if (window.__manuMetaPixelLoaded) return;
    window.__manuMetaPixelLoaded = true;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', pixelId); window.fbq('track', 'PageView');
  };
  const hasMarketingConsent = () => marketingConsent === true;
  const createEventId = () => {
    if (typeof window.crypto?.randomUUID === 'function') return `lead-${window.crypto.randomUUID()}`;
    const bytes = new Uint32Array(4);
    window.crypto?.getRandomValues?.(bytes);
    return `lead-${Date.now().toString(36)}-${Array.from(bytes, (byte) => byte.toString(36)).join('')}`;
  };
  const showConsent = (openPreferences = false) => { if (!consent) return; consent.hidden = false; if (consentSummary) consentSummary.hidden = openPreferences; if (consentCard) consentCard.setAttribute('aria-label', openPreferences ? 'Preferências de cookies' : 'Cookies nesta campanha'); if (preferences && customize) { preferences.hidden = !openPreferences; customize.setAttribute('aria-expanded', String(openPreferences)); } if (marketingToggle) marketingToggle.checked = hasMarketingConsent(); };
  const saveConsent = (marketing) => { marketingConsent = marketing; try { window.localStorage.setItem(consentKey, JSON.stringify({ version: consentVersion, marketing })); } catch {} if (consent) consent.hidden = true; if (marketing) loadMetaPixel(); };
  if (marketingConsent === true) loadMetaPixel(); else if (marketingConsent === null) showConsent();
  document.querySelector('[data-cookie-accept]')?.addEventListener('click', () => saveConsent(true)); document.querySelector('[data-cookie-reject]')?.addEventListener('click', () => saveConsent(false)); document.querySelector('[data-cookie-save]')?.addEventListener('click', () => saveConsent(marketingToggle?.checked === true)); document.querySelector('[data-cookie-back]')?.addEventListener('click', () => showConsent(false)); customize?.addEventListener('click', () => showConsent(true)); preferencesTrigger?.addEventListener('click', () => showConsent(true));
  const form = document.querySelector('#campaign-form');
  const status = document.querySelector('#form-status');
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const whatsapp = document.querySelector('#whatsapp');
  const whatsappError = document.querySelector('#whatsapp-error');

  const formatBrazilianMobile = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const cursorPositionForDigit = (value, digitCount) => {
    if (digitCount === 0) return 0;

    let seenDigits = 0;
    for (let index = 0; index < value.length; index += 1) {
      if (/\d/.test(value[index])) seenDigits += 1;
      if (seenDigits === digitCount) return index + 1;
    }

    return value.length;
  };

  const validateWhatsApp = () => {
    if (!whatsapp) return true;

    const digits = whatsapp.value.replace(/\D/g, '');
    const isValid = /^[1-9]{2}9\d{8}$/.test(digits);
    const message = digits === '' || isValid ? '' : 'Informe um celular brasileiro com DDD e 11 dígitos.';

    whatsapp.setCustomValidity(message);
    whatsapp.setAttribute('aria-invalid', String(!isValid && digits !== ''));
    if (whatsappError) whatsappError.textContent = message;

    return isValid;
  };

  const validateEmail = () => {
    if (!email) return true;

    const hasInvalidFormat = email.value !== '' && email.validity.typeMismatch;
    const message = hasInvalidFormat ? 'Informe um endereço de e-mail válido, como seuemail@exemplo.com.' : '';

    email.setCustomValidity(message);
    email.setAttribute('aria-invalid', String(hasInvalidFormat));
    if (emailError) emailError.textContent = message;

    return !hasInvalidFormat;
  };

  if (email) {
    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);
    email.addEventListener('invalid', validateEmail);
  }

  if (whatsapp) {
    whatsapp.addEventListener('input', () => {
      const cursor = whatsapp.selectionStart ?? whatsapp.value.length;
      const digitCountBeforeCursor = whatsapp.value.slice(0, cursor).replace(/\D/g, '').length;
      const formatted = formatBrazilianMobile(whatsapp.value);

      whatsapp.value = formatted;
      const nextCursor = cursorPositionForDigit(formatted, digitCountBeforeCursor);
      whatsapp.setSelectionRange(nextCursor, nextCursor);
      validateWhatsApp();
    });

    whatsapp.addEventListener('blur', validateWhatsApp);
    whatsapp.addEventListener('invalid', validateWhatsApp);
  }

  if (form && status) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      validateEmail();
      validateWhatsApp();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submit = form.querySelector('button[type="submit"]');
      const originalLabel = submit?.textContent;
      const formData = new FormData(form);
      const marketingAccepted = hasMarketingConsent();
      const eventId = createEventId();
      formData.set('marketing_consent', marketingAccepted ? 'yes' : 'no');
      formData.set('event_id', eventId);

      status.textContent = 'Enviando sua inscrição…';
      if (submit) {
        submit.disabled = true;
        submit.textContent = 'Enviando…';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
          credentials: 'same-origin',
        });
        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.success) {
          throw new Error('Submission was not accepted.');
        }

        if (marketingAccepted && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {}, { eventID: eventId });
          await new Promise((resolve) => window.setTimeout(resolve, 500));
        }

        window.location.assign('obrigado/');
      } catch {
        status.textContent = 'Não foi possível concluir sua inscrição agora. Seus dados continuam preenchidos; tente novamente mais tarde.';
        if (submit) {
          submit.disabled = false;
          submit.textContent = originalLabel || 'QUERO PARTICIPAR GRATUITAMENTE';
        }
      }
    });
  }

  const schedule = document.querySelector('.schedule');

  if (schedule && window.matchMedia('(pointer: fine)').matches) {
    schedule.addEventListener('pointermove', (event) => {
      const bounds = schedule.getBoundingClientRect();
      schedule.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
      schedule.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
    });
  }

  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.benefit-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
      });
    });
  }
});
