import es from './translations/es.js';

const dictionaries = { es };
export const supportedLocales = Object.keys(dictionaries);

const STORAGE_KEY = 'app-locale';

/**
 * ⚠️ CLAVE:
 * el locale inicial se calcula UNA SOLA VEZ, de forma síncrona
 */
function getInitialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return dictionaries[saved] ? saved : 'es';
}

let currentLocale = getInitialLocale();
let messages = dictionaries[currentLocale];

const listeners = new Set();

export function getLocale() {
  return currentLocale;
}

export function getMessages() {
  return messages;
}

export function setLocale(locale) {
  if (!dictionaries[locale] || locale === currentLocale) return;

  currentLocale = locale;
  messages = dictionaries[locale];
  localStorage.setItem(STORAGE_KEY, locale);

  listeners.forEach((cb) => cb(locale));
}

export function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
