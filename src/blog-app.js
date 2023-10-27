import { LitElement, html, css } from 'lit';
import './components/ navbar-component.js';
import './components/login-register-component.js';
import './views/Home'

class BlogApp extends LitElement {
  static properties = {
    header: { type: String },
    isLogged: { type: Boolean}
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
    this.isLogged = true;
  }

  render() {
    return html`
    <navbar-component></navbar-component>
    <main>
    ${
      this.isLogged ? html`<home-view></home-view>`:html`<login-register-component></login-register-component>`
    }
    
    </main>
    
    `;
  }
}

customElements.define('blog-app', BlogApp);