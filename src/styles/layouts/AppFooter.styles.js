import { css } from 'lit';

export const appFooterStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  footer {
    background-color: #22251f;
    padding-top: calc(0.25rem * 16);
    padding-bottom: calc(0.25rem * 8);
    color: #fff;
  }

  .footer-container {
    width: min(100% - 2rem, 1280px);
    margin-inline: auto;
  }

  .top-section {
    display: grid;
    gap: calc(0.25rem * 12);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: color-mix(in oklab, #fff 15%, transparent);
    padding-bottom: calc(0.25rem * 12);
  }

  .footer-logo {
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: calc(0.25rem * 3);
    -webkit-tap-highlight-color: transparent;
  }

  .footer-logo svg {
    display: block;
    vertical-align: middle;
    height: calc(0.25rem * 12);
    width: calc(0.25rem * 14);
    flex-shrink: 0;
  }

  .footer-text {
    margin-top: calc(0.25rem * 6);
    max-width: 20rem;
    font-size: 0.875rem;
    line-height: 1.625;
    color: oklch(70.9% 0.01 56.259);
  }

  .footer-follow-me {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .follow-icons {
    display: flex;
    margin-top: calc(0.25rem * 5);
    gap: calc(0.25rem * 3);
    color: #fff;
  }

  .button-link {
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    cursor: pointer;
    display: grid;
    width: calc(0.25rem * 11);
    height: calc(0.25rem * 11);
    place-items: center;
    border-radius: calc(infinity * 1px);
    border-style: solid;
    border-width: 1px;
    border-color: color-mix(in oklab, #fff 20%, transparent);
    color: oklch(86.9% 0.005 56.366);
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
    -webkit-tap-highlight-color: transparent;
  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    gap: calc(0.25rem * 4);
    padding-top: calc(0.25rem * 7);
    font-size: 0.75rem;
    line-height: calc(1 / 0.75);
    color: oklch(55.3% 0.013 58.071);
  }
`;
