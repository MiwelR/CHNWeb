import { css } from 'lit';

export const whoAreWeSectionStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
    font-size: 1rem;
    font-weight: 500;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-bottom: var(--space24);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: var(--space16);
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: var(--space12);
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: var(--space16);
  }

  #who-are-we {
    font-family: var(--font-sans);
    color: #22251f;
    background-color: #f6f3eb;
    padding-block: clamp(6rem, 10vw, 9rem);
  }

  .who-are-we-container {
    display: grid;
    align-items: center;
    gap: calc(0.25rem * 14);
    width: min(100% - 2rem, 1280px);
    margin-inline: auto;
  }

  .image-container {
    position: relative;
    margin-inline: auto;
    max-width: 36rem;
  }

  .circle-decoration {
    position: absolute;
    top: calc(0.25rem * -8);
    left: calc(0.25rem * -8);
    width: calc(0.25rem * 40);
    height: calc(0.25rem * 40);
    border-style: solid;
    border-width: 1px;
    border-color: color-mix(in oklab, #69745c 40%, transparent);
    border-radius: calc(infinity * 1px);
  }

  .agent-image {
    position: relative;
    max-width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .text-decoration {
    position: absolute;
    right: calc(0.25rem * -4);
    bottom: calc(0.25rem * -7);
    max-width: 230px;
    background-color: #69745c;
    padding: calc(0.25rem * 7);
    color: #fff;
  }

  .text-image {
    font-family: var(--font-display);
    font-size: 1.875rem;
    line-height: 1.25;
  }

  .text-container {
    color: #22251f;
    padding-top: calc(0.25rem * 8);
  }

  .eyebrow {
    color: #69745c;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .eyebrow::before {
    content: '';
    display: inline-block;
    width: 2.25rem;
    height: 1px;
    margin-right: 0.8rem;
    vertical-align: middle;
    background: currentColor;
  }

  .who-are-we-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 0.98;
    margin-top: calc(0.25rem * 5);
  }

  .who-are-we-title em {
    color: #69745c;
    font-weight: 400;
    font-style: italic;
  }

  .who-are-we-description {
    margin-top: calc(0.25rem * 7);
    font-size: 1.125rem;
    line-height: 1.625;
    color: oklch(44.4% 0.011 73.639);
  }

  .who-are-we-footer {
    display: grid;
    margin-top: calc(0.25rem * 9);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: calc(0.25rem * 8);
    border-top-width: 1px;
    border-top-style: solid;
    border-color: oklch(86.9% 0.005 56.366);
    padding-top: calc(0.25rem * 7);
  }

  .footer-text-strong {
    font-family: var(--font-display);
    color: #22251f;
    line-height: calc(2.5 / 2.25);
    font-size: 2.25rem;
    font-weight: 500;
  }

  .footer-text {
    margin-top: calc(0.25rem * 1);
    line-height: calc(1.25 / 0.875);
    font-size: 0.875rem;
    color: oklch(55.3% 0.013 58.071);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.875rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    #who-are-we {
      padding: var(--space64) var(--space24);
    }

    .experience-section {
      padding: var(--space32);
    }

    .timeline-item {
      padding-left: var(--space24);
      padding-bottom: var(--space32);
    }
  }
`;
