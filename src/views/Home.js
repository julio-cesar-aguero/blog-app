import { LitElement, html, css } from "lit";
import "../components/hero-component";
import "../components/blog-component";
import "../components/aside-component";

export class Home extends LitElement {
  static get properties() {
    return {
      modalActive: { type: String },
      session: { type: Object },
    };
  }
  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }
      .stop-scrolling {
        height: 0;
        overflow-y: hidden;
      }
    `,
  ];

  constructor() {
    super();
    this.modalActive = false;
  }
  render() {
    return html`
      <hero-component @activeM="${this._activeModal}"></hero-component>
      <blog-component
        class="${this.modalActive ? "stop-scrolling" : ""}"
      ></blog-component>
      ${this.modalActive
        ? html`<modal-popup
            .sessionUser=${this.session}
            @getForm="${this._addTopic}"
            @activeM="${this._activeModal}"
          ></modal-popup>`
        : ``}
    `;
  }
  _addTopic(evt) {
    this._activeModal(evt);
  }
  _activeModal(evt) {
    this.modalActive = evt.detail.modalState;
    document.body.classList.toggle("stop-scrolling");
  }
}
customElements.define("home-view", Home);
