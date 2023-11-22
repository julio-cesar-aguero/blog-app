import { LitElement, html } from "lit";
import "./google-login";
import "./facebook-login";
import styles from "../css/login-styles";
const clientId =
  "209356081847-4daott4ap0m8b6cv7u39vk2hfbirp1g6.apps.googleusercontent.com";
export class LoginComponent extends LitElement {
  static get properties() {
    return {
      enabledSubmit: { type: Boolean },
      form: { type: Object },
      alertToast: { type: Object },
    };
  }
  constructor() {
    super();
    this.enabledSubmit = true;
    this.form = {
      email: "anahi3@prueba.com",
      password: "123456",
    };
  }
  firstUpdated() {
    super.firstUpdated();
  }
  static styles = [styles];
  render() {
    return html`
      <div class="form-box login">
        <h2>Login</h2>
        <div
          class="${this.alertToast.state
            ? "alert-message alert-message--active"
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
        <form>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              id="email"
              name="email"
              .value=${this.form.email}
              type="email"
              @change="${this._handleChange}"
            />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              id="password"
              name="password"
              .value=${this.form.password}
              type="password"
              @change="${this._handleChange}"
              required
            />
            <label>Password</label>
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" @click="${this._login}" class="btn">
            Login
          </button>

          <span>OR</span>
          <br />
          <div id="signInButton">
            <button @click="${this.loginGoogle}">
              Iniciar Sesión con Google
            </button>
          </div>
          <div id="signInButton">
            <button @click="${this.loginFacebook}">
              Iniciar Sesión con Facebook
            </button>
          </div>
          <div class="login-register">
            <p>
              Don´t have an account?
              <a
                href="#"
                @click="${() => {
                  const viewName = "register";
                  this.dispatchEvent(
                    new CustomEvent("changeV", {
                      bubbles: true,
                      detail: { viewName },
                    })
                  );
                }}"
                class="register-link"
                >Register</a
              >
            </p>
          </div>
        </form>
      </div>
    `;
  }

  loginGoogle(e) {
    e.preventDefault();
    const social = "google";
    console.log(social);
    this.dispatchEvent(
      new CustomEvent("signGoogle", {
        detail: { data: social },
        bubbles: true,
        composed: true,
      })
    );
  }
  loginFacebook(e) {
    e.preventDefault();
    const social = "facebook";
    console.log(social);
    this.dispatchEvent(
      new CustomEvent("signFacebook", {
        detail: { data: social },
        bubbles: true,
        composed: true,
      })
    );
  }
  _login(e) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("sign", {
        detail: { data: this.form },
        bubbles: true,
        composed: true,
      })
    );
  }
  _handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...this.form,
      [name]: value,
    };
    this.form = newValues;
  }
  _closeToast() {
    this.alertToast.state = false;
    this.alertToast = { ...this.alertToast };
  }
}
customElements.define("login-component", LoginComponent);
