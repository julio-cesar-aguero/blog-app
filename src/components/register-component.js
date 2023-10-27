import { LitElement,html } from 'lit';
import styles from '../css/login-styles'
export class RegisterComponent extends LitElement {
    static styles = [
        styles
    ];
    render() {
        return html`
        <div class="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon">
                        <ion-icon name="person"></ion-icon>
                        </span>
                        <input type="text" required>
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                        <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                    <span class="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox">
                            I agree to the terms & conditions
                        </label>
                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div class="login-register">
                        <p>Already have an account?
                        <a href="#" @click="${()=>{
                            const viewName = 'login'
                            this.dispatchEvent(
                                new CustomEvent("changeV", {
                                    bubbles: true,
                                    detail: { viewName },
                                })
                            )
                        }}" class="login-link">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        `;
    }
    
}
customElements.define('register-component', RegisterComponent);
