import { LitElement, html } from 'lit';

import { I18nMixin } from '../i18n/i18n-mixin.js';
import { FacebookIcon } from '../assets/icons/facebook.js';
import { InstagramIcon } from '../assets/icons/instagram.js';
import { MailIcon } from '../assets/icons/mail.js';
import { CONTACT_LINKS } from '../utils/constants.js';

import { socialLinksStyles } from '../styles/components/SocialLinks.styles.js';

export class SocialLinks extends I18nMixin(LitElement) {
  static styles = [socialLinksStyles];

  static properties = {
    buttonSize: { type: String, attribute: 'button-size' },
  };

  constructor() {
    super();
    this.buttonSize = '';
  }

  render() {
    return html`
      <div class="social-links">
        <a
          class="button-links ${this.buttonSize}"
          href="${CONTACT_LINKS.FACEBOOK}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook link"
          >${FacebookIcon}</a
        >
        <a
          class="button-links ${this.buttonSize}"
          href="${CONTACT_LINKS.INSTAGRAM}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram link"
          >${InstagramIcon}</a
        >
        <a
          class="button-links ${this.buttonSize}"
          href="${CONTACT_LINKS.EMAIL}"
          rel="noopener noreferrer"
          aria-label="Email link"
          >${MailIcon}</a
        >
      </div>
    `;
  }
}
