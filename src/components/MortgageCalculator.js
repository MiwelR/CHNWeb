import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { I18nMixin } from '../i18n/i18n-mixin.js';

import { CircleCheckIcon } from '../assets/icons/circle-check.js';
import { mortgageCalculatorSectionStyles } from '../styles/components/MortgageCalculator.styles.js';

export class MortgageCalculatorSection extends I18nMixin(ScopedElementsMixin(LitElement)) {
  static styles = [mortgageCalculatorSectionStyles];

  static properties = {
    propertyValue: { type: Number, state: true },
    savingsProvided: { type: Number, state: true },
    yearsMortgage: { type: Number, state: true },
    interestRate: { type: Number, state: true },

    financingPercentage: { type: Number, state: true },
    totalMonthly: { type: Number, state: true },
    totalPropertyCost: { type: Number, state: true },
    monthlyMortgageCost: { type: Number, state: true },
    totalMortgageValue: { type: Number, state: true },
    totalMortgageCost: { type: Number, state: true },
  };

  constructor() {
    super();
    this.propertyValue = 180000;
    this.savingsProvided = 36000;
    this.yearsMortgage = 25;
    this.interestRate = 3.8;

    this.financingPercentage = 0;
    this.totalMonthly = 0;
    this.totalPropertyCost = 0;
    this.monthlyMortgageCost = 0;
    this.totalMortgageValue = 0;
    this.totalMortgageCost = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#calculateMortgage();
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (
      changedProperties.has('propertyValue') ||
      changedProperties.has('savingsProvided') ||
      changedProperties.has('yearsMortgage') ||
      changedProperties.has('interestRate')
    ) {
      this.#calculateMortgage();
    }
  }

  #formatValues(number) {
    return new Intl.NumberFormat('es-ES', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  }

  #formatInputNumbers(event) {
    const inputValue = event.target.value;
    const formatValue = inputValue.replace(/[^0-9]/g, '');
    const intValue = parseInt(formatValue);
    const isNumber = !isNaN(intValue) && Number.isInteger(intValue);

    if (!isNumber) {
      return formatValue.slice(0, -1);
    } else {
      return formatValue;
    }
  }

  #handlePropertyValueInput(event) {
    const stringValueFormated = this.#formatInputNumbers(event);
    const intValue = parseInt(stringValueFormated);

    event.target.value = stringValueFormated;
    this.propertyValue = isNaN(intValue) ? 0 : intValue;
  }

  #handleSavingsProvidedInput(event) {
    const stringValueFormated = this.#formatInputNumbers(event);
    const intValue = parseInt(stringValueFormated);

    event.target.value = stringValueFormated;
    this.savingsProvided = isNaN(intValue) ? 0 : intValue;
  }

  #handleYearsMortgageInput(event) {
    const value = parseInt(event.target.value);
    this.yearsMortgage = isNaN(value) ? 0 : value;
  }

  #handleInterestRateInput(event) {
    const value = Number(event.target.value);
    this.interestRate = isNaN(value) ? 0 : value;
  }

  #onChangePropertyValue(event) {
    event.preventDefault();
    const value = Number(event.target.value);

    if (event.target.value === '' || value < 40000) {
      event.target.value = 40000;
      this.propertyValue = 40000;
    } else {
      this.propertyValue = value;
    }
  }

  #onChangeSavingsProvidedValue(event) {
    event.preventDefault();

    if (event.target.value === '') {
      event.target.value = 0;
      this.savingsProvided = 0;
    }
  }

  #calculateMortgage() {
    const property = isNaN(this.propertyValue) ? 0 : this.propertyValue;
    const savings = isNaN(this.savingsProvided) ? 0 : this.savingsProvided;

    const monthlyInterest = this.interestRate / 1200;
    this.totalMonthly = this.yearsMortgage * 12;

    this.totalMortgageValue = Math.max(0, Number(property - savings));

    const P = this.totalMortgageValue;
    const r = monthlyInterest;
    const n = this.totalMonthly;

    if (n > 0 && r > 0 && P > 0) {
      const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      this.monthlyMortgageCost = M;
      this.totalMortgageCost = M * this.totalMonthly;
    } else {
      this.monthlyMortgageCost = 0;
      this.totalMortgageCost = 0;
    }

    this.financingPercentage = property > 0 ? (this.totalMortgageValue / property) * 100 : 0;
    this.totalPropertyCost = this.totalMortgageCost + savings;
  }

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
                  <input
                    class="field-input"
                    type="text"
                    inputmode="numeric"
                    min="40000"
                    step="1000"
                    value="${this.propertyValue}"
                    @input=${this.#handlePropertyValueInput}
                    @change=${this.#onChangePropertyValue}
                  />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.savings')}
                <span class="field-block">
                  <input
                    class="field-input"
                    type="text"
                    inputmode="numeric"
                    min="0"
                    step="1000"
                    value="${this.savingsProvided}"
                    @input=${this.#handleSavingsProvidedInput}
                    @change=${this.#onChangeSavingsProvidedValue}
                  />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.instalments')}
                <span class="field-block">
                  <input
                    class="field-input"
                    type="text"
                    inputmode="numeric"
                    min="0"
                    step="1"
                    value="${this.yearsMortgage}"
                    @input=${this.#handleYearsMortgageInput}
                  />
                  <span class="symbol"
                    >${this.i18nMsg('home.mortgageCalculator.form.symbols.years')}</span
                  >
                </span>
              </label>
              <label class="field-label">
                ${this.i18nMsg('home.mortgageCalculator.form.interest')}
                <span class="field-block">
                  <input
                    class="field-input"
                    type="text"
                    inputmode="numeric"
                    min="0"
                    step="0.01"
                    value="${this.interestRate}"
                    @input=${this.#handleInterestRateInput}
                  />
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
                    <span class="data-symbol"
                      >${this.#formatValues(this.monthlyMortgageCost)}&nbsp;€ / mes</span
                    >
                  </p>
                </div>
                <div class="extra-data">
                  <p>
                    ${this.i18nMsg('home.mortgageCalculator.form.result.capital')}
                    ${this.#formatValues(this.totalMortgageValue)}
                    ${this.i18nMsg('home.mortgageCalculator.form.symbols.euro')}
                  </p>
                  <p class="result-total">
                    ${this.i18nMsg('home.mortgageCalculator.form.result.total')}
                    ${this.#formatValues(this.totalMortgageCost)}
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
