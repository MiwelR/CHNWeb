import { css } from 'lit';

export const brandLogoStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    width: auto;
    opacity: 0.95;
    transition: opacity var(--transition-base);
  }

  .lg {
    height: 64px;
  }

  .md {
    width: calc(0.25rem * 14);
    height: calc(0.25rem * 12);
  }

  .md-name {
    width: 6.25rem;
    height: calc(0.25rem * 9);
  }

  .sm {
    height: 20px;
  }
`;
