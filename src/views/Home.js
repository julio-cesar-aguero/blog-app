import { LitElement, html, css } from 'lit';

export class Home extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`Bienvenido`;
    }
}
customElements.define('home-view', Home);
