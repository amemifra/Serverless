import { hyper } from 'hyperhtml/esm';
import { getStore } from '../../state-management/state.management';

class Sidenav extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.navigationMap = {};
    this.html = hyper.bind(this);
  }

  connectedCallback() {
    getStore().subscribe(store => {
      this.navigationMap = store['element-sidenav']['sidenav-map'];
      this.render();
    });
  }

  render() {
    return this.html`
    ${Object.keys(this.navigationMap)
    .reduce((prev, curr) => {
      const section = hyper.wire()`
      <section class="nav-group">
          <input id="sidenavcbx" type="checkbox">
          <label for="sidenavcbx">${curr}</label>
    ${this.navigationMap[curr]
    .reduce((pre, cur) => {
      const li = hyper.wire()`
        <li>
          <a class="nav-link"></a>
        </li>
      `;
      li.hasChildNodes() ? li.firstElementChild.innerText = cur : null;
      pre.appendChild(li);
      return pre;
    }, hyper.wire()`<ul class="nav-list"></ul>`)}
      </section>
      `;
      prev.appendChild(section);
      return prev;
    }, hyper.wire()` <nav class = "sidenav" style = "height: 100%"> `)}
    `;
  }
}

export default customElements.define('element-sidenav', Sidenav);
