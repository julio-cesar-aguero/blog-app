import { LitElement, html, css } from "lit";
import styles from "../css/modal-styles";
export class ModalPopup extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      form: { type: Object },
      tag: { type: String },
      tagDelete: { type: String },
      imgPreview: { type: Array },
      alertToast: { type: Object },
      sessionUser: { type: Object },
      originalForm: { type: Object },
    };
  }
  constructor() {
    super();
    this.form = {
      title: "",
      autor: "julio aguero",
      tags: [],
      textTopic: "",
      imgUri: "",
      update: false,
    };
    this.tag = "";
    this.tagDelete = "";
    this.imgPreview = "";
    this.alertToast = {};
  }
  connectedCallback() {
    super.connectedCallback();
    this.imgPreview = this.shadowRoot.getElementById("img-prev");
  }
  firstUpdated() {
    this.load();
  }
  render() {
    return html`
      <div class="overlay">
        <div
          class="${this.form.update
            ? "modal-box modal-box-update"
            : "modal-box"}"
        >
          <div
            class="close-option"
            @click="${() => {
              const modalState = false;
              this.dispatchEvent(
                new CustomEvent(" activeM", {
                  bubbles: true,
                  detail: { modalState },
                })
              );
            }}"
          >
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div class="modal-box__form">
            ${this.form.update
              ? html`<h2>Actualizar entrada.</h2>`
              : html`<h2>Nueva entrada.</h2>`}
            <div
              style="border-top: 20px solid ${this.alertToast.color}"
              class="${this.alertToast.state
                ? " alert-message alert-message--active"
                : "alert-message"}"
            >
              <span class="alert-toast">
                <ion-icon name="alert-circle"></ion-icon>
              </span>
              <small>
                <b>LLene los campos:</b>
                <span>${this.alertToast.message}</span>
              </small>
              <span class="close-toast" @click="${this._closeToast}">
                <ion-icon name="close"></ion-icon>
              </span>
            </div>
            <div class="${this.form.update ? "form form-update" : "form"}">
              <div class="blog__information">
                <div class="input__container">
                  <h3>1. titulo</h3>
                  <input
                    type="text"
                    id="title"
                    .value=${this.form.title}
                    name="title"
                    @change="${this._handleChange}"
                    placeholder="agregue un titulo"
                    required
                  />
                </div>
                <div class="tag-input">
                  <h3>2. tags</h3>
                  <div class="form__tag">
                    <div class="input-wrap">
                      <ion-icon name="pricetag"></ion-icon>
                      <input
                        name="tag"
                        .value="${this.tag}"
                        @change="${this._handleChange}"
                        @keydown="${this._handleAddTag}"
                        type="text"
                        placeholder="Add a tag."
                        id="tagInput"
                        maxlength="15"
                        autocomplete="off"
                      />
                    </div>
                    <div class="tags">
                      ${this.form.tags.map((tag) => {
                        return html`<span class="tag">
                          <b>#${tag}</b>
                          <ion-icon
                            .id="${tag}"
                            name="close-circle"
                            @click="${this._handleDeleteTag}"
                          ></ion-icon>
                        </span>`;
                      })}
                    </div>
                    <small>Add up to 5 tags for your post</small>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="text-area__container">
                  <h3>3. descripción</h3>
                  <textarea
                    type="text"
                    id="title"
                    .value=${this.form.textTopic}
                    name="textTopic"
                    @change="${this._handleChange}"
                    placeholder="Agregue una descripción"
                    required
                  ></textarea>
                </div>
                <div class="img-container-blog">
                  <h3>4. elije una imagen</h3>

                  <div class="img-blog__container">
                    <div id="img-prev" class="img-prev"></div>
                    <div class="img-file">
                      <input
                        class="input-file"
                        type="file"
                        @change="${this._changePicture}"
                        name="foto"
                        id="foto"
                        accept="image/*"
                      />
                      <label for="foto">Cambiar foto</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group-button">
                ${this.form.update
                  ? html`<button
                  @click="${this._handleEdit}"
                  class="btn btn-update"
                  >
                  Actualizar
                  </button>`
                  : html`<button
                      class="btn btn-primary"
                      @click="${this._handleAddEntry}"
                    >
                      <ion-icon name="add-circle"></ion-icon>
                    </button>`}

                <button
                  class="btn btn-secondary"
                  @click="${() => {
                    const modalState = false;
                    this.dispatchEvent(
                      new CustomEvent("activeM", {
                        bubbles: true,
                        detail: { modalState },
                      })
                    );
                  }}"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  load() {
    if (this.form.update) {
      console.log("vista actualizar");
      const img = this.shadowRoot.getElementById("img-prev");
      img.innerHTML =
        '<img src="http://localhost:3000/images/entradas/' +
        this.form.imgUri +
        '" />';
        this.originalForm = {...this.form}
    }

  }
  _validateForm() {
    if(this.originalForm === this.form){
      this.alertToast = {
        state: true,
        message: "Agregue una descripción !",
        color: "orange",
      };
      this.alert = { ...this.alert };
      return false;
    }
    if (!this.form.title) {
      this.alertToast = {
        state: true,
        message: "Agregue un titulo !",
        color: "orange",
      };
      this.alert = { ...this.alert };
      return false;
    }
    if (this.form.tags.length === 0) {
      this.alertToast = {
        state: true,
        message: "Agregue un Tag !",
        color: "orange",
      };
      this.alert = { ...this.alert };
      return false;
    }
    if (!this.form.textTopic) {
      this.alertToast = {
        state: true,
        message: "Agregue una descripción !",
        color: "orange",
      };
      this.alert = { ...this.alert };
      return false;
    }
    
    return true;
  }
  _handleEdit(){
    const isValid = this._validateForm();
    if(isValid){
      const data = this.form;
      const modalState = false;
      this.dispatchEvent(
        new CustomEvent("editForm",{
          bubbles: true,
          detail: { data, modalState }
        })
      );
    }
  }
  _handleAddEntry() {
    const isValid = this._validateForm();
    if (isValid) {
      const data = this.form;
      const modalState = false;
      this.dispatchEvent(
        new CustomEvent("getForm", {
          bubbles: true,
          detail: { data, modalState },
        })
      );
    }
  }
  _changePicture(evt) {
    const img = this.shadowRoot.getElementById("img-prev");
    if (evt.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function () {
        var file = reader.result;
        this.imgPreview = file;
        img.innerHTML = '<img src="' + file + '" />';
      };
      reader.readAsDataURL(evt.target.files[0]);
      this.imgPreview = evt.target.files[0];
      this.form.imgUri = evt.target.files;
    }
  }
  _handleAddTag(evt) {
    if (evt.key === "Enter" && this.form.tags.length <= 4) {
      this.tag = evt.target.value;
      this.form.tags.push(this.tag);
      this.form = { ...this.form };
      this.tag = "";
    } else {
      this.tag = "";
    }
  }
  _handleDeleteTag(evt) {
    console.log(evt.target.id);
    const tag = evt.target.id;
    const resultado = this.form.tags.filter((item) => item != tag);
    this.form.tags = resultado;
    this.form = { ...this.form };
  }
  _handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    if (name !== "tag") {
      const newValues = {
        ...this.form,
        [name]: value,
      };
      this.form = newValues;
      this._validateForm();
    }
  }
}
customElements.define("modal-popup", ModalPopup);
