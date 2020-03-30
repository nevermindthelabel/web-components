import { html, render } from '../node_modules/lit-html/lit-html.js';

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

    this.$input = this._shadowRoot.querySelector('input');
  }

  _removeTodo(e) {
    this.todos = this.todos.filter((todo, index) => {
      return index !== e.detail;
    });
  }

  _toggleTodo(e) {
    this.todos = this.todos.map((todo, index) => {
      return index === e.detail ? { ...todo, checked: !todo.checked } : todo;
    });
  }

  _addTodo(e) {
    e.preventDefault();
    if (this.$input.value.length > 0) {
      this.todos = [ ...this.todos, { text: this.$input.value, checked: false }];
      this.$input.value = '';
    }
  }

  template() {
    return html`
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
    <h1>
      <ul>
        ${this.todos.map(todo => html`<li>${todo.text}</li>`)}
      </ul>
    </h1>
    `
  }
}

window.customElements.define('to-do-app', TodoApp);
