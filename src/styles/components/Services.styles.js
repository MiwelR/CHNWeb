import { css } from 'lit';

export const servicesSectionStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #services {
    background-color: #22251f;
    color: #fff;
    padding-block: clamp(6rem, 10vw, 9rem);
  }

  .services-container {
    margin-inline: auto;
    width: min(100% - 2rem, 1280px);
    color: #fff;
  }

  .services-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(0.25rem * 8);
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

  .services-title {
    margin-top: calc(0.25rem * 5);
    max-width: 42rem;
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 0.98;
  }

  .services-title em {
    color: #69745c;
    font-weight: 400;
    font-style: italic;
  }

  .services-description {
    max-width: 24rem;
    line-height: 1.625;
    color: oklch(70.9% 0.01 56.259);
  }

  .services-body {
    color: #fff;
    margin-top: calc(0.25rem * 16);
    border-top-style: solid;
    border-top-width: 1px;
    border-color: color-mix(in oklab, #fff 15%, transparent);
  }

  .services-items {
    display: grid;
    gap: calc(0.25rem * 4);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: color-mix(in oklab, #fff 15%, transparent);
    padding-block: calc(0.25rem * 9);
    transition-property:
      color,
      background-color,
      border-color,
      outline-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      translate,
      scale,
      rotate,
      filter,
      -webkit-backdrop-filter,
      backdrop-filter,
      display,
      content-visibility,
      overlay,
      pointer-events;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .item-number {
    font-family: var(--font-display);
    font-size: 1.5rem;
    line-height: calc(2 / 1.5);
    color: #bdc7ab;
  }

  .item-title {
    font-family: var(--font-display);
    line-height: calc(2.25 / 1.875);
    font-size: 1.875rem;
    font-weight: 500;
  }

  .item-description-wrapper {
    display: flex;
    align-items: center;
    gap: calc(0.25rem * 6);
  }

  .item-description {
    max-width: 28rem;
    line-height: 1.625;
    color: oklch(70.9% 0.01 56.259);
  }

  @media (max-width: 768px) {
  }
`;
