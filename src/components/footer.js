import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('footer', Footer);
