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
      width: 100%;
      height: 100%;
      background-image: url('../assets/background.jpg');
    }

    main{
      position: relative;
      z-index: 10;
      width: 100%;
      height: auto;
      min-height: 100vh;
      padding-top: 100px;
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

  render() {
    return html`
    <navbar-component .logged="${this.isLogged}" .session="${this.sessionUser}" @logout=${this._handleLogOut}></navbar-component>
    <main>
    ${this.isLogged ? html`<home-view .session="${this.sessionUser}"></home-view>` : html`<login-register-component @success="${this._handleSuccess}"></login-register-component>`
      }
    </main>
    `;
  }
  _handleSuccess(evt) {
    console.log(evt.detail.sessionUser);
    if (evt.detail.sessionUser.login === true) {
      this.isLogged = true;
    }
  }
  _handleLogOut(evt) {
    if (evt.detail.sessionState === 'destroy') {
      this.isLogged = false;
      this.requestUpdate();
    }
  }
}

customElements.define('blog-app', BlogApp);