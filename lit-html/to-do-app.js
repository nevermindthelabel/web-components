import { html, render }from 'lit-html';

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
    ]
  }
}
