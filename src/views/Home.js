import { LitElement, html, css } from "lit";
import "../components/hero-component";
import "../components/blog-component";
import "../components/aside-component";

export class Home extends LitElement {
  static get properties() {
    return {
      modalActive: { type: String },
      session: { type: Object },
      entradasRes: { type: Object },
      newEntradaRes: { type: Object },
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
    this.entradasRes = {};
    this.newEntradaRes = {};
  }
  connectedCallback() {
    super.connectedCallback();
    this._getData();
  }
  render() {
    return html`
      <hero-component @activeM="${this._activeModal}"></hero-component>
      <blog-component
        .entradas="${this.entradasRes}"
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
  async _getData() {
    const res = await fetch("http://77.243.85.199/api/userBlog/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resDB = await res.json();
    this.entradasRes = resDB;
    console.log(this.entradasRes); 
  }
  async _newData(newEntradaPrev) {
    var formdata = new FormData();
    formdata.append("title",entrada.title)
    formdata.append("autor",entrada.autor)
    formdata.append("tags",entrada.tags)
    formdata.append("textTopic",entrada.tags)
    formdata.append("imgUri",entrada.imgUri)
    fom
    const res = await fetch(
      "http://77.243.85.199/api/userBlog/nueva-entrada/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formdata,
      }
    )
    const resDB = await res.json();
    this.newEntradaRes = resDB;
    console.log(this.newEntradaRes);
  }
  _addTopic(evt) {
    this._activeModal(evt);
    this._newData(evt.detail.data);
  }
  _activeModal(evt) {
    this.modalActive = evt.detail.modalState;
    document.body.classList.toggle("stop-scrolling");
  }
}
customElements.define("home-view", Home);
