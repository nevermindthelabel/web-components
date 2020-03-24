import './to-do-item.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>

<h1>To do</h1>

<input type="text" placeholder="Add a new to do"></input>
<button>&#10004;</button>

<ul id="todos"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$todoList = this._shadowRoot.querySelector('ul');
    this.$input = this._shadowRoot.querySelector('input');

    this.$submitButton = this._shadowRoot.querySelector('button');
    this.$submitButton.addEventListener('click', this._addTodo.bind(this));
  }

  _addTodo() {
    if (this.$input.value.length > 0) {
      this._todos.push({ text: this.$input.value, checked: false })
      this._renderTodoList();
      this.$input.value = '';
    }

  }

  _renderTodoList() {
    this.$todoList.innerHTML = '';

    this._todos.forEach((todo, index) => {
      let $todoItem = document.createElement('to-do-item');
      $todoItem.setAttribute('text', todo.text);
      // if todo item is checked, set the attrubute to true. If not, omit it
      if (todo.checked) {
        $todoItem.setAttribute('checked', '')
      }
      this.$todoList.appendChild($todoItem);
    });
  }

  set todos(value) {
    this._todos = value;
    this._renderTodoList();
  }

  get todos() {
    return this._todos;
  }
}

document.querySelector('to-do-app')._todos = [
  { text: "Make a to-do list", checked: false },
  { text: "Finish blog post", checked: false }
];

window.customElements.define('to-do-app', TodoApp);
