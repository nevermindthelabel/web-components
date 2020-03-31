import { html, render } from '../node_modules/lit-html/lit-html.js';

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
  }

  connectedCallback() {
    if(!this.hasAttribute('text')) {
      this.setAttribute('text', 'placeholder');
    }
    render(this.template(), this._shadowRoot, { eventContext: this });
  }

  template() {
    return html `

    `
  }
}

window.customElements.define('to-do-item', TodoItem);
