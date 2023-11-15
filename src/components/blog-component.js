import { LitElement, html, css } from "lit";
import "./aside-component";
import styles from "../css/blog-styles";
export class BlogComponent extends LitElement {
  static get properties() {
    return {
      entradas: { type: Object},
    };
  }
  static get styles() {
    return [styles];
  }
  constructor(){
  super();
  this.entradas = {}
  }
  firstUpdated(){
    console.log("entradas",this.entradas[0].folderfile)
  }
  render() {
    return html`
      <div class="container">
        <div id="blog" class="blog">
          <h2 class="h2">Lastest Blog Post</h2>
          <div class="blog-card-group">
            ${this.entradas.map(
              (entrada) =>
                html`
                  <div class="blog-card">
                    <div class="blog-card-banner">
                    <div class="group-button__actions">
                      <img id="${entrada._id}" src="../../assets/edit.png" @click="${this._handleEditEntrada}" class="btn__action btn__warning">
                      <img id="${entrada._id}" src="../../assets/delete.png" @click="${this._handleDeleteEntrada}" class="btn__action btn__alert">
                    </div>
                      <img
                        src="http://77.243.85.199/images/entradas/${entrada.imgUri}"
                        alt=""
                        class="blog-banner-img"
                      />
                    </div>
                    <div class="blog-content-wrapper">
                      <div class="project__tags">
                        ${entrada.tags.map(
                          (tag) =>
                            html`<span class="project__tag">#${tag}</span>`
                        )}
                      </div>
                      <h3>
                        <a href="#" class="h3"> ${entrada.title} </a>
                      </h3>
                      <p class="blog-text">${entrada.textTopic}</p>
                      <div class="wrapper-flex">
                        <div class="profile-wrapper">
                          <ion-icon name="time-outline"></ion-icon>
                        </div>
                        <div class="wrapper">
                          <a href="#" class="h4">${entrada.autor}</a>
                          <p class="text-sm">
                            <time datetime="2022-01-17">Jan 17, 2022</time>
                            <span class="separator"></span>
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT3M">3 min</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                `
            )}
          </div>
        </div>
        <aside-component></aside-component>
      </div>
    `;
  }
  _handleDeleteEntrada(evt){
    console.log("id a eliminar",evt.target.id);
    const id = evt.target.id
    this.dispatchEvent(
      new CustomEvent("delete-data", {
        bubbles: true,
        detail: { id },
      })
    );
  }
  _handleEditEntrada(){
    this.dispatchEvent(
      new CustomEvent("edit-data", {
        bubbles: true,
        detail: { data, modalState },
      })
    );
  }
}
customElements.define("blog-component", BlogComponent);
