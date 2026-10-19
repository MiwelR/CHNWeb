import { LitElement, html, nothing } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { I18nMixin } from '../i18n/i18n-mixin.js';
import { PhoneIcon } from '../assets/icons/phone.js';
import { MailIcon } from '../assets/icons/mail.js';
import { MapPinIcon } from '../assets/icons/map-pin.js';
import { CircleCheckIcon } from '../assets/icons/circle-check.js';
import { CircleXIcon } from '../assets/icons/circle-x.js';
import { SendIcon } from '../assets/icons/send.js';
import { SEND_FORM_ENDPOINT, EMAIL, CONTACT_LINKS } from '../utils/constants.js';

import { contactSectionStyles } from '../styles/components/Contact.styles.js';

export class ContactSection extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [contactSectionStyles];

  static properties = {
    _loading: { type: Boolean, state: true },
    _success: { type: Boolean, state: true },
    _error: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this._loading = false;
    this._success = false;
    this._error = false;
  }

  #setError(el, msg, show = false) {
    el.setCustomValidity(msg);
    if (show) el.reportValidity();
    return false;
  }

  #isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  #validateField(input, show = false) {
    const value = input.value.trim();
    input.setCustomValidity('');

    if (input.name === 'name' && !value) {
      return this.#setError(input, this.i18nMsg('home.contact.formCard.feedback.nameError'), show);
    }

    if (input.name === 'email' && !this.#isValidEmail(value)) {
      return this.#setError(input, this.i18nMsg('home.contact.formCard.feedback.emailError'), show);
    }

    if (input.name === 'message' && value.length < 10) {
      return this.#setError(input, this.i18nMsg('home.contact.formCard.feedback.msgError'), show);
    }

    return true;
  }

  #validateForm() {
    const fields = ['name', 'email', 'message'];

    for (const name of fields) {
      const input = this.shadowRoot.querySelector(`[name="${name}"]`);
      if (!this.#validateField(input, true)) {
        input.focus();
        return false;
      }
    }
    return true;
  }

  #onBlur(e) {
    this.#validateField(e.target, false);
  }

  #onInput(e) {
    const input = e.target;

    if (this.#validateField(input)) {
      input.setCustomValidity('');
    }
  }

  async #submitMail(e) {
    e.preventDefault();

    if (!this.#validateForm()) return;

    this._loading = true;
    this._error = false;

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(SEND_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!res.ok) throw new Error();

      this._success = true;
      form.reset();
    } catch {
      this._error = true;
    } finally {
      this._loading = false;

      setTimeout(() => {
        this._success = false;
        this._error = false;
      }, 10000);
    }
  }

  #renderContactForm() {
    return html`
      <form class="contact-form" @submit=${this.#submitMail} novalidate>
        <label for="name" class="label">
          ${this.i18nMsg('home.contact.formCard.labelName')}
          <input
            type="text"
            id="name"
            name="name"
            class="input"
            autocomplete="name"
            placeholder="${this.i18nMsg('home.contact.formCard.placeholderName')}"
            @blur=${this.#onBlur}
            @input=${this.#onInput}
            required
          />
        </label>

        <label for="phone" class="label">
          ${this.i18nMsg('home.contact.formCard.labelPhone')}
          <input
            type="tel"
            id="phone"
            name="phone"
            class="input"
            autocomplete="phone"
            placeholder="${this.i18nMsg('home.contact.formCard.placeholderPhone')}"
            @blur=${this.#onBlur}
            @input=${this.#onInput}
            required
          />
        </label>

        <label for="email" class="label">
          ${this.i18nMsg('home.contact.formCard.labelEmail')}
          <input
            type="email"
            id="email"
            name="email"
            class="input"
            autocomplete="email"
            placeholder="${this.i18nMsg('home.contact.formCard.placeholderEmail')}"
            @blur=${this.#onBlur}
            @input=${this.#onInput}
            required
          />
        </label>

        <label for="message" class="label">
          ${this.i18nMsg('home.contact.formCard.labelMsg')}
          <textarea
            type="text"
            id="message"
            name="message"
            class="textarea"
            autocomplete="off"
            placeholder="${this.i18nMsg('home.contact.formCard.placeholderMsg')}"
            @blur=${this.#onBlur}
            @input=${this.#onInput}
            required
          ></textarea>
        </label>
        <input type="text" name="_gotcha" style="display:none" />

        ${
          this._success
            ? html`<p class="send-notification success">
                ${CircleCheckIcon} ${this.i18nMsg('home.contact.formCard.feedback.sendSuccess')}
              </p>`
            : nothing
        }
        ${
          this._error
            ? html`<p class="send-notification error">
                ${CircleXIcon} ${this.i18nMsg('home.contact.formCard.feedback.sendError')}
              </p>`
            : nothing
        }

        <div class="button-wrapper">
          <button type="submit" class="submit-button" ?disabled=${this._loading}>
            ${
              this._loading
                ? this.i18nMsg('home.contact.formCard.feedback.loading')
                : this.i18nMsg('home.contact.formCard.button')
            }
            ${SendIcon}
          </button>
        </div>
      </form>
    `;
  }

  render() {
    return html`
      <section id="contact" class="section-contact" data-anchor="contact">
        <div class="contact-container">
          <div class="contact-header">
            <p class="eyebrow-text">${this.i18nMsg('home.contact.eyebrowText')}</p>
            <h2 class="contact-title">
              ${this.i18nMsg('home.contact.title')} <br />
              <em>${this.i18nMsg('home.contact.subtitle')}</em>
            </h2>
            <p class="contact-description">${this.i18nMsg('home.contact.description')}</p>
            <div class="contact-info">
              <a class="contact-link" href="${CONTACT_LINKS.PHONE}">${PhoneIcon}+34 699 581 730</a>
              <a class="contact-link" href="${CONTACT_LINKS.EMAIL}">${MailIcon}${EMAIL}</a>
              <p class="contact-link">
                ${MapPinIcon}${this.i18nMsg('home.contact.links.location')}
              </p>
            </div>
          </div>
          ${this.#renderContactForm()}
        </div>
      </section>
    `;
  }
}
