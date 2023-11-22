import { LitElement, html, css } from 'lit';

export class About extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<h1>About page</h1>`;
    }
}
customElements.define('about-view', About);
