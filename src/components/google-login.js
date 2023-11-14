import { LitElement, html, css } from "lit";

export class GoogleLogin extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      button {
        background-color: #ffffff;
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        border-radius: 1em;
        border: 2px solid #3333;
        padding: 1em;
        backdrop-filter: blur(120px);
        cursor: pointer;
      }
      button:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
      ion-icon {
        padding: 0 0.5em;
      }
    `,
  ];

  render() {
    return html`
      <button @click="${this._singIn}">
        <ion-icon name="logo-google"></ion-icon>Login with Google
      </button>
    `;
  }
  _singIn(e) {
    e.preventDefault();
    console.log("entro");
    let oauth2EndPoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2EndPoint);
    let params = {
      client_id:
        "209356081847-4daott4ap0m8b6cv7u39vk2hfbirp1g6.apps.googleusercontent.com",
      redirect_uri: "http://localhost:8000",
      response_type: "token",
      scope: "https://www.googleapis.com/auth/userinfo.profile",
      include_granted_scopes: "true",
      state: "pass-through-value",
    };
    for (var p in params) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    this.dispatchEvent(
      new CustomEvent("successGoogle", {
        bubbles: true,
        detail: { params },
      })
    );
  }
}
customElements.define("google-login", GoogleLogin);
