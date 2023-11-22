import { Router } from "@vaadin/router";
import { LitElement, html, css } from "lit";
import "./Home.js"
import "./About.js"
export class Layout extends LitElement {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector("#outlet"));
    router.setRoutes([
      { path: "/home", component: "home-view" },
      { path: "/login", component: "login-register-component" },
      { path: "/about", component: "about-view" },
      { path: "(.*)", redirect: "/home" },
    ]);
  }
  render() {
    return html`
      <div id="outlet" slot="outlet">
        
      </div>
    `;
  }
}
customElements.define("layout-view", Layout);
