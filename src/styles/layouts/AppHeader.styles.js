import { css } from 'lit';

export const appHeaderStyles = css`
  :host {
    display: block;
    scroll-behavior: smooth;
    font-family: var(--font-family);
    font-size: 1rem;
    font-weight: 500;
  }

  * {
    border-color: oklch(0.922 0 0);
    outline-color: color-mix(in oklab, oklch(0.708 0 0) 50%, transparent);
  }

  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base);
    border-bottom: 1px solid var(--color-border);
    background-color: transparent;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: calc(0.25rem * 24);
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .header-logo {
    display: flex;
    align-items: center;
    gap: calc(0.25rem * 3);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .header-logo:hover {
    opacity: 0.8;
  }

  /* mobile first: hide desktop-menu */
  .desktop-menu {
    display: none;
  }

  /* hamburger */
  .hamburger {
    display: flex;
    width: calc(0.25rem * 11);
    height: calc(0.25rem * 11);
    background-color: transparent;
    border-radius: calc(infinity * 1px);
    color: #fff;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    border: 1px solid #fff;
    cursor: pointer;
  }

  .hamburger svg {
    display: block;
    vertical-align: middle;
    width: calc(0.25rem * 5);
    height: calc(0.25rem * 5);
  }

  /* mobile menu panel */
  .mobile-menu {
    position: fixed;
    top: calc(0.25rem * 24 + 1px);
    left: 0;
    right: 0;
    background-color: color-mix(in oklab, #22251f 95%, transparent);
    border-bottom: 1px solid var(--color-border);
    border-top-style: solid;
    border-top-width: 1px;
    border-color: color-mix(in oklab, #fff 20%, transparent);
    padding: var(--space24);
    flex-direction: column;
    gap: var(--space8);
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .mobile-menu-button {
    display: block;
    color: #fff;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    cursor: pointer;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: color-mix(in oklab, #fff 10%, transparent);
    padding-block: calc(0.25rem * 4);
    line-height: calc(1.75 / 1.125);
    font-size: 1.125rem;
    -webkit-tap-highlight-color: transparent;
  }

  .mobile-menu-button:hover {
    color: var(--color-text-primary);
    background-color: var(--color-bg-secondary);
    border-color: var(--color-border);
  }

  .mobile-menu-button:active {
    transform: scale(0.98);
  }

  /* desktop */
  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    .desktop-menu {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .desktop-menu-button {
      padding: var(--space12) var(--space16);
      border-radius: var(--radius-lg);
      font-family: var(--font-family);
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      transition: all var(--transition-fast) 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      border: 1px solid transparent;
      background: none;
      text-decoration: none;
    }

    .desktop-menu-button::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 80%;
      height: 2px;
      background: linear-gradient(90deg, var(--color-primary-green), var(--color-primary-blue));
      border-radius: 2px;
      transition: transform var(--transition-base);
    }

    .desktop-menu-button:hover {
      color: var(--color-text-primary);
      background-color: var(--color-bg-secondary);
      border-color: var(--color-border);
    }

    .desktop-menu-button:hover::after {
      transform: translateX(-50%) scaleX(1);
    }

    .desktop-menu-divider {
      width: 1px;
      height: 24px;
      background-color: var(--color-border);
      margin: 0 var(--space8);
    }

    .mobile-menu {
      display: none;
    }
  }
`;
