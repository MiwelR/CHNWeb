import { subscribe, getMessages } from './i18n-store.js';

export const I18nMixin = (Base) =>
  class extends Base {
    constructor() {
      super();
      this._messages = getMessages();
    }

    connectedCallback() {
      super.connectedCallback?.();
      this._unsubscribe = subscribe(() => {
        this._messages = getMessages();
        this.requestUpdate();
      });
    }

    disconnectedCallback() {
      this._unsubscribe?.();
      super.disconnectedCallback?.();
    }

    i18nMsg(key, vars = {}) {
      const value = key.split('.').reduce((acc, k) => acc?.[k], this._messages);

      // Si no existe la clave, devuelve la key (fallback)
      if (value === undefined) return key;

      // Si es string, aplica interpolación
      if (typeof value === 'string') {
        return value.replace(/\{(\w+)\}/g, (_, v) => (vars[v] !== undefined ? vars[v] : `{${v}}`));
      }

      // Si es array u objeto, devuélvelo tal cual
      return value;
    }
  };
