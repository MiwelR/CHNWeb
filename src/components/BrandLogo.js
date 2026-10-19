import { LitElement, html } from 'lit';

import { brandLogoStyles } from '../styles/components/BrandLogo.styles';

const LOGO = {
  simple: new URL('../assets/logo/simple-logo-white.svg', import.meta.url).href,
  name: new URL('../assets/logo/name-logo-white.svg', import.meta.url).href,
  fullLogo: new URL('../assets/logo/full-logo-white.svg', import.meta.url).href,
};

export class BrandLogo extends LitElement {
  static styles = [brandLogoStyles];

  static properties = {
    size: { type: String },
    logoType: { type: String, attribute: 'logo-type' },
  };

  constructor() {
    super();
    this.size = 'lg';
    this.logoType = '';
    this.logoSrc = null;
  }

  render() {
    switch (this.logoType) {
      case 'simple':
        this.logoSrc = LOGO.simple;
        break;
      case 'name':
        this.logoSrc = LOGO.name;
        break;
      case 'full':
        this.logoSrc = LOGO.fullLogo;
        break;
      default:
        this.logoSrc = LOGO.fullLogo;
        break;
    }

    return html` <img
      src=${this.logoSrc}
      class="${this.size}${this.logoType === 'name' ? '-name' : ''}"
      alt="CHN ${this.logoType} Logo"
    />`;
  }
}
