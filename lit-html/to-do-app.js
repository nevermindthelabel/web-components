import { html, render }from '../node_modules/lit-html/lit-html.js';

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });

    this.todos = [
      { text: 'Learn about Lit HTML', checked: true },
      { text: 'Lit HTML in practice', checked: false },
      { text: 'Supercharge your web components', checked: false },
      { text: 'Attributes, properties, and events', checked: false },
      { text: 'Wrapping up', checked: false }
    ];

    render(this.template(), this._shadowRoot, { eventContext: this });
  }

  template() {
    return html `
    <style>
      :host {
        display: block;
        font-family: sans-serif;
        text-align: center;
      }
      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
      }
      ul {
        list-style: none;
        padding: 0;
      }
    </style>
    ${this.todos.forEach(todo => console.log(todo.text))}
    `
  }
}

window.customElements.define('to-do-app', TodoApp);
