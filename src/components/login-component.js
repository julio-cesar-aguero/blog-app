import { LitElement,html } from 'lit';
import styles from '../css/login-styles'
export class LoginComponent extends LitElement {
    static get properties() {
        return {
            enabledSubmit: { type: Boolean },
            form: { type: Object }
        };
    }
    constructor(){
        super();
        this.enabledSubmit = true;
        this.form = {
            email : 'mail@mail.com',
            password : '123',
        }
    }
    static styles = [
        styles
    ];
    render() {
        return html`
        <div class="form-box login">
                <h2>Login</h2>
                <form>
                    <div class="input-box">
                        <span class="icon">
                        <ion-icon name="mail"></ion-icon>
                        </span>
                        <input id="email" name="email" .value=${this.form.email} type="email" @change="${this._handleChange}">
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                    <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input id="password" name="password" .value=${this.form.password}  type="password" @change="${this._handleChange}" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox">
                            Remember me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button  type="submit" @click="${this._login}" class="btn">Login</button>
                    <div class="login-register">
                        <p>Don´t have an account?
                        <a href="#" @click="${()=>{
                            const viewName = 'register'
                            this.dispatchEvent(
                                new CustomEvent("changeV", {
                                    bubbles: true,
                                    detail: { viewName },
                                })
                            )
                        }}" class="register-link">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        `;
    }
    _login(e){
        e.preventDefault();
        
    }
    _handleChange(evt){
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...this.form,
            [name]: value,
          };
        this.form = newValues;
    }
}
customElements.define('login-component', LoginComponent);
