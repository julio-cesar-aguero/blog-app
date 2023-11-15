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
      newEntradaRes: { type: Array },
      alert: {type: Object}
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
    this.newEntradaRes = '';
    this.alert = {
      state: true,
      message: "Complete el formulario",
      color: "green",
    }
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
        ></blog-component>
      ${this.modalActive
        ? html`<modal-popup
            .alertToast=${this.alert}
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
  }
  async _newData(evt) {
    let newEntradaPrev = evt.detail.data; 
    var datosForm = new FormData();
    datosForm.append("title", newEntradaPrev.title);
    datosForm.append("autor", newEntradaPrev.autor);
    var arr = newEntradaPrev.tags;
    for (let i = 0; i < arr.length; i++) {
      datosForm.append("tags[]", arr[i]);
    }
    datosForm.append("textTopic", newEntradaPrev.textTopic);
    datosForm.append(
      "imgUri",
      newEntradaPrev.imgUri[0],
      newEntradaPrev.imgUri[0].name
    );

    var requestOptions = {
      method: "POST",
      body: datosForm,
      redirect: "manual",
    };
    const res = await fetch("http://77.243.85.199/api/userBlog/nueva-entrada/", requestOptions)
    const resDB = await res.json();
    this.entradasRes = resDB;
    console.log(resDB.error);
    if(resDB.error === null){
      this.alert ={
        state: true,
        message: 'se ingreso a la base de datos correctamente',
        color: 'blue'
      }
      this.alert = {...this.alert};
      this._activeModal(evt);
    }else{
      this.alert ={
        state: true,
        message: 'Error al ingresar la entrada pruebe con otra imagen',
        color: 'red'
      }
      this.alert = {...this.alert};
    }
    this._getData();
  }
  async _deleteData(evt){

  }
  async _editData(evt){
    
  }
  async _addTopic(evt) {
    await this._newData(evt);
    
    
  }
  _activeModal(evt) {
    this.modalActive = evt.detail.modalState;
    document.body.classList.toggle("stop-scrolling");
  }
}
customElements.define("home-view", Home);
