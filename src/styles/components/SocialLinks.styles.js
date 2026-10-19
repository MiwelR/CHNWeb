import { css } from 'lit';

export const socialLinksStyles = css`
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

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space12);
    margin-top: 3rem;
  }

  .button-links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    background-color: #6d7462;
    color: #fff;
    border: 1px solid var(--color-border);
    transition: all var(--transition-base);
    box-shadow: var(--shadow-xs);
  }

  .md {
    width: 40px;
    height: 40px;
    color: var(--color-text-fourthary);
  }

  .md > svg {
    width: 18px;
    height: 18px;
  }

  .button-links:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    color: #000;
  }
`;
