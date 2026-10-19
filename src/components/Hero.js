import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';

import chnBackground from '../assets/images/chn-background.jpg';
import { ArrowRightIcon } from '../assets/icons/arrow-right.js';
import { SocialLinks } from './SocialLinks.js';

import { heroSectionStyles } from '../styles/components/Hero.styles.js';

export class HeroSection extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = heroSectionStyles;

  static get scopedElements() {
    return {
      'social-links': SocialLinks,
    };
  }

  #onAnchorClick(anchor) {
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

  render() {
    return html`
      <section id="home" class="section-home">
        <div class="background-wrapper">
          <img src=${chnBackground} class="background-image" alt="Background Image" />
          <div class="background-decorator"></div>
        </div>
        <div class="content-wrapper">
          <p class="hero-intro">${this.i18nMsg('home.hero.intro')}</p>
          <h1 class="hero-title">
            ${this.i18nMsg('home.hero.title')}
            <br />
            <em class="hero-subtitle">${this.i18nMsg('home.hero.subtitle')}</em>
          </h1>
          <p class="hero-paragraph">${this.i18nMsg('home.hero.paragraph')}</p>
          <div class="hero-cta">
            <button class="primary-button" @click=${() => this.#onAnchorClick('contact')}>
              ${this.i18nMsg('home.hero.primaryButton')} ${ArrowRightIcon}
            </button>
            <button class="secondary-button" @click=${() => this.#onAnchorClick('services')}>
              ${this.i18nMsg('home.hero.secondaryButton')}
            </button>
          </div>
          <social-links></social-links>
        </div>
      </section>
    `;
  }
}
