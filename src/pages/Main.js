import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';
import { HeroSection } from '../components/Hero.js';
import { WhoAreWeSection } from '../components/WhoAreWe.js';
import { ServicesSection } from '../components/Services.js';
import { MortgageCalculatorSection } from '../components/MortgageCalculator.js';
import { ContactSection } from '../components/Contact.js';
import { mainPageStyles } from '../styles/pages/Main.styles.js';

export default class MainPage extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [mainPageStyles];

  static get scopedElements() {
    return {
      'hero-section': HeroSection,
      'who-are-we-section': WhoAreWeSection,
      'services-section': ServicesSection,
      'mortgage-calculator-section': MortgageCalculatorSection,
      'contact-section': ContactSection,
    };
  }

  static properties = {
    pendingAnchor: { type: String },
  };

  constructor() {
    super();
    this.pendingAnchor = null;
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('app:scroll-to-anchor', (e) => {
      const el = this.shadowRoot.querySelector(`#${e.detail}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  async updated(changedProperties) {
    if (changedProperties.has('pendingAnchor') && this.pendingAnchor) {
      await this.updateComplete;
      const el = this.shadowRoot.querySelector(`#${this.pendingAnchor}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <hero-section id="home"></hero-section>
      <who-are-we-section id="who-are-we"></who-are-we-section>
      <services-section id="services"></services-section>
      <mortgage-calculator-section id="calculator"></mortgage-calculator-section>
      <contact-section id="contact"></contact-section>
    `;
  }
}

customElements.define('main-page', MainPage);
