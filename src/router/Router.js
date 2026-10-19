import { LitElement, html } from 'lit';
import { matchRoute } from './route-matcher.js';
import { setMeta } from './meta-manager.js';

const ROUTES = [
  {
    path: '/',
    tag: 'main-page',
    loader: () => import('../pages/Main.js'),
    meta: () => ({
      title: 'CHN Inmobiliaria & Gestión | Home',
      description: 'Landing page',
    }),
  },
];

export class AppRouter extends LitElement {
  static properties = {
    currentPath: { type: String },
    _route: { state: true },
    _params: { state: true },
    _pendingAnchor: { state: true },
  };

  constructor() {
    super();
    this.currentPath = window.location.pathname;
    this._route = null;
    this._params = {};
    this._pendingAnchor = null;
    window.addEventListener('popstate', () => this._onLocationChange());
    window.addEventListener('app:navigate', (e) => this.navigate(e.detail.path));
  }

  connectedCallback() {
    super.connectedCallback();
    this._onLocationChange({ restoreScroll: false });
    window.addEventListener('app:navigate-with-anchor', (e) => {
      const { path, anchor } = e.detail;

      this._pendingAnchor = anchor;

      if (this._pendingAnchor) {
        window.dispatchEvent(
          new CustomEvent('app:scroll-to-anchor', {
            detail: this._pendingAnchor,
          })
        );
      }
      this.navigate(path);
    });
  }

  navigate(path) {
    if (path === this.currentPath) return;
    history.pushState({}, '', path);
    this._onLocationChange();
  }

  async _onLocationChange({ restoreScroll = true } = {}) {
    const pathname = window.location.pathname;
    this.currentPath = pathname;

    for (const r of ROUTES) {
      const params = matchRoute(r.path, pathname);
      if (params !== null) {
        // lazy-load
        await r.loader();

        this._route = r;
        this._params = params;

        if (r.meta) {
          setMeta(r.meta(params));
        }

        if (restoreScroll) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.dispatchEvent(
          new CustomEvent('app:route-changed', {
            detail: { path: pathname },
          })
        );
        return;
      }
    }

    // 404
    await import('../pages/NotFound.js');

    this._route = {
      tag: 'not-found-page',
      meta: () => ({
        title: 'chninmobiliaria.es | Error 404',
        description: 'Page not found',
      }),
    };

    this._params = {};
    setMeta(this._route.meta());
  }

  _renderRoute() {
    if (!this._route) return null;

    switch (this._route.tag) {
      case 'main-page':
        return html`<main-page
          .params=${this._params}
          .pendingAnchor=${this._pendingAnchor}
        ></main-page>`;

      case 'not-found-page':
        return html`<not-found-page></not-found-page>`;

      default:
        return null;
    }
  }

  render() {
    return html` <div id="route-outlet">${this._renderRoute()}</div> `;
  }
}
