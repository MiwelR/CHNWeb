import '@webcomponents/scoped-custom-element-registry';

import { AppRoot } from './AppRoot.js';

if (!customElements.get('app-root')) {
  customElements.define('app-root', AppRoot);
}

const app = document.createElement('app-root');
document.body.appendChild(app);
