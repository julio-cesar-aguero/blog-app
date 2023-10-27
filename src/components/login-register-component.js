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
        };
    }
    constructor(){
        super();
        this.view = true;
    }
    render() {
        return html`
        <div class="wrapper">
        ${
        this.view ? html`<login-component  @changeV=${this._changeComponent}></login-component>`:html`<register-component  @changeV=${this._changeComponent}></register-component>`
        }
        </div>
        `;
    }
    _changeView(){}
    _changeComponent(e){
        if(e.detail.viewName === 'login'){
            this.view = true;
        }
        if(e.detail.viewName === 'register'){
            this.view = false;
        }
    }
}
customElements.define('login-register-component', LoginRegisterComponent);
