import { LitElement, html, css } from 'lit';
import './components/ navbar-component.js';
import './components/login-register-component.js';
import './views/Home'

class BlogApp extends LitElement {
  static properties = {
    header: { type: String },
    sessionUser: { type: Object },
    isLogged: { type: Boolean }
  }


  static styles = css`

    :host{
      position: relative;
      background-color: var(--bg-color);
      overflow-y: hidden;
    }

    main{
      background-color: var(--bg-color);
      position: relative;
      z-index: 10;
      width: 100%;
      height: auto;
      min-height: 100vh;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.isLogged = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this._isSessionUserActive();
  }
 
  render() {
    return html`
    
      
      
    <navbar-component .logged="${this.isLogged}" .session="${this.sessionUser}" @logout=${this._handleLogOut}></navbar-component>
    <main>
    ${this.isLogged ? html`<home-view .session="${this.sessionUser}"></home-view>` : html`<login-register-component @success="${this._handleSuccess}"></login-register-component>`
      }
    </main>
    `;
  }
  _isSessionUserActive() {
    if (localStorage.getItem('sessionActive')) {
      const session = JSON.parse(localStorage.getItem('sessionActive'));
      this.isLogged = true;
      this.sessionUser = session;
      this.sessionUser = { ...this.sessionUser }
    }
  }
  _handleSuccess(evt) {
    
    console.log("session user++",evt.detail.sessionUser.data.token);
    console.log(localStorage.getItem('token'))
    if (evt.detail.sessionUser.data.token === localStorage.getItem('token')) {
      const session = evt.detail.sessionUser;
      this.isLogged = true;
      localStorage.setItem('sessionActive', JSON.stringify(session));
    }
  }
  _handleLogOut(evt) {
    if (evt.detail.sessionState === 'destroy') {
      this.isLogged = false;
      this.requestUpdate();
      localStorage.removeItem('token');
      localStorage.removeItem('sessionActive');
    }
  }
}

customElements.define('blog-app', BlogApp);