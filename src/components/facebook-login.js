import { LitElement, html, css } from 'lit';

export class FacebookLogin extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            button{
                margin: 10px 0;
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
            button:hover{
                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            }
            ion-icon{
                padding: 0 0.5em;
            }
        `
    ];

    render() {
        return html`
        <button @click="${this._singIn}"><ion-icon name="logo-facebook"></ion-icon>Login with Facebook</button>
        `;
    }
}
customElements.define('facebook-login', FacebookLogin);
