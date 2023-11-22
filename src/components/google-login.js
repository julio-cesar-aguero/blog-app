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
      <button>
        <ion-icon name="logo-google"></ion-icon>Login with Google
      </button>
    `;
  }
  _singIn(e) {
    e.preventDefault();
    console.log("entro");
    const params = 'params';
    this.dispatchEvent(
      new CustomEvent("successGoogle", {
        bubbles: true,
        detail: { params },
      })
    );
  }
}
customElements.define("google-login", GoogleLogin);
