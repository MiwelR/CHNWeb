import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { I18nMixin } from '../i18n/i18n-mixin.js';
import { BrandLogo } from '../components/BrandLogo.js';
import { CONTACT_LINKS } from '../utils/constants.js';

import { FacebookIcon } from '../assets/icons/facebook.js';
import { InstagramIcon } from '../assets/icons/instagram.js';
import { appFooterStyles } from '../styles/layouts/AppFooter.styles.js';

export class AppFooter extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [appFooterStyles];

  static get scopedElements() {
    return {
      'brand-logo': BrandLogo,
    };
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  render() {
    return html` <footer class="footer">
      <div class="footer-container">
        <div class="top-section">
          <div>
            <a href="/" class="footer-logo" aria-label="CHN Inmobiliaria y Gestión, inicio">
              <brand-logo size="md" logo-type="simple"></brand-logo>
              <brand-logo size="md" logo-type="name"></brand-logo>
            </a>
            <p class="footer-text">${this.i18nMsg('footer.text')}</p>
          </div>
          <div>
            <p class="footer-follow-me">${this.i18nMsg('footer.follow')}</p>
            <div class="follow-icons">
              <a
                class="button-link"
                href="${CONTACT_LINKS.FACEBOOK}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook link"
                >${FacebookIcon}</a
              >
              <a
                class="button-link"
                href="${CONTACT_LINKS.INSTAGRAM}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram link"
                >${InstagramIcon}</a
              >
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <p class="copyright-text">
            ${this.i18nMsg('footer.copyright').replace('{year}', this.year)}
          </p>
        </div>
      </div>
    </footer>`;
  }
}
