import { LitElement, html, css } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { AppHeader } from './layouts/AppHeader.js';
import { AppRouter } from './router/Router.js';
import { AppFooter } from './layouts/AppFooter.js';

export class AppRoot extends ScopedElementsMixin(LitElement) {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }
  `;

  static get scopedElements() {
    return {
      'app-header': AppHeader,
      'app-router': AppRouter,
      'app-footer': AppFooter,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('app:route-changed', this._onRouteChanged);
  }

  disconnectedCallback() {
    window.removeEventListener('app:route-changed', this._onRouteChanged);
    super.disconnectedCallback();
  }

  _onRouteChanged = (e) => {
    const header = this.renderRoot.querySelector('app-header');
    if (header) header.active = e.detail.path;
  };

  render() {
    return html`
      <app-header></app-header>
      <main role="main">
        <app-router></app-router>
      </main>
      <app-footer></app-footer>
    `;
  }
}
