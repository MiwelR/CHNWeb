import { LitElement, html } from 'lit';

import { I18nMixin } from '../i18n/i18n-mixin.js';
import { notFoundPageStyles } from '../styles/pages/NotFound.styles.js';

export class NotFoundPage extends I18nMixin(LitElement) {
  static styles = [notFoundPageStyles];

  static properties = {
    _output: { state: true },
    _line: { state: true },
    _char: { state: true },
    _finished: { state: true },
    _powerOff: { state: true },
  };

  constructor() {
    super();
    this._output = '';
    this._line = 0;
    this._char = 0;
    this._finished = false;
    this._powerOff = false;

    this.lines = [
      { text: 'BOOTING SYSTEM...', speed: 10 },
      { text: 'CHECKING MEMORY ........ OK', speed: 10 },
      { text: 'INITIALIZING ROUTES .... FAILED', speed: 10 },
      { text: '', speed: 10 },

      { text: 'ERROR 404', speed: 40 },
      { text: '', speed: 40 },
      { text: this.i18nMsg('notFound.line1'), speed: 40 },
      { text: this.i18nMsg('notFound.line2'), speed: 40 },
      { text: this.i18nMsg('notFound.line3'), speed: 40 },
      { text: '', speed: 40 },
      { text: 'C:\\> cd /', speed: 40 },
      { text: 'Starting home.exe...', speed: 40 },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this._type();
    window.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this._onKeyDown);
    super.disconnectedCallback();
  }

  _type() {
    if (this._line >= this.lines.length) {
      this._finished = true;
      return;
    }

    const { text, speed } = this.lines[this._line];

    if (this._char < text.length) {
      this._output += text[this._char];
      this._char += 1;
    } else {
      this._output += '\n';
      this._line += 1;
      this._char = 0;
    }

    setTimeout(() => this._type(), speed);
  }

  _onKeyDown = (e) => {
    if (this._finished && e.key === 'Enter') {
      this._goHome();
    }
  };

  _goHome() {
    window.dispatchEvent(
      new CustomEvent('app:navigate', {
        detail: { path: '/' },
      })
    );
  }

  _handlePowerOff = () => {
    if (this._powerOff) return;

    this._powerOff = true;

    // Tiempo de animación CRT
    setTimeout(() => {
      this._goHome();
    }, 900);
  };

  render() {
    return html`
      <section class="not-found-section">
        <div class="not-found-container">
          <div class="monitor-wrapper">
            <div class="monitor-container">
              <div
                class="terminal ${this._powerOff ? 'power-off' : ''}"
                @click=${this._finished ? this._goHome : null}
              >
                <div class="crt-content">
                  <pre>${this._output}<span class="cursor"></span></pre>

                  ${
                    this._finished
                      ? html`<div class="hint">Press ENTER or click to continue</div>`
                      : null
                  }
                </div>
              </div>
              <div
                class="monitor-power ${this._powerOff ? 'off' : ''}"
                @click=${this._handlePowerOff}
              ></div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('not-found-page', NotFoundPage);
