import { LitElement, html, css } from "lit";

export class AsideComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
        <div class="aside">
            <div class="topics">
                <h2 class="h2">Topics</h2>
                <a href="" class="topic-btn">
                    <div class="icon-box">
                        <ion-icon name="server-outline"></ion-icon>
                    </div>
                    <p>Database</p>
                </a>
                <a href="" class="topic-btn">
                    <div class="icon-box">
                        <ion-icon name="accessibility-outline"></ion-icon>
                    </div>
                    <p>Accessibility</p>
                </a>
                <a href="" class="topic-btn">
                    <div class="icon-box">
                        <ion-icon name="rocket-outline"></ion-icon>
                    </div>
                    <p>Web Performance</p>
                </a>
            </div>
            <div class="tags">
                <h2 class"h2">Tags</h2>
                <div class="wrapper">
                    <button class="hashtag">#mongodb</button>
                    <button class="hashtag">#nodejs</button>
                    <button class="hashtag">#typescript</button>
                    <button class="hashtag">#lit element</button>
                    <button class="hashtag">#web components</button>
                    <button class="hashtag">#responsive design</button>
                </div>
            </div>
        </div>
        `;
  }
}
customElements.define("aside-component", AsideComponent);
