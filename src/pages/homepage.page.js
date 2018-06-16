import { hyper } from 'hyperhtml/esm';

class Homepage extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.html = hyper.bind(this);
    this.openModal = false;
    this.help = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    return this.html`
    <element-sidenav></element-sidenav>
      <div class="content-area animation fadeIn">
        <h2>${document.querySelector('title').innerText}</h2>
        <h4></h4>
        <section class="homepage-timeline">
          <div class="card">
            <div class="card-header">Introduzione</div>
            <div class="card-block">
              Attenzione, concentrazione, ritmo, velocità
            </div>
          </div>
        </section>
      </div>`;
  }
}

export default customElements.define('page-homepage', Homepage);
