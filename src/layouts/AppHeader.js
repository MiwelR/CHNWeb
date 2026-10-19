import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';

import { BrandLogo } from '../components/BrandLogo.js';
import { MenuIcon } from '../assets/icons/menu.js';
import { XIcon } from '../assets/icons/x.js';

import { appHeaderStyles } from '../styles/layouts/AppHeader.styles.js';

export class AppHeader extends ScopedElementsMixin(I18nMixin(LitElement)) {
  static styles = appHeaderStyles;

  static get scopedElements() {
    return {
      'brand-logo': BrandLogo,
    };
  }

  static properties = {
    mobileOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.mobileOpen = false;
  }

  _toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  _onAnchorClick(e) {
    e.preventDefault();
    const anchor = e.currentTarget.dataset.route;

    this._closeMobile();

    window.dispatchEvent(
      new CustomEvent('app:navigate-with-anchor', {
        detail: {
          path: '/',
          anchor,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  _closeMobile() {
    this.mobileOpen = false;
  }

  render() {
    return html`
      <header class="header-wrap">
        <div class="header">
          <a
            class="header-logo"
            @click=${() => {
              window.location = '/';
            }}
          >
            <brand-logo size="md" logo-type="simple"></brand-logo>
            <brand-logo size="md" logo-type="name"></brand-logo>
          </a>

          <nav class="desktop-menu" role="navigation" aria-label="main navigation">
            <a
              href="#home"
              class="desktop-menu-button"
              data-route="home"
              role="link"
              @click=${this._onAnchorClick}
            >
              ${this.i18nMsg('header.menu.home')}
            </a>
            <a
              href="#who-are-we"
              class="desktop-menu-button"
              data-route="who-are-we"
              role="link"
              @click=${this._onAnchorClick}
            >
              ${this.i18nMsg('header.menu.about')}
            </a>
            <a
              href="#services"
              class="desktop-menu-button"
              data-route="services"
              role="link"
              @click=${this._onAnchorClick}
            >
              ${this.i18nMsg('header.menu.services')}
            </a>
            <a
              href="#calculator"
              class="desktop-menu-button"
              data-route="calculator"
              role="link"
              @click=${this._onAnchorClick}
            >
              ${this.i18nMsg('header.menu.calculator')}
            </a>
            <a
              href="#contact"
              class="desktop-menu-button"
              data-route="contact"
              role="link"
              @click=${this._onAnchorClick}
            >
              ${this.i18nMsg('header.menu.contact')}
            </a>

            <div class="desktop-menu-divider"></div>
          </nav>

          <button
            class="hamburger ${this.mobileOpen ? 'burger-active' : ''}"
            @click=${this._toggleMobile}
            aria-label="open menu"
          >
            ${this.mobileOpen ? XIcon : MenuIcon}
          </button>
        </div>

        <div class="mobile-menu" style="display:${this.mobileOpen ? 'flex' : 'none'}">
          <a
            href="#home"
            class="mobile-menu-button"
            data-route="home"
            role="link"
            @click=${this._onAnchorClick}
          >
            ${this.i18nMsg('header.menu.home')}
          </a>
          <a
            href="#who-are-we"
            class="mobile-menu-button"
            data-route="who-are-we"
            role="link"
            @click=${this._onAnchorClick}
          >
            ${this.i18nMsg('header.menu.about')}
          </a>
          <a
            href="#services"
            class="mobile-menu-button"
            data-route="services"
            role="link"
            @click=${this._onAnchorClick}
          >
            ${this.i18nMsg('header.menu.services')}
          </a>
          <a
            href="#calculator"
            class="mobile-menu-button"
            data-route="calculator"
            role="link"
            @click=${this._onAnchorClick}
          >
            ${this.i18nMsg('header.menu.calculator')}
          </a>
          <a
            href="#contact"
            class="mobile-menu-button"
            data-route="contact"
            role="link"
            @click=${this._onAnchorClick}
          >
            ${this.i18nMsg('header.menu.contact')}
          </a>
        </div>
      </header>
    `;
  }
}
