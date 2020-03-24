const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
    font-family: sans-serif;
  }

  .completed {
    text-decoration: line-through;
  }

  button {
    border: none;
    cursor: pointer;
  }
</style>

<li class="item">
  <input type="checkbox">
  <label></label>
  <button>❌</button>
</li>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$item = this._shadowRoot.querySelector('.item');
    this.$removeButton = this._shadowRoot.querySelector('button');
    this.$text = this._shadowRoot.querySelector('label');
    this.$checkbox = this._shadowRoot.querySelector('input');

    this.$removeButton.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
    });

    this.$checkbox.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
    });
}


window.customElements.define('to-do-item', TodoItem);
