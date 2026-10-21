import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';

import { servicesSectionStyles } from '../styles/components/Services.styles.js';

export class ServicesSection extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [servicesSectionStyles];

  render() {
    return html`
      <section id="services" class="section-services" data-anchor="services">
        <div class="services-container">
          <div class="services-header">
            <div>
              <p class="eyebrow-text">${this.i18nMsg('home.services.eyebrowText')}</p>
              <h2 class="services-title">
                ${this.i18nMsg('home.services.title')} <br />
                <em>${this.i18nMsg('home.services.subtitle')}</em>
              </h2>
            </div>
            <p class="services-description">${this.i18nMsg('home.services.description')}</p>
          </div>
          <div class="services-body">
            <article class="services-items">
              <span class="item-number">${this.i18nMsg('home.services.items.one.number')}</span>
              <h3 class="item-title">${this.i18nMsg('home.services.items.one.title')}</h3>
              <div class="item-description-wrapper">
                <p class="item-description">
                  ${this.i18nMsg('home.services.items.one.description')}
                </p>
              </div>
            </article>
            <article class="services-items">
              <span class="item-number">${this.i18nMsg('home.services.items.two.number')}</span>
              <h3 class="item-title">${this.i18nMsg('home.services.items.two.title')}</h3>
              <div class="item-description-wrapper">
                <p class="item-description">
                  ${this.i18nMsg('home.services.items.two.description')}
                </p>
              </div>
            </article>
            <article class="services-items">
              <span class="item-number">${this.i18nMsg('home.services.items.three.number')}</span>
              <h3 class="item-title">${this.i18nMsg('home.services.items.three.title')}</h3>
              <div class="item-description-wrapper">
                <p class="item-description">
                  ${this.i18nMsg('home.services.items.three.description')}
                </p>
              </div>
            </article>
            <article class="services-items">
              <span class="item-number">${this.i18nMsg('home.services.items.four.number')}</span>
              <h3 class="item-title">${this.i18nMsg('home.services.items.four.title')}</h3>
              <div class="item-description-wrapper">
                <p class="item-description">
                  ${this.i18nMsg('home.services.items.four.description')}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}
