import { LitElement, html, css } from "lit";
import styles from "../css/login-styles";
import "./login-component";
import "./register-component";
import { users } from "../data/index"

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
  firstUpdated() {
    console.log(users)
  }
  render() {
    return html`
      <div class="wrapper">
        ${this.view
        ? html`<login-component
              .alertToast="${this.alert}"
              @sign="${this._login}"
              @changeV=${this._changeComponent}
            ></login-component>`
        : html`<register-component
              @changeV=${this._changeComponent}
            ></register-component>`}
      </div>
    `;
  }
  _login(e) {
    const data = e.detail.data;
    const { email, password } = data;
    try {
      if (!this._validateData(email, password)) {
        throw new Error('email o password vacios');
      }
      const user = this._findUser(email, password);
      if (user === false){
        throw new Error('usuario no encontrado');
      }
      const sessionUser = {
        dataUser: user,
        login: true
      } 
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
      if(result.password === password){
        return result;
      }else{
        return false;
      }
  }
  _validateUser(email, password) {

  }
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
