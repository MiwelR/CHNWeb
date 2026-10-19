import { css } from 'lit';

export const notFoundPageStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  :host {
    display: block;
    height: 100vh;
    background: radial-gradient(ellipse at center, #0b120b 0%, #050805 70%, #000 100%);
    color: #33ff33;
    font-family: 'Courier New', monospace;
    overflow: hidden;
  }

  .not-found-section {
    min-height: 100vh;
    padding: var(--space96) var(--space32);
    background-color: var(--color-bg-primary);
  }

  .not-found-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .monitor-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--space32);
    box-sizing: border-box;
  }

  /* ───────────── MONITOR FRAME ───────────── */
  .monitor-container {
    position: relative;
    width: 100%;
    max-width: 1100px;
    padding: 36px;
    border-radius: 28px;

    background: var(--color-bg-retro-monitor);

    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.85),
      inset 0 2px 1px rgba(255, 255, 255, 0.05),
      inset 0 -4px 8px rgba(0, 0, 0, 0.8);

    animation: crt-power-on 0.8s ease-out forwards;
  }

  .not-found-container::before {
    content: '';
    position: absolute;
    inset: 18px;
    border-radius: 20px;
    pointer-events: none;
  }

  @keyframes crt-power-on {
    0% {
      opacity: 0;
      filter: brightness(0) blur(8px);
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      filter: brightness(1) blur(0);
      transform: scale(1);
    }
  }

  /* ───────────── CRT SCREEN ───────────── */
  .terminal {
    position: relative;
    height: 380px;
    padding: 48px;
    background: #000;
    border-radius: 16px;
    overflow: hidden;

    color: #33ff33;
    font-size: 1.05rem;

    text-shadow:
      0 0 1px #33ff33,
      0 0 8px rgba(51, 255, 51, 0.7);

    transform: perspective(900px) rotateX(1.4deg);
    animation: phosphor 2.5s infinite ease-in-out;
    isolation: isolate;
  }

  .terminal::backdrop {
    background: #000;
  }

  .terminal::before {
    content: '';
    position: absolute;
    inset: -8%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 55%,
      rgba(0, 0, 0, 0.45) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
  }

  .terminal::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.03) 0px,
      rgba(0, 0, 0, 0.25) 1px,
      rgba(0, 0, 0, 0.05) 2px
    );
    mix-blend-mode: overlay;
    animation: noise 0.2s infinite;
    pointer-events: none;
  }

  @keyframes phosphor {
    0%,
    100% {
      text-shadow:
        0 0 1px #33ff33,
        0 0 6px rgba(51, 255, 51, 0.6);
    }
    50% {
      text-shadow:
        0 0 2px #66ff66,
        0 0 12px rgba(51, 255, 51, 0.9);
    }
  }

  @keyframes noise {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-0.4px, 0.4px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .crt-content {
    position: relative;
    z-index: 1;
    height: 100%;
  }

  pre {
    margin: 0;
    max-height: 100%;
    overflow: hidden; /* 👈 evita crecimiento */
    filter: drop-shadow(0.6px 0 rgba(0, 255, 0, 0.4)) drop-shadow(-0.6px 0 rgba(0, 100, 0, 0.3));
  }

  .cursor {
    display: inline-block;
    width: 10px;
    height: 1.2em;
    background: #33ff33;
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .hint {
    margin-top: 20px;
    opacity: 0.6;
  }

  /* ───────────── POWER BUTTON (REAL CRT) ───────────── */

  .monitor-power {
    position: absolute;
    bottom: 12px;
    right: 34px;

    width: 42px;
    height: 18px;
    border-radius: 2px;

    background: var(--color-bg-retro-button);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.06),
      inset 0 -1px 2px rgba(0, 0, 0, 0.9),
      0 1px 2px rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .monitor-power::before {
    content: '⏻';
    font-size: 12px;
    line-height: 1;
    color: #1f5f1f; /* apagado */

    text-shadow: none;
    transition: all 0.3s ease;
  }

  .monitor-power {
    --power-on: 1;
  }

  .monitor-power::before {
    color: rgba(51, 255, 51, 0.9);
    text-shadow:
      0 0 4px rgba(51, 255, 51, 0.8),
      0 0 10px rgba(51, 255, 51, 0.6);
    animation: power-glow 2.4s ease-in-out infinite;
  }

  @keyframes power-glow {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }

  .monitor-power:active {
    transform: translateY(1px);
    box-shadow:
      inset 0 2px 3px rgba(0, 0, 0, 0.9),
      0 0 1px rgba(0, 0, 0, 0.9);
  }

  /* ───────────── CRT POWER OFF EFFECT ───────────── */

  .terminal.power-off .crt-content {
    transform-origin: center;
    animation: crt-off-real 0.9s cubic-bezier(0.2, 0, 0.2, 1) forwards;
  }

  @keyframes crt-off-real {
    0% {
      transform: scaleY(1);
      filter: brightness(1);
      opacity: 1;
    }

    40% {
      transform: scaleY(0.08);
      filter: brightness(2);
      opacity: 1;
    }

    55% {
      transform: scaleY(0.02);
      filter: brightness(1.3);
    }

    100% {
      transform: scaleY(0);
      filter: brightness(0);
      opacity: 0;
    }
  }

  .monitor-power.off::before {
    color: #133513;
    text-shadow: none;
    opacity: 0.4;
    animation: none;
  }

  .terminal.power-off::before {
    opacity: 1;
    animation: crt-line-flash 0.18s ease-out forwards;
  }

  @keyframes crt-line-flash {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }

  .terminal.power-off::after {
    animation: crt-flash 0.25s ease-out;
  }

  @keyframes crt-flash {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 0;
    }
  }

  /* ───────────── RESPONSIVE CRT (MOBILE) ───────────── */

  @media (max-width: 768px) {
    .monitor-wrapper {
      padding: 0;
    }

    .terminal {
      height: 450px;
      padding: 20px;
      font-size: 0.9rem;
      line-height: 1.4;

      overflow: hidden;
      transform: perspective(600px) rotateX(0.8deg);
    }

    pre {
      max-height: 100%;
      overflow: hidden;
      white-space: pre-wrap;
    }

    .monitor-power {
      bottom: 7px;
      right: 22px;
    }

    .monitor-container {
      padding: 22px 22px 28px;
      border-radius: 20px;
      max-width: 340px;
    }
  }

  @media (max-width: 400px) {
    .terminal {
      padding: 18px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 950px) and (orientation: landscape) {
    :host {
      height: auto;
      min-height: 100%;
      overflow-y: auto;
    }

    .monitor-wrapper {
      align-items: flex-start;
    }

    .monitor-container {
      max-width: 100%;
    }

    .terminal {
      min-height: 300px;
      height: fit-content;
      padding: 16px;
      font-size: 0.85rem;
      transform: none;
    }

    .monitor-power {
      bottom: 8px;
      right: 16px;
    }
  }
`;
