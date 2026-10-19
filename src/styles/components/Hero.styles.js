import { css } from 'lit';

export const heroSectionStyles = css`
  :host {
    border: 0 solid;
    scroll-behavior: smooth;
    font-size: 1rem;
    font-weight: 500;
  }

  * {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #home {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    height: 100vh;
    padding: var(--space32) var(--space32) var(--space24);
    padding-top: calc(72px + var(--space32));
    position: relative;
    overflow: hidden;
  }

  .background-wrapper {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .background-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    inset: calc(0.25rem * 0);
    position: absolute;
  }

  .background-decorator {
    background-image: linear-gradient(
      90deg,
      rgba(25, 28, 24, 0.84) 0%,
      rgba(25, 28, 24, 0.45) 48%,
      rgba(25, 28, 24, 0.15) 100%
    );
    inset: calc(0.25rem * 0);
    position: absolute;
  }

  .content-wrapper {
    max-width: 48rem;
    position: relative;
    z-index: 10;
  }

  .hero-intro {
    color: #69745c;
    color: #bdc7ab;
    font-family: var(--font-sans);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .hero-intro::before {
    content: '';
    display: inline-block;
    width: 2.25rem;
    height: 1px;
    margin-right: 0.8rem;
    vertical-align: middle;
    background-color: #69745c;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.8rem, 8vw, 7.5rem);
    font-weight: 500;
    line-height: 0.85;
    color: #fff;
    margin-top: calc(0.25rem * 6);
    margin-bottom: var(--space16);
    letter-spacing: -0.025em;
  }

  .hero-subtitle {
    font-family: var(--font-display);
    font-size: clamp(3.8rem, 8vw, 7.5rem);
    font-weight: 400;
    font-style: italic;
    color: #bdc7ab;
    line-height: 0.85;
    letter-spacing: -0.025em;
  }

  .hero-paragraph {
    font-family: var(--font-sans);
    font-size: 1.125rem;
    font-weight: 400;
    color: oklch(92.3% 0.003 48.717);
    line-height: 1.625;
    max-width: 36rem;
    margin-top: calc(0.25rem * 8);
    margin-bottom: var(--space32);
  }

  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: calc(0.25rem * 4);
    margin-top: calc(0.25rem * 10);
  }

  .primary-button {
    font-family: var(--font-sans);
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
    border-width: 0;
    background: #bdc7ab;
    color: #22251f;
    width: 100%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .lucide-arrow-right {
    display: block;
    vertical-align: middle;
    transition: transform var(--transition-fast);
  }

  .primary-button:hover {
    background: linear-gradient(135deg, var(--color-primary-blue), var(--color-primary-green));
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  .primary-button:hover .lucide-arrow-right {
    transform: translateX(4px);
  }

  .secondary-button {
    font-family: var(--font-sans);
    display: inline-flex;
    width: 100%;
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
    border: 1px solid rgb(255 255 255 / 0.55);
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .secondary-button:hover {
    border-color: #fff;
    background: rgb(255 255 255 / 0.1);
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space12);
  }

  /* tablet / desktop */
  @media (max-width: 768px) {
    #home {
      padding: var(--space24) var(--space24) var(--space16);
      padding-top: calc(72px + var(--space24));
      height: 100vh;
    }

    .background-decorator-1,
    .background-decorator-2 {
      width: 300px;
      height: 300px;
    }

    .hero-title {
    }

    .hero-subtitle {
    }

    .hero-paragraph {
    }

    .hero-cta {
    }

    .primary-button,
    .secondary-button {
    }
  }

  @media (max-width: 950px) and (orientation: landscape) {
    #home {
      height: auto;
    }
  }
`;
