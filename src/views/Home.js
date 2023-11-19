import { LitElement, html, css } from "lit";
import  styles  from '../css/home-styles';
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
      alert: { type: Object },
      formUpdate: { type: Object },
    };
  }
  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.modalActive = false;
    this.entradasRes = {};
    this.newEntradaRes = "";
    this.alert = {
      state: true,
      message: "BIENVENIDO",
      color: "green",
      confirm: true,
    };
    this.formUpdate = {
      title: "",
      autor: "julio aguero",
      tags: [],
      textTopic: "",
      imgUri: "",
      update: false,
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this._getData();
  }

  render() {
    return html`
      <hero-component @activeM="${this._activeModal}"></hero-component>

      ${this.alert.state
        ? html`<div class="overlay__alert"></div>
            <div class="alert alert-small alert--${this.alert.color}">
              <h2>${this.alert.message}</h2>
              <ion-icon name="alert-circle"></ion-icon>
              ${this.alert.confirm
                ? html`<div class="alert-button__container">
                    <button
                      @click=${() => {
                        this.alert.state = false;
                        this.alert = { ...this.alert };
                      }}
                    >
                      Aceptar
                    </button>
                  </div>`
                : html`<div class="alert-button__container">
                    <button>Aceptar</button>
                    <button
                      @click=${() => {
                        this.alert.state = false;
                        this.alert = { ...this.alert };
                      }}
                      class="button--secondary"
                    >
                      Cancelar
                    </button>
                  </div>`}
            </div>`
        : html``}

      <blog-component
        .entradas="${this.entradasRes}"
        @delete-data="${this._deleteData}"
        @edit-data="${this._handleEditData}"
      >
      </blog-component>
      ${this.modalActive
        ? html`<modal-popup
            .alertToast=${this.alert}
            .form=${this.formUpdate}
            .sessionUser=${this.session}
            @editForm="${this._editData}"
            @getForm="${this._addTopic}"
            @activeM="${this._activeModal}"
          ></modal-popup>`
        : ``}
    `;
  }
  _newAlert(data) {
    this.alert = {
      state: true,
      message: data.message,
      color: data.color,
    };
    this.alert = { ...this.alert };
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
    const res = await fetch(
      "http://77.243.85.199/api/userBlog/nueva-entrada/",
      requestOptions
    );
    const resDB = await res.json();
    this.entradasRes = resDB;
    console.log(resDB.error);
    if (resDB.error === null) {
      this.alert = {
        state: true,
        message: "se ingreso a la base de datos correctamente",
        color: "blue",
        confirm: true,
      };
      this.alert = {
        ...this.alert,
      };
      this._activeModal(evt);
    } else {
      this.alert = {
        state: true,
        message: "Error al ingresar la entrada pruebe con otra imagen",
        color: "red",
      };
      this.alert = { ...this.alert };
    }
    this._getData();
  }
  async _deleteData(evt) {
    const id = evt.detail.id;
    const res = await fetch(
      "http://77.243.85.199/api/userBlog/eliminar/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resDB = await res.json();
    this._getData();
    console.log(resDB);
  }
  async _editData(evt){
    const updateEntradaPrev = evt.detail.data;
    var datosForm = new FormData();
    datosForm.append("title", updateEntradaPrev.title);
    datosForm.append("autor", updateEntradaPrev.autor);
    var arr = updateEntradaPrev.tags;
    for (let i = 0; i < arr.length; i++) {
      datosForm.append("tags[]", arr[i]);
    }
    datosForm.append("textTopic", updateEntradaPrev.textTopic);
    if(typeof updateEntradaPrev.imgUri[0] === 'object'){
      datosForm.append(
      "imgUri",
      updateEntradaPrev.imgUri[0],
      updateEntradaPrev.imgUri[0].name
    );
    }
    //datosForm.append(
      //"imgUri",
      //newEntradaPrev.imgUri[0],
      //newEntradaPrev.imgUri[0].name
    //);
    console.log("editar server",evt.detail.data._id);
    const id = evt.detail.data._id;
    const res = await fetch(
      "http://77.243.85.199/api/userBlog/editar/" + id,
      {
        method: "PUT",
        body: datosForm,
      }
    );
    const resDB = await res.json();
    console.log('editar respuesta',resDB)
    this.modalActive = false
    this._getData();
  }
  _confirmAction() {
    this.alert = {
      state: true,
      message: "Esta seguro de eliminar la entrada ?",
      color: "red",
      confirm: true,
    };
    this.alert = { ...this.alert };
  }
  async _handleEditData(evt) {
    const entradas = this.entradasRes;
    const result = entradas.filter(function (entrada) {
      return entrada._id === evt.detail.id;
    });
    this.formUpdate = result[0];
    this.formUpdate.update = true;
   
    this.alert = { ...this.alert };
    this.formUpdate = { ...this.formUpdate };
    this.modalActive = true;
  }
  _resetForm() {
    this.formUpdate = {
      title: "",
      autor: "julio aguero",
      tags: [],
      textTopic: "",
      imgUri: "",
      update: false,
    };
    this.formUpdate = { ...this.formUpdate };
  }
  async _addTopic(evt) {
    await this._newData(evt);
  }
  _activeModal(evt) {
    this._resetForm();
    this.modalActive = evt.detail.modalState;
    document.body.classList.toggle("stop-scrolling");
  }
}
customElements.define("home-view", Home);
