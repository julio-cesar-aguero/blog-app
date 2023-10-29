import { LitElement, html, css } from "lit";
import styles from "../css/navbar-styles";
import { Features } from "../constants/index";
import './user-component';

export class NavbarComponent extends LitElement {
  static get styles() {
    return [styles];
  }
  static get properties() {
    return {
      isOpen: { type: Boolean },
      currentDropdown: { type: String },
      logged: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.isOpen = false;
    this.currentDropdown = "";
  }
  updated() { }
  firstUpdated() {
    this.currentDropdown = this.shadowRoot.getElementById("nav-overlay");
    this._resize();
  }
  render() {
    return html`
      <div class="container">
        <nav class="nav">
          <img
            class="nav__img"
            src="../../assets/images/logo.svg"
            alt="logo-img"
          />
          <div
            class=${this.isOpen
        ? "nav__hamburger nav__hamburger--open"
        : "nav__hamburger"}
            @click="${this._openCloseMenu}"
          ></div>

          <div
            id="nav-overlay"
            class="${this.isOpen
        ? "nav__overlay"
        : "nav__overlay nav__overlay--close"}"
            @click="${this._option}"
          >
            <ul class="nav__menu">
              <li class="nav__item">
                <span class="nav__parent">
                  Features
                  <img src="../../assets/images/icon-arrow-down.svg" alt="" />
                </span>
                <ul class="nav__inner">
                  ${Features.map(
          (Link) => html`
                      <li class="nav__dropdown">
                        <a href="" class="nav__link">
                          <img
                            src="../assets/images/${Link.icon}"
                            class="nav__ilustration"
                          />
                          ${Link.title}
                        </a>
                      </li>
                    `
        )}
                </ul>
              </li>

              <li class="nav__item">
                <span class="nav__parent">
                  Company
                  <img
                    src="../../assets/images/icon-arrow-down.svg"
                    alt=""
                    class="nav__arrow"
                  />
                </span>

                <ul class="nav__inner">
                  <li class="nav__dropdown">
                    <a href="" class="nav__link">History</a>
                  </li>
                  <li class="nav__dropdown">
                    <a href="" class="nav__link">Our Team</a>
                  </li>
                  <li class="nav__dropdown">
                    <a href="" class="nav__link">Blog</a>
                  </li>
                </ul>
              </li>

              <li class="nav__item">
                <a href="" class="nav__link">Careers</a>
              </li>

              <li class="nav__item">
                <a href="" class="nav__link">About</a>
              </li>

              ${this.logged ? html`
              <div class="nav__user">
              <li class="nav__item nav__item-user">
                <span class="nav__parent">
                <ion-icon name="person"></ion-icon>
                  User
                  <img
                    src="../../assets/images/icon-arrow-down.svg"
                    alt=""
                    class="nav__arrow"
                  />
                </span>

                <ul class="nav__inner nav__inner-user">
                  <li class="nav__dropdown">
                    <a href="" class="nav__link">Me</a>
                  </li>
                  <li class="nav__dropdown">
                    <a href="" class="nav__link" @click="${this._logOut}">Log Out</a>
                  </li>
                </ul>
              </li>

              </div>
              ` : html`<div class="nav__user">
                <li class="nav__login">
                  <a href="" class="nav__sign">Login</a>
                </li>
                <li class="nav__login nav__login--border">
                  <a href="" class="nav__sign">Register</a>
                </li>
                </div>`
      }
              
              
            </ul>
          </div>
        </nav>
      </div>
    `;
  }
  _openCloseMenu(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  _option(e) {
    e.preventDefault();
    const currentElement = e.target;
    let currentDropdown = currentElement.parentElement.children[1];
    if (this._isActive(currentElement, "nav__parent")) {
      const subMenu = currentElement.parentElement.children[1];
      if (window.innerWidth < 768) {
        let height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0;
        subMenu.style.height = `${height}px`;
      } else {
        this.toggleMenu(e);
      }
    }
  }
  _logOut() {
    const sessionState = 'destroy'
    this.dispatchEvent(
      new CustomEvent("logout", {
        bubbles: true,
        detail: { sessionState },
      })
    )
  }
  toggleMenu(e) {
    let menu = e.target.parentElement.children[1];
    if (!this._isActive(menu, "nav__inner--show")) {
      this._closeDropdown();
    }
    menu.classList.toggle("nav__inner--show");
    this.currentDropdown = menu;
  }
  _closeDropdown() {
    if (this._isActive(this.currentDropdown, "nav__inner--show")) {
      this.currentDropdown.classList.remove("nav__inner--show");
    }
  }

  _isActive(element, string) {
    return element.classList.value.includes(string);
  }
  _resize() {
    window.addEventListener("resize", () => {
      this._closeDropdown();
      if (window.innerWidth > 768) {
        const navInners = this.shadowRoot.querySelectorAll(".nav__inner");
        navInners.forEach((navInner) => {
          navInner.style.height = "";
        });
      }
    });
  }
}
customElements.define("navbar-component", NavbarComponent);
