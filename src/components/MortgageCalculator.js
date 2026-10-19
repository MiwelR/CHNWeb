import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';

import { CircleCheckIcon } from '../assets/icons/circle-check.js';
import { mortgageCalculatorSectionStyles } from '../styles/components/MortgageCalculator.styles.js';

export class MortgageCalculatorSection extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [mortgageCalculatorSectionStyles];

  render() {
    return html`
      <section id="calculator" class="section-calculator" data-anchor="calculator">
        <div class="calculator-container">
          <div class="calculator-header">
            <p class="eyebrow-text">${this.i18nMsg('home.mortgageCalculator.eyebrowText')}</p>
            <h2 class="calculator-title">
              ${this.i18nMsg('home.mortgageCalculator.title')} <br />
              <em>${this.i18nMsg('home.mortgageCalculator.subtitle')}</em>
            </h2>
            <p class="calculator-description">
              ${this.i18nMsg('home.mortgageCalculator.description')}
            </p>
            <div class="unordered-list">
              <p class="list-item">
                <span class="check-icon">${CircleCheckIcon}</span
                >${this.i18nMsg('home.mortgageCalculator.items.one')}
              </p>
              <p class="list-item">
                <span class="check-icon">${CircleCheckIcon}</span
                >${this.i18nMsg('home.mortgageCalculator.items.two')}
              </p>
              <p class="list-item">
                <span class="check-icon">${CircleCheckIcon}</span
                >${this.i18nMsg('home.mortgageCalculator.items.three')}
              </p>
            </div>
          </div>
          <div class="calculator-body">
            <div class="calculator-form">
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.price')}
                <span class="field-block">
                  <input class="field-input" type="number" min="0" step="1000" value="180000" />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.savings')}
                <span class="field-block">
                  <input class="field-input" type="number" min="0" step="1000" value="20000" />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.instalments')}
                <span class="field-block">
                  <input class="field-input" type="number" min="0" step="1" value="25" />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.years')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.interest')}
                <span class="field-block">
                  <input class="field-input" type="number" min="0" step="0.01" value="3.80" />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.percentage')}</span
                  >
                </span>
              </label>
            </div>
            <div class="calculator-result">
              <div class="result-wrapper">
                <div class="data">
                  <p class="data-title">
                    ${this.i18nMsg('home.mortgageCalculator.form.result.title')}
                  </p>
                  <p class="data-quantity">
                    <span class="data-symbol">850&nbsp;€ / mes</span>
                  </p>
                </div>
                <div class="extra-data">
                  <p>
                    ${this.i18nMsg('home.mortgageCalculator.form.result.capital')}200.000
                    ${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}
                  </p>
                  <p class="result-total">
                    ${this.i18nMsg('home.mortgageCalculator.form.result.total')}292.390
                    ${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}
                  </p>
                </div>
              </div>
            </div>
            <p class="calculator-info">${this.i18nMsg('home.mortgageCalculator.form.info')}</p>
          </div>
        </div>
      </section>
    `;
  }
}
