import { LitElement, html, css } from 'lit';
import styles from '../css/login-styles'
import './login-component'
import './register-component'
export class LoginRegisterComponent extends LitElement {
    static styles = [
        styles
    ];
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
            message: ''
        }
    }
    render() {
        return html`
        <div class="wrapper">
        ${this.view ? html`<login-component .alertToast="${this.alert}" @sign="${this._login}"  @changeV=${this._changeComponent}></login-component>` : html`<register-component  @changeV=${this._changeComponent}></register-component>`
            }
        </div>
        `;
    }
    _login(e) {

        const data = e.detail.data;
        const { email, password } = data;
        if (!!email && !!password) {
            this.alert.state = false;
            this.alert = { ...this.alert};
        } else {
            this.alert.state = true;
            const name = 'state'
            const state = true;
            const newValues = { ...this.alert, [name]: state };
            this.alert = newValues;
            this.requestUpdate();
        }
        /*this.dispatchEvent(new CustomEvent('success',{
            detail: { login: true },
            bubbles: true, composed: true
        }));*/
    }
    _changeView() { }
    _changeComponent(e) {
        if (e.detail.viewName === 'login') {
            this.view = true;
        }
        if (e.detail.viewName === 'register') {
            this.view = false;
        }
    }
}
customElements.define('login-register-component', LoginRegisterComponent);
