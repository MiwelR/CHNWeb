import { css } from 'lit';

export const mortgageCalculatorSectionStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #calculator {
    background-color: #ebe8de;
    color: #22251f;
    padding-block: clamp(6rem, 10vw, 9rem);
  }

  .calculator-container {
    display: grid;
    gap: calc(0.25rem * 14);
    margin-inline: auto;
    width: min(100% - 2rem, 1280px);
  }

  .eyebrow-text {
    color: #69745c;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .eyebrow-text::before {
    content: '';
    display: inline-block;
    width: 2.25rem;
    height: 1px;
    margin-right: 0.8rem;
    vertical-align: middle;
    background: currentColor;
  }

  .calculator-title {
    color: #22251f;
    margin-top: calc(0.25rem * 5);
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 0.98;
  }

  .calculator-title em {
    color: #69745c;
    font-weight: 400;
    font-style: italic;
  }

  .calculator-description {
    margin-top: calc(0.25rem * 7);
    max-width: 28rem;
    line-height: 1.625;
    color: oklch(44.4% 0.011 73.639);
  }

  .unordered-list {
    margin-top: calc(0.25rem * 9);
    line-height: calc(1.25 / 0.875);
    font-size: 0.875rem;
    color: oklch(44.4% 0.011 73.639);
  }

  .list-item {
    font-family: var(--font-sans);
    display: flex;
    align-items: center;
    gap: calc(0.25rem * 3);
    margin-block-start: calc(calc(0.25rem * 4) * 0);
    margin-block-end: calc(calc(0.25rem * 4) * calc(1 - 0));
  }

  .check-icon {
    display: grid;
    width: calc(0.25rem * 6);
    height: calc(0.25rem * 6);
    place-items: center;
    border-radius: calc(infinity * 1px);
    background-color: #69745c;
    color: #fff;
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
  }

  .calculator-body {
    background-color: #fff;
    padding: calc(0.25rem * 6);
  }

  .calculator-form {
    display: grid;
    gap: calc(0.25rem * 6);
  }

  .field-label {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    color: #22251f;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-block {
    position: relative;
    display: block;
  }

  input[type='number' i] {
    padding-block: 1px;
    padding-inline: 2px;
    padding: 0.55rem 0 0.75rem;
  }

  input:not([type='range' i], [type='checkbox' i], [type='radio' i]) {
    overflow-clip-margin: 0px !important;
    overflow: clip !important;
  }

  .field-input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #c9c7be;
    border-radius: 0;
    background: transparent;
    padding: 0.55rem 0 0.75rem;
    color: #22251f;
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: normal;
    outline: none;
    text-transform: none;
    transition: border-color 200ms ease;
    opacity: 1;
  }

  .symbol {
    position: absolute;
    right: calc(0.25rem * 0);
    bottom: calc(0.25rem * 3);
    line-height: calc(1.25 / 0.875);
    font-size: 0.875rem;
    color: oklch(70.9% 0.01 56.259);
  }

  .calculator-result {
    margin-top: calc(0.25rem * 9);
    background-color: #22251f;
    padding: calc(0.25rem * 7);
    color: #fff;
  }

  .result-wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(0.25rem * 6);
  }

  .data-title {
    font-size: 0.75rem;
    line-height: calc(1 / 0.75);
    letter-spacing: 0.18em;
    color: oklch(70.9% 0.01 56.259);
    text-transform: uppercase;
  }

  .data-quantity {
    font-family: var(--font-display);
    margin-top: calc(0.25rem * 2);
    font-size: 3rem;
    line-height: 1;
    color: #bdc7ab;
  }

  .extra-data {
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
    color: oklch(70.9% 0.01 56.259);
  }

  .result-total {
    margin-top: calc(0.25rem * 1);
  }

  .calculator-info {
    margin-top: calc(0.25rem * 4);
    font-size: 0.75rem;
    line-height: 1.625;
    color: oklch(70.9% 0.01 56.259);
  }

  @media (max-width: 768px) {
  }
`;
