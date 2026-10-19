import { LitElement, html } from 'lit';

import { I18nMixin } from '../i18n/i18n-mixin.js';
import { calculateDuration } from '../utils/date.js';
import chnAgentImage from '../assets/images/chn-agente.jpg';

import { whoAreWeSectionStyles } from '../styles/components/WhoAreWe.styles.js';

export class WhoAreWeSection extends I18nMixin(LitElement) {
  static styles = [whoAreWeSectionStyles];

  #getExperienceDuration() {
    const startDate = '2011';
    const endDate = Date.now();
    const { years } = calculateDuration(startDate, endDate);
    return years;
  }

  render() {
    return html`
      <section id="who-are-we" class="section-who-are-we" data-anchor="who-are-we">
        <div class="who-are-we-container">
          <div class="image-container">
            <div class="circle-decoration"></div>
            <img src=${chnAgentImage} class="agent-image" alt="Estate Agent Image" />
            <div class="text-decoration">
              <p class="text-image">
                Más personas. <br />
                Menos prisas.
              </p>
            </div>
          </div>
          <div class="text-container">
            <p class="eyebrow">${this.i18nMsg('home.whoAreWe.eyebrow')}</p>
            <h2 class="who-are-we-title">
              ${this.i18nMsg('home.whoAreWe.titleOne')} <br />
              <em>${this.i18nMsg('home.whoAreWe.titleTwo')}</em>
            </h2>
            <p class="who-are-we-description">${this.i18nMsg('home.whoAreWe.description1')}</p>
            <p class="who-are-we-description">${this.i18nMsg('home.whoAreWe.description2')}</p>
            <div class="who-are-we-footer">
              <div>
                <strong class="footer-text-strong">+${this.#getExperienceDuration()}</strong>
                <p class="footer-text">${this.i18nMsg('home.whoAreWe.footer.years')}</p>
              </div>
              <div>
                <strong class="footer-text-strong">100%</strong>
                <p class="footer-text">${this.i18nMsg('home.whoAreWe.footer.dedication')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
