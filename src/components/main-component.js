import { LitElement, html, css } from "lit";
import styles from "../css/main-styles";
export class MainComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <main class="main">
        <section class="main__grid">
          <picture class="main__picture">
            <source
              srcset="../assets/images/image-hero-desktop.png"
              class="main__img"
              media="(min-width:768px)"
            />
            <img
              src="../assets/images/image-hero-mobile.png"
              class="main__img"
            />
          </picture>
          <article class="main__article">
            <div class="main__texts">
              <h1 class="main__title">Make remote work</h1>
              <p class="main__paragraph">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <a href="#" class="main__cta">Learn more</a>
            </div>
            <div class="main__brands">
              <img
                src="../assets/images/client-databiz.svg"
                class="main__brand"
              />
              <img
                src="../assets/images/client-audiophile.svg"
                class="main__brand"
              />
              <img src="../assets/images/client-meet.svg" class="main__brand" />
              <img
                src="../assets/images/client-maker.svg"
                class="main__brand"
              />
            </div>
          </article>
        </section>
      </main>
    `;
  }
}
customElements.define("main-component", MainComponent);
