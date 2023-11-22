import { LitElement, html, css } from "lit";
import styles from "../css/login-styles";
import "./login-component";
import "./register-component";
import { Router } from '@vaadin/router';
import { users } from "../data/index";

export class LoginRegisterComponent extends LitElement {
  static styles = [styles];
  static get properties() {
    return {
      view: { type: String },
      alert: { type: Object },
    };
  }
  constructor() {
    super();
    this.view = true;
    this.alert = {
      state: false,
      message: "",
    };
  }
connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(){
    super.firstUpdated();
    
    if(localStorage.getItem('sessionActive')){
      Router.go({ pathname: "/home" });
    }
  }
 
  render() {
    return html`
      
    <div class="wrapper">
      
        ${this.view
          ? html`
          <login-component
              .alertToast="${this.alert}"
              @sign="${this._login}"
              @signGoogle="${this.methodX}"
              @changeV=${this._changeComponent}
            ></login-component>`
          : html`<register-component
              @changeV=${this._changeComponent}
            ></register-component>`}
      </div>
    `;
  }

  async methodX(){
    window.open("http://localhost:3000/api/google", "_self")
    const res = await fetch("http://localhost:3000/api/login/success", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resDB = await res.json();
    console.log(resDB);
    
  }
  async _login(e) {
    const data = e.detail.data;
    const { email, password } = data;
    const userPrev = {
      email: email,
      password: password,
    };
    console.log("usuario a enviar al servidor", userPrev);
    try {
      if (!this._validateData(email, password)) {
        throw new Error("email o password vacios");
      }
      const sessionUser = await this._getSession(userPrev);
      console.log("session", sessionUser);
      localStorage.setItem("sessionActive", JSON.stringify(sessionUser));
      this.dispatchEvent(
        new CustomEvent("success", {
          detail: { sessionUser },
          bubbles: true,
          composed: true,
        })
      );
      this._resetAlert;
    } catch (error) {
      this.alert.state = true;
      this.alert.message = error.message;
      const newValues = { ...this.alert };
      this.alert = newValues;
      this.requestUpdate();
    }
  }
  async _getSession(user) {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resDB = await res.json();
    localStorage.setItem("token", resDB.data.token);
    try {
      if (!resDB) {
        throw new error("No hay respuesta del servidor");
      }
      console.log("respuesta", resDB);
      return resDB;
    } catch (error) {
      console.log("Error", error.message);
    }
  }
  _validateData(email, password) {
    if (!!email && !!password) {
      return true;
    }
    return false;
  }
  _findUser(email, password) {
    let result = users.find((user) => user.email === email);
    if (!result) {
      return false;
    }
    if (result.password === password) {
      return result;
    } else {
      return false;
    }
  }
  _validateUser(email, password) {}
  _resetAlert() {
    this.alert = {};
  }
  _changeComponent(e) {
    if (e.detail.viewName === "login") {
      this.view = true;
    }
    if (e.detail.viewName === "register") {
      this.view = false;
    }
  }
}
customElements.define("login-register-component", LoginRegisterComponent);
