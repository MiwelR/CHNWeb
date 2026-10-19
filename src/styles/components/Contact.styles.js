import { css } from 'lit';

export const contactSectionStyles = css`
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

  #contact {
    padding-block: clamp(6rem, 10vw, 9rem);
    background-color: #f6f3eb;
    color: #22251f;
  }

  .contact-container {
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

  .contact-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 0.98;
    margin-top: calc(0.25rem * 5);
  }

  .contact-title em {
    color: #69745c;
    font-weight: 400;
    font-style: italic;
  }

  .contact-description {
    margin-top: calc(0.25rem * 7);
    max-width: 28rem;
    line-height: 1.625;
    color: oklch(44.4% 0.011 73.639);
  }

  .contact-info {
    margin-top: calc(0.25rem * 10);
  }

  .contact-info svg {
    display: block;
    vertical-align: middle;
    width: calc(0.25rem * 5);
    height: calc(0.25rem * 5);
    color: #69745c;
  }

  .contact-link {
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    margin-block-start: calc(calc(0.25rem * 5) * 0);
    margin-block-end: calc(calc(0.25rem * 5) * calc(1 - 0));
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #57534e;
    font-size: 0.9rem;
  }

  .contact-link:hover {
    color: #69745c;
  }

  a.contact-link {
    transition: color 200ms ease;
  }

  .contact-form {
    display: grid;
    column-gap: calc(0.25rem * 6);
    row-gap: calc(0.25rem * 7);
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    color: #22251f;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: default;
  }

  .input,
  .textarea {
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

  .textarea {
    resize: vertical;
    min-height: calc(0.25rem * 32);
  }

  .input::placeholder,
  .textarea::placeholder {
    font-family: var(--font-sans);
    font-weight: 400;
  }

  .input:focus,
  .textarea:focus {
    border-color: #69745c;
  }

  .send-notification {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: white;
    border-radius: 5px;
    padding: 6px 10px;
    font-weight: 600;
    border: 1px solid var(--color-border-secondary);
    text-align: center;
    margin: 0;
  }

  .success {
    background-color: var(--color-primary-green);
  }

  .error {
    background-color: #9f2d3d;
  }

  .button-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(0.25rem * 5);
  }

  .submit-button {
    border-radius: 0;
    opacity: 1;
    appearance: button;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 3.5rem;
    padding-inline: 1.6rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: all 200ms ease;
    border: 1px solid #22251f;
    background: #22251f;
    color: #fff;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 1024px) {
  }
`;
