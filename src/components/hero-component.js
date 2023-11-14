import { LitElement, html, css } from "lit";
import "./modal-popup";
export class HeroComponent extends LitElement {
  static styles = [
    css`
      .hero {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 80%;
        margin: 100px auto;
        background-color: var(--bg-card-color);
        padding: 1em 1.5em;
        border-radius: 1em;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0.5em;
        border-radius: 1em;
        width: 100%;
        backdrop-filter: blur(20px);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
      .hero .left {
        width: 70%;
      }
      .hero .h1 {
        margin-bottom: 1rem;
        line-height: 1.6;
        text-align: center;
      }
      .hero b {
        color: var(--primary-color);
        font-weight: 800;
      }
      .hero .h3 {
        color: var(--text-color);
        margin-bottom: 2rem;
      }
      .left p {
        font-size: 0.8rem;
        text-align: center;
      }
      .hero .hero__btn-group {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        text-align: center;
      }

      .btn {
        padding: 0.7em 1.5em;
        min-width: 10px;
        border-radius: 1em;
        text-decoration: none;
      }
      .btn-primary {
        background-color: var(--primary-color);
        color: white;
      }
      .btn-primary:hover {
        background-color: var(--bg-color);
        color: var(--primary-color);
      }
      .btn-secondary {
        backdrop-filter: blur(200px);
        color: var(--primary-color);
        border: 3px solid #1e56ff;
      }
      .hero .right {
        display: none;
        width: 30%;
      }
      .hero .right .img-box img {
        width: 100%;
      }
      @media (min-width: 768px) {
        .hero .right {
          display: flex;
        }
        .hero .h1 {
          line-height: 1.2;
          padding-left: 1em;
          text-align: left;
          margin-bottom: 0.4rem;
        }
        .left p {
          margin: 0 auto;
          line-height: 2;
          width: 90%;
          font-weight: 300;
          font-size: 1rem;
          text-align: justify;
          padding-left: 0.5rem;
        }
        .hero .hero__btn-group {
          margin-top: 40px;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="hero">
        <div class="container">
          <div class="left">
            <h1 class="h1">Bienvenido <b>Julio Cesar Aguero</b></h1>

            <div class="hero__btn-group">
              <a
                href="#"
                class="btn btn-primary"
                @click="${() => {
                  const modalState = true;
                  this.dispatchEvent(
                    new CustomEvent("activeM", {
                      bubbles: true,
                      detail: { modalState },
                    })
                  );
                }}"
                >Nueva entrada</a
              >
              <a
                href="javascript:alert(document.domain)"
                class="btn btn-secondary"
                >Entradas</a
              >
            </div>
          </div>
          <div class="right">
            <div class="patter-bg"></div>
            <div class="img-box">
              <img src="../../assets/4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hero-component", HeroComponent);
