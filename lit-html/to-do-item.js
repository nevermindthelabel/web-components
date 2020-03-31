import { html, render } from '../node_modules/lit-html/lit-html.js';

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
  }

  template() {
    return html `

    `
  }
}

window.customElements.define('to-do-item', TodoItem);
